//const axios = require('axios')
const { Post} = require('../db')

const createPostDB = async (title,body,userId) => { 
    const post = await Post.create({body,title})
    await post.setUser(userId)
    return post
}

const getPostDb = async() => { 
    const posts = await  Post.findAll()
    return posts
}

module.exports = { 
    createPostDB,
    getPostDb
}