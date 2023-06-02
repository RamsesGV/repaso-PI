const { 
    createUserDB,
    getUserDB,
} = require('../controllers/usersControllers')

const getUserHandler = async (req, res) => { 
    const { name } = req.query
    try {
        if(name) { 
        const response = await getUserDB(name)
            return  res
                .status(200)
                .json(response)
            }
            const responseAll = await getUserDB()
                res.status(200).send(responseAll)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

const getUsersIdHandler = (req,res) => { 
    const { id } =  req.params
    res.status(200).send(`Usuario con id: ${id}`)
}

const postsUserHandler = async(req,res) => { 
    const {name, email, phone} = req.body
    try {
        const response = await(createUserDB(name,email,phone))
        res
        .status(200)
        .json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}



module.exports ={ 
    getUserHandler,
    getUsersIdHandler,
    postsUserHandler
}