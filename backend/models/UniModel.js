const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'University name is required'],
    trim: true,
    unique: true
  },
  shortName: {
    type: String,
    trim: true
  },
  location: { 
    type: String, 
    required: [true, 'Location is required'],
    trim: true
  },
  region: { 
    type: String, 
    required: true,
    enum: {
      values: ['north-america', 'europe', 'asia', 'australia', 'latin-america', 'africa', 'middle-east'],
      message: '{VALUE} is not a valid region'
    }
  },
  worldRanking: {
    type: Number,
    min: [1, 'Ranking must be at least 1']
  },
  rating: { 
    type: Number, 
    min: [0, 'Rating cannot be below 0'],
    max: [5, 'Rating cannot exceed 5']
  },
  logo: {
    type: String,
    validate: {
      validator: function(v) {
        return /^(https?:\/\/).+\.(jpg|jpeg|png|gif|svg)$/i.test(v);
      },
      message: props => `${props.value} is not a valid image URL!`
    }
  },
  website: {
    type: String,
    validate: {
      validator: function(v) {
        return /^(https?:\/\/).+/i.test(v);
      },
      message: props => `${props.value} is not a valid website URL!`
    }
  },
  programs: [{
    type: String,
    enum: [
      'engineering', 'computer-science', 'business', 
      'medicine', 'sciences', 'arts', 
      'social-sciences', 'law', 'architecture'
    ]
  }],
  createdAt: { 
    type: Date, 
    default: Date.now,
    immutable: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
universitySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('University', universitySchema);