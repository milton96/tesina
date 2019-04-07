const Temperatura = require('../models/Temperaturemodel.js');
const PH = require('../models/PHModel.js');
const Turb = require('../models/TurbModel.js');

//Temperatura
exports.createTemp = (req, res) => {
    //Validar el request
    //console.log(req.body.value);
    if(!req.body.value){
        return res.status(400).send({
            message: "La temperatura no puede estar vacía."
        });
    }

    //Crear Temperatura
    const temperatura = new Temperatura({
        value: req.body.value || 0
    });

    //Guardar en la base de datos
    temperatura.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algo ha ocurrido al intentar guardar la información"
        });
    });
};

exports.findLastTemperature = (req, res) => {
    Temperatura.find().sort({$natural: -1}).limit(1)
    .then(temp => {
        res.send(temp);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ha ocurrido un error al obtener la información."
        });
    });
}

//PH
exports.createPH = (req, res) => {
    //Validar el request
    //console.log(req.body.value);
    if(!req.body.value){
        return res.status(400).send({
            message: "El PH no puede estar vacío."
        });
    }

    //Crear PH
    const ph = new PH({
        value: req.body.value || 0
    });

    //Guardar en la base de datos
    ph.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algo ha ocurrido al intentar guardar la información"
        });
    });
};

exports.findLastPH = (req, res) => {
    PH.find().sort({$natural: -1}).limit(1)
    .then(ph => {
        res.send(ph);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ha ocurrido un error al obtener la información."
        });
    });
}

//Turb
exports.createTurb = (req, res) => {
    //Validar el request
    //console.log(req.body.value);
    if(!req.body.value){
        return res.status(400).send({
            message: "La turbidez no puede estar vacía."
        });
    }

    //Crear Turbidez
    const turbidez = new Turb({
        value: req.body.value || 0
    });

    //Guardar en la base de datos
    turbidez.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algo ha ocurrido al intentar guardar la información"
        });
    });
};

exports.findLastTurb = (req, res) => {
    Turb.find().sort({$natural: -1}).limit(1)
    .then(turb => {
        res.send(turb);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ha ocurrido un error al obtener la información."
        });
    });
}