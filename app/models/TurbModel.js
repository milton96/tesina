const mongoose = require('mongoose');

const TurbSchema = mongoose.Schema({
    value: Number,
},{
    timestamps: true,
    versionKey: false 
});

module.exports = mongoose.model('Turbidez', TurbSchema);