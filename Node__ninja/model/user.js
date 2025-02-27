
const mongoose = require('mongoose');

// Define a User schema (structure of user data)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
