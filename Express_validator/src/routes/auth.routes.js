import { registerUser } from "../controllers/auth.controller.js";
import { Router } from "express";
import { registerValidation } from "../Validator/auth.validatior.js";

const authRouter = Router()

/**
 * /api/auth/register
 */
authRouter.post("/register", registerValidation, registerUser)


export default authRouter