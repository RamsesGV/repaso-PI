const { Router } = require('express')
const postsRouter = Router()
const { getPostsHandler } = require('../handlers/postsHandlers')

postsRouter.get('/',getPostsHandler)

module.exports = postsRouter