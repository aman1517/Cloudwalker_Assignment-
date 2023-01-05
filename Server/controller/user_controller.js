
 const { response } = require("express");
const UserData =require("../Schema/user_schema.js")
 const AddUser=async(req,res)=>{
    console.log("helo")
    const user=req.body
    const newUser=new User(user);
    try{
  await newUser.save()
  console.log("Good")
  res.status(201).json(newUser)
    }
    catch(err){
    res.status(409).json({messege:err.messege})
    }
    
}
module.exports=AddUser