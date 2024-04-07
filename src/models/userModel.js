const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    refreshToken: {
        type: String,
        default: null
    },
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.createRefreshToken = function() {
    const refreshToken = jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
    this.refreshToken = refreshToken; // Save the refresh token in the user's document
    return refreshToken;
};

module.exports = mongoose.model('User', userSchema);