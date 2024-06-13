import express from 'express'
import cors 
import userRouter from './modules/users/user.routes.js'
import postsRouter from './modules/posts/posts.routes.js'
import sequelize from './database/dbConnection.js'
import commentsRouter from './modules/comments/comments.routes.js'
const app = express()
const port = process.env.PORT || 3000


sequelize.sync()

app.use(express.json())
app.use('/posts' , postsRouter)
app.use('/comments' , commentsRouter)

app.use('/auth' , userRouter)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))