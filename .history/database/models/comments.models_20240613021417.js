import sequelize from "../dbConnection.js"; 
import userModel from "./users.models.js"; 
import postModel from "./posts.models.js";
import { DataTypes } from '';

const commentModel = sequelize.define('comment' , {
    content:{
        type:DataTypes.STRING(1000)
    },
    user_id:{
        type:DataTypes.INTEGER
    },
    post_id:{
        type:DataTypes.INTEGER
    }
})

userModel.hasMany(commentModel)
commentModel.belongsTo(userModel)

postModel.hasMany(commentModel)
commentModel.belongsTo(postModel)

export default commentModel;
