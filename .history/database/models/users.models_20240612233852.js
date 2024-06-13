import { DataTypes } from "sequelize";
import sequelize from "../dbConnection.js";

const userModel = sequelize.define('user' , {
    name:{
        type:DataTypes.STRING(200)
    },
    email:{
        type:DataTypes.STRING(300),
        unique: true

    },
    password:{
        type:DataTypes.STRING(300)
    }
})

export default userModel