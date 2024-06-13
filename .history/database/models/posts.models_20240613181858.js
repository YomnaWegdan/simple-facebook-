import  DataTypes  from 'sequelize';
import sequelize from "../dbConnection.js";
import userModel from "./users.models.js";

const postModel = sequelize.define('post' , {
    title:{
        type:DataTypes.STRING(300)
    },
    content:{
        type:DataTypes.STRING(600)
    },
    author_id:{
        type:DataTypes.INTEGER
    }
})

userModel.hasMany(postModel)
postModel.belongsTo(userModel)

export default postModel



authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: User,
        key: 'id'
    }
}