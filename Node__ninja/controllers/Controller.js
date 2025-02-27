const User = require('../models/User'); // Import User model

// Controller function to fetch users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();  // Get all users from DB
        res.render('home', { user: users[0] });  // Send data to View
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
};
