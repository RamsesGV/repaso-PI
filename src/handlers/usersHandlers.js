const { 
    createUserDB,
    //getUserDB,
    getUserByIdDB,
    getAllUsers,
    deleteUser
} = require('../controllers/usersControllers')

const getUserHandler = async (req, res) => { 
    const { name } = req.query
    try {
        if(name) { 
        const response = await getAllUsers(name)
            return  res
                .status(200)
                .json(response)
            }
            const responseAll = await getAllUsers()
                res.status(200).send(responseAll)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

const getUsersIdHandler = async (req,res) => { 
    const { id } =  req.params
    try {
        const response = await getUserByIdDB(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    } 
    
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

const deleteUserHandler = async (req,res) => { 
    const { id } = req.params
    try {
        await deleteUser(id)
        res.status(200).send(`usuario con id: ${id} fue eliminado`)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports ={ 
    getUserHandler,
    getUsersIdHandler,
    postsUserHandler,
    deleteUserHandler,
}