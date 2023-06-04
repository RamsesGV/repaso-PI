const { Router } = require('express')
const postsRouter = Router()
const { getPostsHandler,postHandler } = require('../handlers/postsHandlers')

postsRouter.get('/',getPostsHandler)
postsRouter.post('/',postHandler)

module.exports = postsRouter