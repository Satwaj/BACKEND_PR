
require("dotenv").config()


const app = require("./src/app")



const mongoose =require("mongoose")

const connectToDb = require("./src/config/database")




app.listen(3000,()=>{
  console.log("server start")
})



connectToDb()




