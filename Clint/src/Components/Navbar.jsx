import React from 'react';
import "../Style/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div>
        <Link to="/"><h2>ColudWalker</h2></Link>
        <Link to="/create"><p>Create</p></Link>
        <Link to="/getusers"><p>Show users</p></Link>
        <p>SignUp</p>
      </div>
    </div>
  );
}

export default Navbar;
