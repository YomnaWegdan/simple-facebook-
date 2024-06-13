import { DataTypes } from 'sequelize';
import sequelize from '../dbConnection.js';
import postModel from './posts.models.js';
import userModel from './users.models.js';

const commentModel = sequelize.define('comment', {
  content: {
    type: DataTypes.STRING(1000),
    allowNull: false
  }
});

postModel.hasMany(commentModel , { foreignKey: 'postId' })
commentModel.belongsTo(postModel , { foreignKey: 'postId' })

userModel.hasMany(commentModel , { foreignKey: 'userId' })
commentModel.belongsTo(userModel , { foreignKey: 'userId' })



export default commentModel;


  //   userId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: userModel,
  //     key: 'id'
  //   }
  // },
  // postId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: postModel,
  //     key: 'id'
  //   }
  // }
//     user_id:{
//         type:DataTypes.INTEGER
//     },
//     post_id:{
//         type:DataTypes.INTEGER
//     }
// })

// userModel.hasMany(commentModel , { foreignKey: 'user_id' })
// commentModel.belongsTo(userModel , { foreignKey: 'user_id' })

// postModel.hasMany(commentModel , { foreignKey: 'post_id' })
// commentModel.belongsTo(postModel , { foreignKey: 'post_id' })


// commentModel.belongsTo(postModel);
// commentModel.belongsTo(userModel);

// export default commentModel;
