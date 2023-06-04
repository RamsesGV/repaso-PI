const { Router } = require('express')
const usersRouter = Router()

const { 
    getUserHandler ,
    getUsersIdHandler,
    postsUserHandler,
    deleteUserHandler,
} = require('../handlers/usersHandlers')

usersRouter.get('/',getUserHandler);

usersRouter.get('/:id',getUsersIdHandler)

usersRouter.post('/',postsUserHandler)

usersRouter.delete('/:id', deleteUserHandler)

module.exports = usersRouter