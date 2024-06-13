import { Router } from "express";
import { addComment, deleteComment, getAllComments, getCommentByPostId, updateComment } from "./comments.controller.js";

const commentsRouter = Router();

commentsRouter.post('/', addComment);
commentsRouter.get('/', getAllComments);
commentsRouter.get('/post/:postId', getCommentByPostId); 
commentsRouter.put('/:commentId', updateComment); 
commentsRouter.delete('/:comment_id', deleteComment); 

export default commentsRouter;