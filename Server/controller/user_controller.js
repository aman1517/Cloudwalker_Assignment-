
const UserData =require("../Schema/user_schema.js")
 const AddUser=async(req,res)=>{
    const user=req.body
    const newUser=new UserData(user);
    try{
  await newUser.save()
  console.log("Good")
  res.status(201).json(newUser)
    }
    catch(err){
    res.status(409).json({messege:err.messege})
    }
    
}

const getusers=async(req,res)=>{
  try{
 const users= await UserData.find()
 res.status(200).json(users)
  }
  catch(err){
          res.status(404).json({messege:messege.err})
  }
}
const getuserr=async(req,res)=>{
  try{
    const user= await UserData.findById(req.params.id)
    res.status(200).json(user)
     }
     catch(err){
             res.status(404).json({messege:messege.err})
     }
}
const deleteUser=async(req,res)=>{
  try{
    await UserData.deleteOne(req.params.id)
  }
  catch(err){
     console.log("err while deleting")
  }
}

module.exports={AddUser,getusers,getuserr,deleteUser}