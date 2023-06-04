const {
    createPostDB,
    getPostDb
} = require('../controllers/postControllers')



const getPostsHandler = async(req,res) => { 
    try {
        const response = await getPostDb()
        res.status(200).json(response)  
    } catch (error) {
        res.status(400).json({erorr:error.message})
    }
    
}

const postHandler = async (req,res) => { 
    const { title,body,userId} = req.body
    try {
        const response = await createPostDB(title,body,userId)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({erorr:error.message})
    }
}

module.exports = { 
    getPostsHandler,
    postHandler,
}