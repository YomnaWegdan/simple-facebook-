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
      model: userModel,
      key: 'id'
    }
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: postModel,
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

userModel.hasMany(commentModel , { foreignKey: 'user_id' })
commentModel.belongsTo(userModel , { foreignKey: 'user_id' })

postModel.hasMany(commentModel , { foreignKey: 'post_id' })
commentModel.belongsTo(postModel , { foreignKey: 'postId' })

export default commentModel;
