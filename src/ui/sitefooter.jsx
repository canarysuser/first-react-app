import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

function SiteFooter() {
    let [counter, setCounter] = React.useState(0);
    useEffect(() => {
        setCounter(counter + 1);
        
    },[]); 
    var handleClick = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
        console.log('Footer clicked', counter);
    }
  return (
    <nav className="navbar fixed-bottom  bg-secondary">
  <div className="container-fluid text-white">
    <NavLink className='nav-link' to={'/'}>Home</NavLink>
    <button className='btn btn-outline-light' onClick={handleClick}>
      Click Me ({counter})
      </button>
    &copy; 2025 My Application. All rights reserved.
  </div>
</nav>
  )
}

export default SiteFooter