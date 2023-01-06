import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Style/AllUser.css"
import {getuser} from "../service/api"
import { useEffect,useState } from 'react';
const AllUser = () => {
 
  const [users,setUsers]=useState([])
  useEffect(()=>{
  getAllusers()
  },[])
 const getAllusers=async()=>{
    let respone=  await getuser()
    setUsers(respone.data)
    console.log(users)
 }
 const navigate=useNavigate()

  return (
    <div className='TableforUser'>
      <table className="tablehead">
  <tr>
    <th>UserName</th>
    <th>Name</th>
    <th>Father's Name</th>
    <th>Mother's Name</th>
    <th>Products</th>
    <th>Hobbies</th>
    <th>State</th>
    <th>City</th>
    <th>Postal Code</th>
    <th>Edit</th>
    <th>Delete</th>
    
  </tr>
  
  
   {
    
    users.map(user=>{
      return(
       <tbody>
       
    <td>{user.username}</td>
    <td>{user.name}</td>
    <td>{user.father_name}</td>
    <td>{user.mother_name}</td>
    <td>{user.poroducts}</td>
    <td>{user.hobbies}</td>
    <td>{user.state}</td>
    <td>{user.city}</td>
    <td>{user.postal_code}</td>
    <button onClick={()=>{
      navigate(`/update/${user._id}`)
    }}>Update</button>
    <button>Delete</button>
       </tbody>
      )
    })
   }
    
 
  
</table>
    </div>
  );
}

export default AllUser;
