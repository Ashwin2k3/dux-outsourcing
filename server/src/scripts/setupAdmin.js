const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const createAdminUser = async () => {
  try {
    console.log('Connecting to MongoDB...');
    console.log('MongoDB URI:', process.env.MONGODB_URI);
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');

    // Check if admin already exists
    console.log('Checking for existing admin user...');
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists:', {
        email: existingAdmin.email,
        role: existingAdmin.role
      });
      process.exit(0);
    }

    // Create admin user
    console.log('Creating new admin user...');
    const adminUser = new User({
      name: 'Admin User',
      email: 'duxoutsourcing@gmail.com',
      password: await bcrypt.hash('dux123', 10),
      role: 'admin',
    });

    await adminUser.save();
    console.log('Admin user created successfully');
    console.log('Admin user details:', {
      email: adminUser.email,
      role: adminUser.role,
      _id: adminUser._id
    });

  } catch (error) {
    console.error('Error creating admin user:', error);
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

createAdminUser(); 