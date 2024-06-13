import { Router } from "express";
import { addComment, deleteComment, getAllComments, getCommentByPostId, updateComment } from "./comments.controller.js";

const commentsRouter = Router();

commentsRouter.post('/', addComment);
commentsRouter.get('/', getAllComments);
commentsRouter.get('/post/:post_id', getCommentByPostId); 
commentsRouter.put('/:comment_id', updateComment); 
commentsRouter.delete('/:comment_id', deleteComment); 

export default commentsRouter;