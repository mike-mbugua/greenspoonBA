import React from 'react'
import './Nav.css'
import greenBanner from '../../assets/images/Greenspoon-Go-Homepage-Banner-1400x468.jpg'
import greenLogo from './../../assets/images/greenspoon-logo.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHouse, faTruck } from '@fortawesome/free-solid-svg-icons'
import { faBuilding, faCalendar } from '@fortawesome/free-regular-svg-icons'
function Nav() {
  return (
   <div className="navbar__main-container">
     <div className='navBar__container'>
        <div className="green-logo">
            <img src={greenLogo} alt="image" />
        </div>
    <div className="navLinks">
        <Link to={"/team"}>Team</Link>
        <div className="dropdown">
          <div className="content">
            <div className="icons">
            <p>Events</p>
            <FontAwesomeIcon icon={faChevronDown} color='white'/>
            </div>
          </div>
          <button type='button'></button>
          <div className="menu">
            <div className="icons">
              <FontAwesomeIcon icon={faTruck} size='' color='white'/>
              <a href="/drive-runs">Drive Run</a>
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faHouse} color='white'/>
              <a href="/serviced-apartments">Serviced Aparts</a>
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faCalendar} color='white'/>
              <a href="/upcoming-events">Upcoming Events</a>
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faTruck} color='white'/>
              <a href="/visited-apartments">Visited Aparts</a>
            </div>
          </div>
        </div>
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