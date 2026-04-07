import dotenv from "dotenv"
dotenv.config()
async function handleError(err,req,res,next){

  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
}

export default handleError