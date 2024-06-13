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
    const commentId = req.params.commentId;
    const comment = await commentModel.findByPk(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Success', comment });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

const deleteComment = async (req, res) => {
    try {
      const commentId = req.params.commentId;
      await commentModel.destroy({ where: { id: commentId } });
      res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export {
    addComment,
    getAllComments,
    getCommentById,
    updateComment,
    deleteComment,
  };