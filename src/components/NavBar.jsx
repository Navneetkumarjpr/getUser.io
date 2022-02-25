import React from 'react';
import './navbar.css';
const NavBar = ({getUsers}) => {
  return (
    <div className="navBar">
        <h1 className='navbarHeadline'>getU</h1>
        <button onClick={()=>getUsers()} className='getUserButton'>getUser</button>
    </div>
   )
}

export default NavBar