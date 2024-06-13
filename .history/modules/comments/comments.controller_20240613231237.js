import commentModel from '../../database/models/comments.models.js'

const addComment = async (req, res) => {
  try {
    const { content, postId, userId } = req.body;
    const comment = await commentModel.create({ content, postId, userId });
    res.status(201).json({ message: 'Comment added successfully', comment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await commentModel.findAll();
    res.status(200).json({ message: 'Success', comments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getCommentByPostId = async (req, res) => {
  try {
    const postId = req.params.postId; 
    const comments = await commentModel.findAll({ where: { postId } });
    res.status(200).json({ message: 'success', comments });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments', error: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const updatedComment = await commentModel.update(req.body, {
      where: { id: commentId },
    });
    res.status(200).json({ message: 'Comment updated successfully', updatedComment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const deleteComment = async (req, res) => {
//     try {
//       const commentId = req.params.comment_id;
//       await commentModel.destroy({ where: { id: commentId } });
//       res.status(200).json({ message: 'Comment deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };

const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    if (!commentId) {
      return res.status(400).json({ message: 'Comment ID is required' });
    }

    const deleted = await commentModel.destroy({ where: { id: commentId } });
    if (deleted) {
      return res.status(200).json({ message: 'Comment deleted successfully' });
    }
    throw new Error('Comment not found');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
  export {
    addComment,
    getAllComments,
    getCommentByPostId,
    updateComment,
    deleteComment,
  };