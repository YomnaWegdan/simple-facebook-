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
        type:DataTypes.STRING(300)
    }
})

export default userModel



sequelize.define('User', {
    username: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(300),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(300),
        allowNull: false
    }
});