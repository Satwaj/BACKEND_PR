const express = require("express")

const authRouter = express.Router()

const userModel = require("../models/user.model")

const jwt = require("jsonwebtoken")



 

authRouter.post(`/register`,async (req,res)=>{


  const {name, email , password}= req.body


  const isUserAlreadyExists = await userModel.findOne({email})

  if(isUserAlreadyExists){
    return res.status(400).json({
      message:"user already exits with this email address"
    })
  }

   const user = await userModel.create({
    name,email,password
  })

  res.cookie("jwt_token", token, {
    httpOnly: true,
    secure: false
  })

   const token = jwt.sign(
    {id:user._id},
    process.env.JWT_SECRET
   )
   
  res.status(201).json({
    message:"user created successfully",
    user,
    token
})

})





module.exports = authRouter