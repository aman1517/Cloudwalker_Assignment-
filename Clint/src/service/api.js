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