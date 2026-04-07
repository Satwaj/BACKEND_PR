import { registerUser } from "../controllers/auth.controller.js"

import { Router } from "express"

const authRouter = Router()


authRouter.post("/register", registerUser
    // Handle registration logic here
)

export default authRouter