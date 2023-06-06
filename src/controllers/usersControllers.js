const {Op} = require('sequelize')
const axios = require('axios')
const { User } = require('../db')

//bulkcreate
//const createUserDB = async (data) => { 
    //const newUser = await User.bulkCreate(data)
    //return newUser;
    //}

const createUserDB = async (name,email,phone) => { 
const newUser = await User.create({name,email,phone})
return newUser;
}
/********************************************************** */
//V1
//const getUserDB = async (name) => { 
//if(name){
  //  const userByName = await User.findOne({where:{ name }})
   // return userByName
//}
//const allUsers = await User.findAll()
//return allUsers
//}

//V2
//const getUserDB = async (name) => { 
   // const userByName = await User.findAll({
        //order:[['name','DESC']]
   // })
    //return userByName
//}
//V3
//const getUserDB = async (name) => { 
    //if(name){
      //  const userByName = await User.findAll({where:
       //     {
        //    
        //    name:{[Op.iLike]: '%' + name + '%'}
        //    }})
      //  return userByName
   // }
   // const allUsers = await User.findAll()
   // return allUsers
   // }



//V4
const getUserDB = async () => { 
    const allUsers = await User.findAll()
    return allUsers
}

/************************************************************************* */

const getUserByIdDB = async (id) => { 
    if(isNaN(id)){
        const user = await User.findByPk(id)
        return user
    }
    const user = (
        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) 
        ).data
    return user;
    }

/************************************************************************* */
    const getUserApi = async () => { 
        const peticion =(await axios.get(`https://jsonplaceholder.typicode.com/users/`)
        ).data
        const apiInfoMap = peticion.map((user) => { 
            return{
                id:user.id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                
            }
        })
        return apiInfoMap
    } 

    const getAllUsers = async (name) => { 
        const usersDB = await getUserDB() //todos los usuarios de la DB
        const usersApi = await getUserApi() //todos lo usuarios de la api
        const allUsers =[...usersDB,...usersApi]

        if(name){
            let filterUser = allUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
            if(filterUser.length) { 
                return filterUser
            }
            throw new Error('No se econtroun usuario con ese nombre')
        }else{
            return allUsers
        

        }
    }

    const deleteUser = async (id) => { 
        await User.destroy({where:{id}})
    }


module.exports = { 
    createUserDB,
   // getUserDB,
    getUserByIdDB,
    getUserApi,
    getAllUsers,
    deleteUser
}
