const University = require('../models/UniModel');
const asyncHandler = require('express-async-handler');

// @desc    Get all universities
// @route   GET /api/v1/universities
// @access  Public
exports.getAllUniversities = asyncHandler(async (req, res) => {
  // Basic filtering
  const queryObj = { ...req.query };
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach(el => delete queryObj[el]);

  // Advanced filtering
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
  
  let query = University.find(JSON.parse(queryStr));

  // Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('worldRanking');
  }

  // Field limiting
  if (req.query.fields) {
    const fields = req.query.fields.split(',').join(' ');
    query = query.select(fields);
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const skip = (page - 1) * limit;

  query = query.skip(skip).limit(limit);

  const universities = await query;
  
  res.status(200).json({
    success: true,
    count: universities.length,
    data: universities
  });
});

// @desc    Get single university
// @route   GET /api/v1/universities/:id
// @access  Public
exports.getUniversity = asyncHandler(async (req, res) => {
  const university = await University.findById(req.params.id);
  
  if (!university) {
    res.status(404);
    throw new Error('University not found');
  }

  res.status(200).json({
    success: true,
    data: university
  });
});

// @desc    Create university
// @route   POST /api/v1/universities
// @access  Private/Admin
exports.createUniversity = asyncHandler(async (req, res) => {
  const university = await University.create(req.body);
  
  res.status(201).json({
    success: true,
    data: university
  });
});

// @desc    Update university
// @route   PUT /api/v1/universities/:id
// @access  Private/Admin
exports.updateUniversity = asyncHandler(async (req, res) => {
  const university = await University.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!university) {
    res.status(404);
    throw new Error('University not found');
  }

  res.status(200).json({
    success: true,
    data: university
  });
});

// @desc    Delete university
// @route   DELETE /api/v1/universities/:id
// @access  Private/Admin
exports.deleteUniversity = asyncHandler(async (req, res) => {
  const university = await University.findByIdAndDelete(req.params.id);

  if (!university) {
    res.status(404);
    throw new Error('University not found');
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Search universities
// @route   GET /api/v1/universities/search
// @access  Public
exports.searchUniversities = asyncHandler(async (req, res) => {
  const { q, region, program, ranking } = req.query;
  
  let query = {};
  
  // Text search
  if (q) {
    query.$or = [
      { name: { $regex: q, $options: 'i' } },
      { location: { $regex: q, $options: 'i' } },
      { shortName: { $regex: q, $options: 'i' } }
    ];
  }
  
  // Region filter
  if (region) {
    query.region = region;
  }
  
  // Program filter
  if (program) {
    query.programs = program;
  }
  
  // Ranking filter
  if (ranking === 'top-100') {
    query.worldRanking = { $lte: 100 };
  } else if (ranking === 'top-500') {
    query.worldRanking = { $lte: 500 };
  }
  
  const universities = await University.find(query)
    .sort(req.query.sort || 'worldRanking')
    .limit(parseInt(req.query.limit) || 25);

  res.status(200).json({
    success: true,
    count: universities.length,
    data: universities
  });
});