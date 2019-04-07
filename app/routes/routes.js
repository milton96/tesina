module.exports = (app) => {
    const sensores = require('../controllers/controllers.js');

    //Ruta para la temperatura
    app.post('/temp', sensores.createTemp);
    app.get('/temp', sensores.findLastTemperature);

    //Ruta para el pH
    app.post('/ph', sensores.createPH);
    app.get('/ph', sensores.findLastPH);

    //Ruta para la turbidez
    app.post('/turb', sensores.createTurb);
    app.post('/turb', sensores.findLastTurb);
}