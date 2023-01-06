import React,{useState} from 'react';
import { AddUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
import "../Style/Create.css"


const defaultValue={
 
  username:"",
  name:"",
  father_name:"",
  mother_name:"",
  // DOB:"",
  products:[],
  hobbies:[],
  state:"",
  city:"",
  postal_code:""
}
const Create = () => {
  const [user,setUser]=useState(defaultValue)
  const navigate=useNavigate()
 

  const handleChange=(e)=>{
   console.log(e)
  
    let x=(e.target.value)
    user.products.push(x)
    setUser({...user})
 
 
    
  }
  const inputHandleChane=(e)=>{
   
  setUser({...user,[e.target.name] :e.target.value})
 
  }

  const HobbbiesHandleChange=(e)=>{
    let x=(e.target.value)
    user.hobbies.push(x)
    setUser({...user})

  }
  const CittyHandle=(e)=>{
    setUser({...user,[e.target.name] :e.target.value})
    console.log(user)
    console.log(e.target.value)
  }
 
  const submitHandler=async(e)=>{
    e.preventDefault()
   await AddUser(user)
   navigate("/getusers")
  }
  return (
    <div className='create_user'>
      <h2>Add Details</h2>
      <form onSubmit={submitHandler}>

       <div className='namedetails'>
       <label>User Name:</label>
        <input type="text" placeholder="Enter your name here" onChange={inputHandleChane} name="username"/><br/>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name here" onChange={inputHandleChane} name="name"/><br/>
        <label>Father's Name:</label>
        <input type="text" placeholder="Enter your father's name here" onChange={inputHandleChane} name="father_name" /><br/>
        <label>Mother's Name:</label>
        <input  type="text" placeholder="Enter your father's name here"  onChange={inputHandleChane} name="mother_name"  /><br/>
        <label>DOB:</label>
        <input  type="date" placeholder="Enter your DOB" onChange={inputHandleChane} name="DOB"/><br/>
       
        <h2> Select your Products</h2><br/>
        <label>MacBook</label>
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="products"
                    value="MacBook"
                    id="flexCheckDefault"
                 
                    onChange={handleChange}
                  /><br/>
        <label>iWatcht</label>
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="products"
                    value="iWatcht"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  /><br/>
        <label>iPhone</label>         
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="products"
                    value="iPhone"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  /><br/>
        <label>iPAD</label>
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="products"
                    value="iPAD"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  /><br/>
          <label>Headphone</label>
         <input
                    className="form-check-input"
                    type="checkbox"
                    name="product"
                    value="Headphones"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  /><br/>
        {/* hobboies sections */}

        <h2> Select your Hobbies</h2><br/>
       
        <label>Cricket</label>
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="hobbies"
                    value="Cricket"
                    id="flexCheckDefault"
                    onChange={HobbbiesHandleChange}
                    
                  /><br/>
        <label>Music</label>
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="hobbies"
                    value="Music"
                    id="flexCheckDefault"
                    onChange={HobbbiesHandleChange}
                  /><br/>
        <label>Video Game</label>         
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="hobbies"
                    value="Video Game"
                    id="flexCheckDefault"
                    onChange={HobbbiesHandleChange}
                  /><br/>
        <label>Dance</label>
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="hobbies"
                    value="Dance"
                    id="flexCheckDefault"
                    onChange={HobbbiesHandleChange}
                  /><br/>
          <label>Singing</label>
         <input
                    className="form-check-input"
                    type="checkbox"
                    name="hobbies"
                    value="Singing"
                    id="flexCheckDefault"
                    onChange={HobbbiesHandleChange}
                  /><br/>
        {/* dropdown for state,city and code */}
        <h2l>Select your state</h2l>
      <select onChange={CittyHandle} name="state">
         <option value="">Chose</option>
         <option value="Maharashtra" >Maharashtra</option>
      </select><br/>
      <label>Select your city</label>
      <select onChange={CittyHandle} value={user.city} name="city">
         <option value="" >Chose</option>
         <option value="Mumbai">Mumbai</option>
         <option value="Pune">Pune</option>
         <option value="Nagpur">Nagpur</option>
         <option value="Thane">Thane</option>
         <option value="Nashik">Nashik</option>
      </select><br/>
      <label>Select your Postal code</label>
      <select onChange={CittyHandle} name="postal_code">
         <option value="">Chose</option>
         <option value="400071">400071</option>
         <option value="400072">400072</option>
         <option value="400073">400073</option>
         <option value="400074">400074</option>
         <option value="400075">400075</option>
         <option value="400076">400076</option>
      </select><br/>
    <input type="submit"  name='Submit' className='btn'/>
    </div>
      </form>
    </div>
  );
}

export default Create;
