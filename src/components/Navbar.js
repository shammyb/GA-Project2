import React from 'react'
import { Link } from 'react-router-dom'




export default function Navbar() {

  

  return <nav className='navbar' role="navigation" aria-label="main navigation">
    <div className='navbar-menu is-active'>
      <div id='title' className='navbar-item'>
        <Link className='is-size-1 is-size-5-mobile' to={'/GA-Project2/'}>Anime4Days</Link>
      </div>
    </div>
    {/* <div className="navbar-menu is-active"> */}
    {/* <div className="navbar-end">
        <div className="navbar-item is-active">
          <Link to={'/GA-Project2/'}>Home</Link>
        </div> */}
    {/* <div className="navbar-item">
          <a onClick={() => searchButton}>Search</a>
        </div> */}
    {/* </div> */}
    {/* </div> */}
  </nav>



 
}