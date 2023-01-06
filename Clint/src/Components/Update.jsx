import React,{useState,useEffect} from "react"
import { getuser } from "../service/api"
import { useParams } from "react-router-dom"
import "../Style/Create.css"
import { AddUser,getuserr } from "../service/api"

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
const Update = () => {
    const {id}=useParams()
    const [user,setUser]=useState(defaultValue)
    useEffect(()=>{
        loaduserDetails()
    },[])
    const loaduserDetails=async()=>{
        const responce=await getuserr(id)
        setUser(responce.data)
     }
    
    const handleChange=(e)=>{
     console.log(e)
    
    
      
    }
    const inputHandleChane=(e)=>{
     
    setUser({...user,[e.target.name] :e.target.value})
    console.log(user)
    }
  
    const HobbbiesHandleChange=(e)=>{
      let x=(e.target.value)
      user.hobbies.push(x)
      setUser({...user})
    console.log(user)
    }
    const CittyHandle=(e)=>{
      setUser({...user,[e.target.name] :e.target.value})
      console.log(user)
      console.log(e.target.value)
    }
   
    const submitHandler=async(e)=>{
      e.preventDefault()
     await AddUser(user)
    }
    return (
      <div>
        <p>Update Details</p>
        <form onSubmit={submitHandler}>
          <label>user</label>
          <input type="text" placeholder="Enter your username" onChange={inputHandleChane} name="username" value={user.username}/>
          <label>Name</label>
          <input type="text" placeholder="Enter your name here" onChange={inputHandleChane} name="name"  value={user.name}/>
          <label>Father's Name</label>
          <input type="text" placeholder="Enter your father's name here" onChange={inputHandleChane} name="father_name"  value={user.father_name} />
          <label>Mother's Name</label>
          <input  type="text" placeholder="Enter your father's name here"  onChange={inputHandleChane} name="mother_name" value={user.mother_name}  /><br/>
          <label>DOB</label>
          <input  type="date" placeholder="Enter your DOB" onChange={inputHandleChane} name="DOB"/><br/>
          <label> Select your Products</label><br/>
          <label>MacBook</label>
          <input
                      className="form-check-input"
                      type="checkbox"
                      name="products"
                      value={user.hobbies}
                      id="flexCheckDefault"
                   
                      onChange={handleChange}
                    /><br/>
          <label>iWatcht</label>
          <input
                      className="form-check-input"
                      type="checkbox"
                      name="products"
                      value={user.hobbies}
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
                      value={user.hobbies}
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
  
          <label> Select your Hobbies</label><br/>
         
          <label>A</label>
          <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value={user.hobbies}
                      id="flexCheckDefault"
                      onChange={HobbbiesHandleChange}
                      
                    /><br/>
          <label>B</label>
          <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value={user.hobbies}
                      id="flexCheckDefault"
                      onChange={HobbbiesHandleChange}
                    /><br/>
          <label>C</label>         
          <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value={user.hobbies}
                      id="flexCheckDefault"
                      onChange={HobbbiesHandleChange}
                    /><br/>
          <label>D</label>
          <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value="iPAD"
                      id="flexCheckDefault"
                      onChange={HobbbiesHandleChange}
                    /><br/>
            <label>E</label>
           <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value="Headphones"
                      id="flexCheckDefault"
                      onChange={HobbbiesHandleChange}
                    /><br/>
          {/* dropdown for state,city and code */}
          <label>Select your state</label>
        <select onChange={CittyHandle} name="state">
           <option value="">Chose</option>
           <option value="Maharashtra" >Maharashtra</option>
        </select><br/>
        <label>Select your city</label>
        <select onChange={CittyHandle} value="" name="city">
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
      <input type="submit"  name='Submit'/>
        </form>
      </div>
    );
  }
  
  export default Update;