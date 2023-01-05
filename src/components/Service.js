import React from 'react'
import './Service.css'
import { Carousel } from 'react-bootstrap';


function Service() {
  return (
    <>
      
      <section className='carol'>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/kuwait.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Qatar.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/germany.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </section>


      <div className='G-travel'>
        <h1>Greater Height Travel and Tour</h1>
        {/* <div><img src='images/logo.jpg' alt='G-H'  className='height' /></div> */}
         
         <div className='Good'>
        <p>
            Greater Height Travel and Tour is one of the leading travel agency in Ghana.
            Providing travel and business opportunities to our domestic and international 
            visitor.We aim to be the desired company in Ghana and in the sub-regions with 
            a reputation as financially sound and customer-oriented.We want to be trend 
            setters for the travelling industry regarding innovative products, customer
             and professional services.
        </p>
        </div>
      </div>

      <div className='visa'>
        <h4>VISA AQUISITIONS</h4>
        <div className='shinging'>
        {/* <div className='photos'><img src='images/us (2).jpg' alt='G-H'  className='height' /></div> */}
        <p>
          We help you acquire all kind of visas to make your travel journey a success.
          Aquiring a visa should not be a headache for you, that is why Greater Height
           Consult is your best choice.
          We make sure our clients are well served and their money yield result for them.
          Our company helps you acquire  SHINGING VISA etc.
          
        </p>
        </div>
      </div>

      <hr></hr>
      <div className='G-travel'>
        <h1>Why Us</h1>
        <div className='photo'><img src='images/us (2).jpg' alt='G-H'  className='height' /></div>
         
         <div className='Good'>
        <p>
           We know the terrain so we build our packages that must win a comeback
           experience to our customers.
        </p>
        </div>
      </div>
           
      <hr></hr>
      <div className='G-travel'>
        <h1>Pricing</h1>
        <div><img src='images/pricing.jpg' alt='G-H'  className='height' /></div>
         
         <div className='Good'>
        <p>
            Our pricing is based on the value exchange and creation. We create value 
            and exchange with client money based on their packages.
        </p>
        </div>
      </div>

      <hr></hr>
      <div className='G-travel'>
        <h1>Technology</h1>
        <div><img src='images/tech.png' alt='G-H'  className='height' /></div>
         
         <div className='Good'>
        <p>
           The world moves with those who are technologically inclined.
           At Greater Height Travel and Tours, technology drives our services.
        </p>
        </div>
      </div>
       
      <hr></hr>
      <div className='G-travel'>
        <h1>Security</h1>
        <div><img src='images/security.jpeg' alt='G-H'  className='height' /></div>
         
         <div className='Good'>
        <p>
            At Greater Height Travel and Tours, the first and formost thing we 
            look up to before giving any packages out to our clients is security.
            We make sure the company involved is well known and researched before
            advertising our parckages.
        </p>
        </div>
      </div>

      <hr></hr>
      <div className='G-travel'>
        <h1>Motto</h1>
         <div className='Good'>
        <p>
            Greater Height Travel and Tour we say: Travel, see and make money.!!! 
        </p>
        </div>
      </div>

      <hr></hr>
    </>
  )
}

export default Service
