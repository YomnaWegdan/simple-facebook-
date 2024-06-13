import sequelize from "../dbConnection.js"; 
import userModel from "./users.models.js"; 
import postModel from "./posts.models.js";
import  DataTypes  from 'sequelize';

const commentModel = sequelize.define('comment' , {
    content:{
        type:DataTypes.STRING(1000),
        allowNull: false
    },
    userId: {
    type: DataTypes.INTEGER,
    references: {
      model: UserModel,
      key: 'id'
    }
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: PostModel,
      key: 'id'
    }
  }
});
//     user_id:{
//         type:DataTypes.INTEGER
//     },
//     post_id:{
//         type:DataTypes.INTEGER
//     }
// })

userModel.hasMany(commentModel)
commentModel.belongsTo(userModel)

postModel.hasMany(commentModel)
commentModel.belongsTo(postModel)

export default commentModel;
