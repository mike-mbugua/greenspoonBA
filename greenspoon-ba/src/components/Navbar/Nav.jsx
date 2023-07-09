import React from 'react'
import './Nav.css'
import greenBanner from '../../assets/images/Greenspoon-Go-Homepage-Banner-1400x468.jpg'
import greenLogo from './../../assets/images/greenspoon-logo.svg'
import { Link } from 'react-router-dom'
function Nav() {
  return (
   <div className="navbar__main-container">
     <div className='navBar__container'>
        <div className="green-logo">
            <img src={greenLogo} alt="image" />
        </div>
    <div className="navLinks">
        <Link to={"/team"}>Team</Link>
        <Link to={"/events"}>Events</Link> 
        <Link to={"/schedule"}>Schedule</Link> 

    </div>

    </div>
    <div className="green-banner">
      <img src={greenBanner} alt="" width="100%" />
    </div>
   </div>
  )
}

export default Nav