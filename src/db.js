const { Sequelize } = require('sequelize')
const UserModel = require('./models/User')
const PostModel = require('./models/Post')

//requerimos .env
require('dotenv').config()
const {
    DB_USER ,
    DB_PASSWORD ,
    DB_HOST ,
    DB_PORT ,
    DB_NAME ,
    DB_DIALECT ,

} = process.env

const sequelize = new Sequelize(
`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
{
    logging:false
}
)

UserModel(sequelize);
PostModel(sequelize);
//Creamos las relaciones
const { User, Post} = sequelize.models
// 1 a  muchos un usuario tiene  muhcos posts
User.hasMany(Post);

//un post va a pertenecer a un usuario

Post.belongsTo(User)

module.exports = {
    conn:sequelize,
    ...sequelize.models
}