import  DataTypes  from 'sequelize';
import sequelize from "../dbConnection.js";
import userModel from "./users.models.js";
import commentModel from './comments.models.js';

const postModel = sequelize.define('post' , {
    title:{
        type:DataTypes.STRING(300)
    },
    content:{
        type:DataTypes.STRING(600)
    },})
    
    postModel.belongsTo(userModel, { foreignKey: 'author_id' });




    
export default postModel

    // author_id:{
    //     type:DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: userModel,
    //         key: 'id'
    //     }

    // }
// userModel.hasMany(postModel, { foreignKey: 'author_id' });
// postModel.belongsTo(userModel, { foreignKey: 'author_id' });



