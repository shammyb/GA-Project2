import React from 'react'
import { Link } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid'



// const linkTarget = {
//   pathname: '/panel',
//   key: uuidv4(), 
//   state: {
//     applied: true
//   }
// }

export default function Navbar() {


  return <nav className='navbar' role="navigation" aria-label="main navigation">
    <div className='navbar-brand'>
      <div id='title' className='navbar-item'>
        <p className='is-size-1 is-size-5-mobile'>Anime4Days</p>
      </div>
    </div>
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <div className="navbar-item is-active">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="navbar-item">
          <Link to={'/panel'}>Search</Link>
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