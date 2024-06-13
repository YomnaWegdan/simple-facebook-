import { DataTypes } from 'sequelize';
import sequelize from '../dbConnection.js';
import userModel from './users.models.js';
import postModel from './posts.models.js';

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

