const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const removeAdminUser = async () => {
  try {
    console.log('Connecting to MongoDB...');
    console.log('MongoDB URI:', process.env.MONGODB_URI);
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');

    // Remove existing admin user
    console.log('Removing existing admin user...');
    const result = await User.deleteOne({ role: 'admin' });
    console.log('Removal result:', result);

  } catch (error) {
    console.error('Error removing admin user:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    });
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  }
};

removeAdminUser(); 