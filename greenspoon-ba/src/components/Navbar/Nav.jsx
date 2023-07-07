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
        {/* <Link to={"#"}>Events</Link>
        <Link to={"#"}>Schedule</Link> */}

    </div>

    </div>
    <img src={greenBanner} alt="" width="100%" />
   </div>
  )
}

export default Nav