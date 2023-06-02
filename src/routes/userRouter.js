const { Router } = require('express')
const usersRouter = Router()

const { 
    getUserHandler ,
    getUsersIdHandler,
    postsUserHandler
} = require('../handlers/usersHandlers')

usersRouter.get('/',getUserHandler);

usersRouter.get('/:id',getUsersIdHandler)

usersRouter.post('/',postsUserHandler)

module.exports = usersRouter