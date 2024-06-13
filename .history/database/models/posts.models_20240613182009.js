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
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: userModel,
            key: 'id'
        }

    }
})
User.hasMany(Post, { foreignKey: 'authorId' });
Post.belongsTo(User, { foreignKey: 'authorId' });

// userModel.hasMany(postModel)
// postModel.belongsTo(userModel)

export default postModel



