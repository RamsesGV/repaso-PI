//! SE ENCARGA DE TODO TANTO DE MOSTRAR LAS RUTAS PRINCIPALES COMO EXPORTAR AL SERVER Y USAR LOS MIDDLEWARES
//Exportar dependencias y/0 carpetas
const express = require('express');
const morgan = require('morgan');
const app = express()
const cors = require('cors')
const mainRouter = require('./routes/mainRouter')

//MIDDLEWARES!
app.use(cors())

app.use((req,res,next) => { 
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})


app.use(morgan('dev'))
app.use(express.json())

//Rutas

//para que funcione la modularizacion! 
app.use(mainRouter)


//EXPORTAMOS.
module.exports = app; 
