const {DataTypes} = require('sequelize')


module.exports = (sequelize) => { 
sequelize.define('User',{
    id:{ 
        type: DataTypes.UUID, // alfanumerico asdasfdasdas765asd7a6s5d7as6
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },

    name: { 
        type:DataTypes.STRING,
        allowNul:false,
        validate:{
            len:{
                args:[5-10],
                msg:'El nombre debe contener entre 5 y 10 caracteres'
            }
        }
    },

    email:{
        type:DataTypes.STRING,
        allowNul:false,
        unique:true,
        validate:{
            isEmail:{
                msg:'debe ser un email valido'
            }
        }
    },

    phone:{
        type:DataTypes.INTEGER,
        allowNul:false,
        unique:true,
    }

        
},{timestamps: false, freezeTableName:true})
}