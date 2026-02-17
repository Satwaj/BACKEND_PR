const express = require("express")
const authRouter = express.Router()
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")







authRouter.post("/register",async (req,res)=>{

  const {name,email, password}=req.body


  const isUseralredayExists = await userModel.findOne({email})


  if(isUseralredayExists){
    return res.status(400).json({
      message:"User with this email already exists"
    })
  }



const user= await userModel.create({
    name,email,password
  })

  const token = jwt.sign(
    
    {
    id:user._id,
    email:user.email,
  },
process.env.jwt_secret

 )


 res.cookie("jwt_token",token)



  res.status(201).json({
    message:"User registered successfully",
    user,
    token
  })




}

)



module.exports = authRouter
