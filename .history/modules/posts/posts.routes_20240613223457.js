import { Router } from "express";
import { addPost, deletePost, getAllPosts, getPostById, updatePost, getUserPosts } from "./posts.controller.js";
const postsRouter = Router()

postsRouter.post('/' , addPost)
postsRouter.get('/' , getAllPosts)
postsRouter.get('/:id' , getPostById)
postsRouter.get('/user/:id' , getUserPosts)
postsRouter.put('/:id' , updatePost)
postsRouter.delete('/:id' , deletePost)

export default postsRouter;