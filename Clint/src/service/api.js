import axios from "axios";
const url="http://localhost:4500"
export const AddUser=async(data)=>{
    try{
    return await axios.post(`${url}/add`,data)
    }
    catch(err){
        console.log("error",err)
    }
}
export const  getuser=async()=>{
    try{
      return  await axios.get(`${url}/all`)
    }
    catch(err){
        console.log("Error While Calling",err)
    }
}
export const getuserr=async(id)=>{
 try{
  return await axios.get(`${url}/${id}`)
 }
 catch(err){
    console.log("error while calling geting api",err)
 }
}