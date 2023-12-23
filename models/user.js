const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter your name"],
    },
    password: {
        type: String,
        required: [true, "enter password"],
        unique: true
    }
}, {
    timestamps: true
});

// create collection
const User = new mongoose.model("User", userSchema);

module.exports = User;