
const getPostsHandler = (req,res) => { 
    res.status(200).send('posts ok')
}

module.exports = { 
    getPostsHandler
}