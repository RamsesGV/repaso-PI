//! SE ENCARGA DE TODO TANTO DE MOSTRAR LAS RUTAS PRINCIPALES COMO EXPORTAR AL SERVER Y USAR LOS MIDDLEWARES
//Exportar dependencias y/0 carpetas
const express = require('express');
const morgan = require('morgan');
const app = express()
const mainRouter = require('./routes/mainRouter')

//MIDDLEWARES!
app.use(morgan('dev'))
app.use(express.json())

//Rutas

//para que funcione la modularizacion! 
app.use(mainRouter)


//EXPORTAMOS.
module.exports = app; 
