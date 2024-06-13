import  DataTypes  from 'sequelize';

import sequelize from "../dbConnection.js";


const userModel = sequelize.define('user' , {
    name:{
        type:DataTypes.STRING(200),
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING(300),
        allowNull: false,
        unique: true
    },
    password:{
        type:DataTypes.STRING(300),
        allowNull: false,
    }
})

// userModel.hasMany(postModel, { foreignKey: 'author_id' });
// userModel.hasMany(commentModel, { foreignKey: 'userId' });

export default userModel


