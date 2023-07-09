import React from 'react'
import './Team.css'
import mike from './../../assets/images/mike pic.jpg'
import delvin from './../../assets/images/Delvin Greenspoon 20230708_073717.jpg'
import kiki from './../../assets/images/Kiki Greenspoon 20230708_073657.jpg'
import mary from './../../assets/images/Mary Greenspoon 20230708_083258.jpg'
import daisy from './../../assets/images/daisy.jpg'
import charlton from './../../assets/images/charlton.jpg'
import paul from './../../assets/images/paul.jpg'
function Team({name,image,email,phone,}) {
  return (
    <div>
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
          <p><span className="span-style">Phone</span>:0702405186</p>
        </div>

        

        <div className="team__card">
          <img src={kiki} alt="" />
          <h2>Christine Njoki</h2>
          <h4>Brand Ambassador</h4>
          <p><span className="span-style">Email</span>: njokichristine@gmail.com</p>
          <p><span className="span-style">Phone</span>:0717403198</p>
        </div>

        <div className="team__card">
          <img src={delvin} alt="" />
          <h2>Delvin Kimani</h2>
          <h4>Brand Ambassador</h4>
          <p><span className="span-style">Email</span>: delvinkimani@gmail.com</p>
          <p><span className="span-style">Phone</span>:0796231762</p>
        </div>

        <div className="team__card">
          <img src={paul} alt="" />
          <h2>Paul Muga</h2>
          <h4>Brand Ambassador</h4>
          <p><span className="span-style">Email</span>: mugapaul@gmail.com</p>
          <p><span className="span-style">Phone</span>:0719553812</p>

        </div>

        <div className="team__card">
          <img src={charlton} alt="" />
          <h2>Charlton Mawira</h2>
          <h4>Brand Ambassador</h4>
          <p><span className="span-style">Email</span>: mawiracharlton@gmail.com</p>
          <p><span className="span-style">Phone</span>:0708241067</p>
        </div>

        {/*
        

       



        <div className="team__card">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h2>Michael Kamiri Mbugua</h2>
          <p><span className="span-style">Email</span>: kamirimichael369@gmail.com</p>
          <p><span className="span-style">Phone</span>:0702405186</p>
        </div> */}
    </div>
    </div>
  )
}

export default Team