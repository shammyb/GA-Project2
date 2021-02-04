import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className='navbar-menu'>
      <div className='navbar-start'>
        <div id='title' className='navbar-item'>
          <p className='is-size-1'>Anime4Days</p>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="navbar-item">
          <Link className="button is-primary is-hidden-touch" to={'/panel'}>Search</Link>
          <Link className="is-hidden-desktop" to={'/characters'}>Characters</Link>
        </div>
        <div className="navbar-item">
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