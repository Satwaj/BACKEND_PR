const mongoose =require("mongoose")


function connectToDb(){

mongoose.connect(process.env.MONGO_URI)

.then (()=>{
  console.log("datatbase is connected")
})
}


module.exports = connectToDb

