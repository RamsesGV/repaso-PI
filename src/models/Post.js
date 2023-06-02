const {DataTypes} = require('sequelize')


module.exports = (sequelize) => { 
sequelize.define('Post',{
    id:{ 
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement:true,
    },

    title: { 
        type:DataTypes.STRING,
        allowNul:false,
        
    },

    body:{
        type:DataTypes.STRING,
        allowNul:false,
        
    },

    

        
},{timestamps: false, freezeTableName:true})
}