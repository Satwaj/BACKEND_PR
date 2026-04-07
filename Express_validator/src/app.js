import dotenv from "dotenv"
import express from "express"
import authRouter from "./routes/auth.routes.js"
import handleError from "./middlewares/error.middlewares.js"
const app = express()
app.use(express.json())
app.use("/api/auth", authRouter)

dotenv.config()

app.use(handleError)  /// sabse last me use karo


export default app