const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name:String,
  email:{
    type:String,
    unique:[ true, "with this account email already exists"]
  },
  password:String
})


const userModel = mongoose.model("users",userSchema)


module.exports = userModel