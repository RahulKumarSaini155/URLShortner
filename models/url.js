const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    // original url
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{
        timestamp: {
            type: Number
        }
    }],
}, {
    timestamps: true
});

const URL = mongoose.model('URL', urlSchema);
module.exports = URL;