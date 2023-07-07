import React from 'react'
import './Team.css'
function Team({name,image,email,phone,}) {
  return (
    <div>
      <h2>We are a Strong team consisting all genders here is our Esteemed team</h2>
      <div className='team__container'>
        <div className="team__card">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h2>Michael Kamiri Mbugua</h2>
          <p><span className="span-style">Email</span>: kamirimichael369@gmail.com</p>
          <p><span className="span-style">Phone</span>:0702405186</p>
          <p><span className="span-style">Gender</span>:Male</p>
        </div>

        <div className="team__card">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h2>Michael Kamiri Mbugua</h2>
          <p><span className="span-style">Email</span>: kamirimichael369@gmail.com</p>
          <p><span className="span-style">Phone</span>:0702405186</p>
        </div>

        <div className="team__card">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h2>Michael Kamiri Mbugua</h2>
          <p><span className="span-style">Email</span>: kamirimichael369@gmail.com</p>
          <p><span className="span-style">Phone</span>:0702405186</p>
        </div>

        <div className="team__card">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h2>Michael Kamiri Mbugua</h2>
          <p><span className="span-style">Email</span>: kamirimichael369@gmail.com</p>
          <p><span className="span-style">Phone</span>:0702405186</p>
        </div>

        <div className="team__card">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h2>Michael Kamiri Mbugua</h2>
          <p><span className="span-style">Email</span>: kamirimichael369@gmail.com</p>
          <p><span className="span-style">Phone</span>:0702405186</p>
        </div>
    </div>
    </div>
  )
}

export default Team