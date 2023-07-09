import React from 'react'
import './Team.css'
import mike from './../../assets/images/mike pic.jpg'
import delvin from './../../assets/images/Delvin Greenspoon 20230708_073717.jpg'
import kiki from './../../assets/images/Kiki Greenspoon 20230708_073657.jpg'
import mary from './../../assets/images/Mary Greenspoon 20230708_083258.jpg'
import daisy from './../../assets/images/daisy.jpg'
import charlton from './../../assets/images/charlton.jpg'
import paul from './../../assets/images/paul.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faMessage } from '@fortawesome/free-regular-svg-icons'
function Team({name,image,email,phone,}) {
  
  return (
    <div className='team-main'>
      <p>We are a Strong,Energetic team consisting of young people passionately Educating people about Greenspoon and how to make shopping easy through it. </p>
      <div className='team__container'>
        <div className="team__card team__lead">
          <img src={daisy} alt="" />
          <h2>Daisy</h2>
          <h4>Growth Manager</h4>
          
          
          
        </div>
        <div className="team__card team__lead">
          <img src={mary} alt="" />
          <h2>Mary</h2>
          <h4>Team lead</h4>
        </div>

        <div className="team__card">
          <img src={mike} alt="" />
          <h2>Michael Kamiri Mbugua</h2>
          <h4>Brand Ambassador</h4>
          <p><span className="span-style">Email</span>: kamirimichael369@gmail.com</p>
          <p><span className="span-style">Phone</span><a href='sms:0702405186'>:0702405186</a> </p>
          <div className="comunicate">
          <a href="tel:0702405186"><FontAwesomeIcon icon={faPhone} color='#008600'/></a>
          <a href="sms:0702405186"><FontAwesomeIcon icon={faMessage} color='#008600'/></a>
          <a href="mailto:kamirimichael369@gmail.com"><FontAwesomeIcon icon={faEnvelope} color='#008600'/></a>
          </div>
        </div>

        

        <div className="team__card">
          <img src={kiki} alt="" />
          <h2>Christine Njoki</h2>
          <h4>Brand Ambassador</h4>
          <p><span className="span-style">Email</span>: njokichristine@gmail.com</p>
          <p><span className="span-style">Phone</span>:0717403198</p>
          <div className="comunicate">
          <a href="tel:0717403198"><FontAwesomeIcon icon={faPhone} color='#008600'/></a>
          <a href="sms:0717403198"><FontAwesomeIcon icon={faMessage} color='#008600'/></a>
          <a href="mailto:njokichristine@gmail.com"><FontAwesomeIcon icon={faEnvelope} color='#008600'/></a>
          </div>
        </div>

        <div className="team__card">
          <img src={delvin} alt="" />
          <h2>Delvin Kimani</h2>
          <h4>Brand Ambassador</h4>
          <p><span className="span-style">Email</span>: delvinkimani@gmail.com</p>
          <p><span className="span-style">Phone</span>:0796231762</p>
          <div className="comunicate">
          <a href="tel:0796231762"><FontAwesomeIcon icon={faPhone} color='#008600'/></a>
          <a href="sms:0796231762"><FontAwesomeIcon icon={faMessage} color='#008600'/></a>
          <a href="mailto:delvinkimani@gmail.com"><FontAwesomeIcon icon={faEnvelope} color='#008600'/></a>
          </div>
        </div>

        <div className="team__card">
          <img className='charlton' src={paul} alt="" />
          <h2>Paul Muga</h2>
          <h4>Brand Ambassador</h4>
          <p><span className="span-style">Email</span>: mugapaul@gmail.com</p>
          <p><span className="span-style">Phone</span>:0719553812</p>
          <div className="comunicate">
          <a href="tel:0719553812"><FontAwesomeIcon icon={faPhone} color='#008600'/></a>
          <a href="sms:0719553812"><FontAwesomeIcon icon={faMessage} color='#008600'/></a>
          <a href="mailto:mugapaul@gmail.com"><FontAwesomeIcon icon={faEnvelope} color='#008600'/></a>
          </div>

        </div>

        <div className="team__card">
          <img className='charlton' src={charlton} alt="" />
          <h2>Charlton Mawira</h2>
          <h4>Brand Ambassador</h4>
          <p><span className="span-style">Email</span>: mawiracharlton@gmail.com</p>
          <p><span className="span-style">Phone</span>:0708241067</p>
          <div className="comunicate">
          <a href="tel:0708241067"><FontAwesomeIcon icon={faPhone} color='#008600'/></a>
          <a href="sms:0708241067"><FontAwesomeIcon icon={faMessage} color='#008600'/></a>
          <a href="mailto:mawiracharlton@gmail.com"><FontAwesomeIcon icon={faEnvelope} color='#008600'/></a>
          </div>
        </div>

    </div>
    <div className="rights">
    <h5>all rights reserved</h5>
    </div>

    </div>
  )
}

export default Team