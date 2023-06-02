//!MODULARIZAMOS! 
//! AQUI PONEMOS LAS RUTAS Y LAS EXPORTAREMOS PARA QUE LAS RECIBA APP
//! EN APP SE RENDERIZAN CON 1 SOLA LINEA DE CODGIO 
//! HACE LA APP MAS ESCALABLE. 

const { Router } = require('express')
const mainRouter = Router()
const usersRouter = require('./userRouter')
const postsRouter = require('./postsRouter')


mainRouter.use('/users',usersRouter)
mainRouter.use('/posts',postsRouter)





module.exports = mainRouter