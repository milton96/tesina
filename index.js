//Llamamos a los modulos que usaremos
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Creamos una app express
const app = express();

//Parseamos el tipo del contenido de los request - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//Parseamos el tipo del contenido de los request - application/json
app.use(bodyParser.json())

//Configurando la base de datos
const dbConfig = require('./config/database.js');

mongoose.Promise = global.Promise;

//Connectando a la base de datos
mongoose.connect(dbConfig.url, { useNewUrlParser: true } )
.then(() => {
    console.log("Conexión exitosa a la base de datos.");
}).catch(err => {
    console.log("No se a podido conectar a la base de datos. Saliendo...");
    process.exit();
});

//Definimos una ruta simple
app.get('/', (req, res) => {
    res.json({"message": "Bienvenido al servidor..."});
});

//Llamamos a las rutas de la aplicación
require('./app/routes/routes.js')(app);

//Ponemos el servidor a escuchar los request
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});