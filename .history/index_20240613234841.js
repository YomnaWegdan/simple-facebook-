import express from 'express'
import userRouter from './modules/users/user.routes.js'
import postsRouter from './modules/posts/posts.routes.js'
import sequelize from './database/dbConnection.js'
import commentsRouter from './modules/comments/comments.routes.js'
const app = express()
const port = 3000


sequelize.sync()

app.use(express.json())
app.use('/auth' , userRouter)
app.use('/comments' , commentsRouter)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))