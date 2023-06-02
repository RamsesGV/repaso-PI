//! Aqui practicamente solo levantamos servidor 
const server = require('./src/app')
const PORT = 3001
const { conn }  = require('./src/db')

server.listen(PORT, () => { 
    conn.sync({alter:true})
    console.log(`Servidor levantado en el puerto http://lo
    calhost:${PORT}/`)
})
//El server se levanto correctamente
//aqui solo estara el server 
//las actualizaciones se generan en app.js
