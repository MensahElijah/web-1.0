import { Button } from 'bootstrap'
import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <>
    <div className='contact'>
       <p>Contact Us</p>
    </div>
       
    <div className='Tact'>
        <div className='Dots'>
          {/* <img src='images/logo.png' alt='1' className='Emage' /> */}
          <p className='Head'>BY PHONE</p>
          <p>(Monday to Friday, 9am to 4pm)</p>
          <p>(+233 (0)246090881)</p>
          <p>(+233 (0)277820997)</p>
          <p>(greaterheight@gmail.com)</p>
          <br></br>
          <br></br>
        </div>

        <div className='Dots'>
          {/* <img src='images/logo.png' alt='1' className='Emage' /> */}
          <p className='Head'>NEW CASE</p>
          <p>Just send us your questions</p>
          <p>or concerns by stating a</p>
          <p>new case and we will give</p>
          <p>you the help you need.</p>
          <button className='button'><a href='#'>START</a></button>
        </div>

        <div className='Dots'>
          {/* <img src='images/logo.png' alt='1' className='Emage' /> */}
          <p className='Head'>LIVE CHART</p>
          <p>Chart with a member of our just by a click...  <br></br> in-house team</p>
          <br></br>
          <button className='button'><a href='#'>START</a></button>
          <br></br>
          <br></br>
          <br></br>
        </div>

    </div>
    </>
  )
}

export default ContactUs
