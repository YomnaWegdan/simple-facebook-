import postModel from '../../database/models/posts.models.js'
import userModel from '../../database/models/users.models.js'


const addPost = async (req , res)=>{
    const result = await postModel.create(req.body)
    res.status(200).json({message:'success' , result})
}

const getAllPosts = async (req , res)=>{
    const result = await postModel.findAll()
    res.status(200).json({message:'success' , result})
}

const getPostById = async (req , res)=>{
    const result = await postModel.findByPk(req.params.id ,{
        attributes:{exclude:'id'}
    }
        
    )
    res.status(200).json({message:'success' , result})
    
}



const getUserPosts = async (req , res)=>{
const userWithPosts = await userModel.findByPk(req.params.id, {
  include: [{ model: postModel,attributes: ['id', 'title', 'content']}],
  attributes: ['id', 'name'],
});

if (!userWithPosts) {
  return res.status(404).json({ message: 'User not found' });
}
res.status(200).json({ message: 'Success', userWithPosts: userWithPosts.Posts });
}




const updatePost = async (req , res)=>{
    const result = await postModel.update(req.body ,{
        where:{id:req.params.id}
       
    })
    res.status(200).json({message:'success' , result})
}

const deletePost = async (req , res)=>{
    const result = await postModel.destroy({
        where:{id:req.params.id}
       
    })
    res.status(200).json({message:'success' , result})
}
    export{
        addPost,
        getAllPosts,
        getPostById,
        getUserPosts,
        updatePost,
        deletePost
    }