import React from 'react';


const Create = () => {

  const handleChange=(e)=>{
  console.log(e.target.value)
  }

  const HobbbiesHandleChange=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div>
      <p>Add Details</p>
      <form>
        <label>user</label>
        <input type="text" placeholder="Enter your username"/>
        <label>Name</label>
        <input type="text" placeholder="Enter your name here"/>
        <label>Father's Name</label>
        <input type="text" placeholder="Enter your father's name here"/>
        <label>Mother's Name</label>
        <input  type="text" placeholder="Enter your father's name here" /><br/>
        <label> Select your Products</label><br/>
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

        <label> Select your Products</label><br/>
        {/* <select>
            <option>select</option>
            <option>Mackbook</option>
            <option>Iwatch</option>
            <option>Ipone</option>
            <option>Headphone</option>
        </select> */}
        <label>A</label>
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="products"
                    value="MacBook"
                    id="flexCheckDefault"
                    onChange={HobbbiesHandleChange}
                    
                  /><br/>
        <label>B</label>
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="products"
                    value="iWatcht"
                    id="flexCheckDefault"
                    onChange={HobbbiesHandleChange}
                  /><br/>
        <label>C</label>         
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="products"
                    value="iPhone"
                    id="flexCheckDefault"
                    onChange={HobbbiesHandleChange}
                  /><br/>
        <label>D</label>
        <input
                    className="form-check-input"
                    type="checkbox"
                    name="products"
                    value="iPAD"
                    id="flexCheckDefault"
                    onChange={HobbbiesHandleChange}
                  /><br/>
          <label>E</label>
         <input
                    className="form-check-input"
                    type="checkbox"
                    name="product"
                    value="Headphones"
                    id="flexCheckDefault"
                    onChange={HobbbiesHandleChange}
                  /><br/>
        {/* dropdown for state,city and code */}
        <label>Select your state</label>
      <select>
         <option>Chose</option>
         <option>Maharashtra</option>
      </select><br/>
      <label>Select your city</label>
      <select>
         <option>Chose</option>
         <option>Mumbai</option>
         <option>Pune</option>
         <option>Nagpur</option>
         <option>Thane</option>
         <option>Nashik</option>
      </select><br/>
      <label>Select your Postal code</label>
      <select>
         <option>Chose</option>
         <option>400071</option>
         <option>400072</option>
         <option>400073</option>
         <option>400074</option>
         <option>400076</option>
      </select><br/>
    <input type="submit"  name='Submit'/>
      </form>
    </div>
  );
}

export default Create;
