const mongoose = require('mongoose');

const TempSchema = mongoose.Schema({
    value: Number,
},{
    timestamps: true,
    versionKey: false 
});

const PHSchema = mongoose.Schema({
    value: Number,
},{
    timestamps: true,
    versionKey: false 
});

const TurbSchema = mongoose.Schema({
    value: Number,
},{
    timestamps: true,
    versionKey: false 
});

module.exports = mongoose.model('Temperatura', TempSchema);

module.exports = mongoose.model('PH', PHSchema);

module.exports = mongoose.model('Turbidez', TurbSchema);