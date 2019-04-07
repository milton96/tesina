const mongoose = require('mongoose');

const TempSchema = mongoose.Schema({
    value: Number,
},{
    timestamps: true,
    versionKey: false 
});

module.exports = mongoose.model('Temperatura', TempSchema);