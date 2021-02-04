import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {


  return <nav className='navbar' role="navigation" aria-label="main navigation">
    <div className='navbar-brand'>
      <div id='title' className='navbar-item'>
        <p className='is-size-1 is-size-5-mobile'>Anime4Days</p>
      </div>
    </div>
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="navbar-item">
          <Link to={'/panel'}>New Search</Link>
        </div>
      </div>
    </div>
  </nav>


  // return <div>
  //   <ul>
  //     <li>
  //       <Link to={'/Panel'}>Search for stuff</Link>
  //     </li>
  //     <li>
  //       <Link to={'/'}>Home</Link>
  //     </li>
  //   </ul>
  // </div>
}