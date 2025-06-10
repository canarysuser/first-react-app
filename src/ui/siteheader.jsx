import React from 'react'
import { Link, NavLink } from 'react-router'

function SiteHeader() {
  return (
   <nav className="navbar navbar-expand-lg sticky-top bg-info ">
  <div className="container-fluid">
     <NavLink className='navbar-brand' to={'/'}>My Application</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li className="nav-item">
          <NavLink className='nav-link active' to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link'  to={'/products'}>Products</NavLink>
        </li>
        <li className="nav-item dropdown">
         <NavLink className='nav-link'  to={'/routed'}>Routed</NavLink>
       </li>
       <li className="nav-item dropdown">
         <NavLink className='nav-link'  to={'/lifecycle'}>Life Cycle</NavLink>
       </li>
       <li className="nav-item dropdown">
         <NavLink className='nav-link'  to={'/memos'}>Memoization</NavLink>
       </li>
      </ul>
      <div>
        <Link className='btn btn-outline-dark' to={'/login'}>Login</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default SiteHeader