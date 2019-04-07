const mongoose = require('mongoose');

const PHSchema = mongoose.Schema({
    value: Number,
},{
    timestamps: true,
    versionKey: false 
});

module.exports = mongoose.model('PH', PHSchema);