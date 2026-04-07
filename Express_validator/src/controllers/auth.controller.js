export async function registerUser(req,res,next){

try{
  throw new Error("password must be strong")
}catch(error){
  error.status = 400
  next(error)
}
  
}