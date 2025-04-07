const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    features: [{
        type: String,
        required: true
    }],
    pricing: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['web-development', 'mobile-development', 'ui-ux', 'digital-marketing', 'content-writing']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Service', serviceSchema); 