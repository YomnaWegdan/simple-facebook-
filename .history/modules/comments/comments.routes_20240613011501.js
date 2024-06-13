import { Router } from "express";
import { addComment, deleteComment, getAllComments, getCommentById, updateComment } from "./comments.controller.js";
const commentsRouter = Router()


commentsRouter.post('/' , addComment)
commentsRouter.get('/' , getAllComments)
commentsRouter.get('/:id' , getCommentById)
commentsRouter.put('/:id' , updateComment)
commentsRouter.delete('/:id' , deleteComment)



export default commentsRouter;