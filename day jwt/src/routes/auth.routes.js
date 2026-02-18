const express = require("express")
const authRouter = express.Router()
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

authRouter.post("/register",async (req,res)=>{

  const {name,email, password}=req.body


  const isUseralredayExists = await userModel.findOne({email})


  if(isUseralredayExists){
    return res.status(400).json({
      message:"User with this email already exists"
    })
  }
const hash = crypto.createHash("md5").update(password).digest("hex")


const user= await userModel.create({
    name,email,password:hash
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


authRouter.post("/protected",(req,res)=>{

  console.log(req.cookies)

  res.status(200).json({
    message:"This is a protected route"
  })

})




//   controller // callback /// function
// ()=>{}



  //   /api/auth/login

authRouter.post("/login", async (req,res)=>{

  const {email,password}= req.body

  const user = await userModel.findOne({email})


  if(!user){
    return res.status(400).json({
      message:"User not found"
    })
  }

  const isPasswordMatch = user.password === crypto.createHash("md5").update(password).digest("hex")

  if(!isPasswordMatch){
    return res.status(401).json({
      message:"Invalid password"
    }
    )
  }

  const token = jwt.sign({
    id:user._id,
    email:user.email
  }, process.env.jwt_secret)


  res.cookie("jwt_token",token)

  res.status(200).json({
    message:"Login successful",
    user,
    
  })


})

module.exports = authRouter
