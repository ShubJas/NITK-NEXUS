const mongoose = require('mongoose');
const University = require('./models/UniModel');
const connectDb = require('./config/db');
const fs = require('fs');
const path = require('path');

// Connect to database
connectDb();

// Load university data
const universityData = require('./universityData.json');

// Main seeding function
const seedDB = async () => {
  try {
    // Clear existing data
    await University.deleteMany();
    console.log('Database cleared');
    
    // Insert data
    await University.insertMany(universityData);
    console.log(`Database seeded with ${universityData.length} universities`);
    
    // Verify
    const count = await University.countDocuments();
    console.log(`Verified ${count} universities in database`);
    
    // Sample check
    const samples = await University.aggregate([{ $sample: { size: 3 } }]);
    console.log('Sample universities:', samples.map(u => u.name));
    
    process.exit();
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();