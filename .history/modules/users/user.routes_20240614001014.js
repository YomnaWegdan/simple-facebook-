import { Router } from "express";
import { logout, signIn, signUp } from "./user.controller.js";
const  userRouter = Router()

userRouter.post('/signUp' , signUp)
userRouter.post('/signIn' , signIn)
userRouter.post('/logout' , logout)


export default userRouter