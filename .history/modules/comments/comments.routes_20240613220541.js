import { Router } from "express";
import { addComment, deleteComment, getAllComments, getCommentByPostId, updateComment } from "./comments.controller.js";

const commentsRouter = Router();

commentsRouter.post('/', addComment);
commentsRouter.get('/', getAllComments);
commentsRouter.get('/:comment_id', getCommentByPostId); // Change :id to :comment_id
commentsRouter.put('/:comment_id', updateComment); // Change :id to :comment_id
commentsRouter.delete('/:comment_id', deleteComment); // Change :id to :comment_id

export default commentsRouter;