import React from 'react'
import { Carousel } from 'react-bootstrap';
import "./Hero.css";


const Hero = () => {
  return (
    <>

    <div className='hero'>
       {/* <img src="images/Travel.webp" className="card-img" alt="..." /> */}

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



      <div className='First'>

         <div className='text'>
          <p>Do you want to travel to that country?</p>
          </div>
          <div className='text-img'>
          <img src="images/Good.jpg" class="imgs" alt="1" />
          </div>

          <div className='text'>
          <p>Do you want to work in that company?</p>
          </div>
          <div className='text-img'>
          <img src="images/Good1.jpg" class="imgs" alt="1" />
          </div>

          <div className='text'>
          <p>Do you want to live that dream life?</p>
          </div>
          <div className='text-img'>
          <img src="images/Good2.png" class="imgs" alt="1" />
          </div>  
          </div>
          <div className='chance'>
          <img src="images/Good3.jpg" class="chance-img" alt="1" />
    </div>

{/* Start of travelimages */}
<div className='Second'>
   <div className='country'>
   <img src="images/Qatar.jpg" className="img-top" alt="Qatar" />
   <div class="card-body">
    <h5 className="card-text">Qatar</h5>
    <a href="#" className="card-texts1">Travel to Qatar</a>
    </div>
    </div>

 <div className='country'>
 <img src="images/Doha.jpg" className="img-top" alt="Doha" />
  <div class="card-body">
    <h5 className="card-text">Doha</h5>
    <a href="#" class="card-texts1">Travel to Doha</a>
  </div>
 </div>

 <div className='country'>
 <img src="images/Dubai.jpg" className="img-top" alt="Dubai" />
  <div class="card-body">
    <h5 className="card-text">Dubai</h5>
    <a href="#" className="card-texts1">Travel to Dubai</a>
  </div>
 </div>  

 <div className='country'>
 <img src="images/kuwait.jpg" className="img-top" alt="Dubai" />
  <div class="card-body">
    <h5 className="card-text">Kuwait</h5>
    <a href="#" className="card-texts1">Travel to Kuwait</a>
  </div>
 </div>  

 <div className='country'>
   <img src="images/suadi.jpg" className="img-top" alt="Dubai" />
   <div class="card-body">
    <h5 className="card-text">Saudi Arabia</h5>
    <a href="#" className="card-texts1">Travel to Saudi</a>
  </div>
 </div>  
</div>


<div className='Second'>
   <div className='country'>
   <img src="images/australia.jpg" className="img-top" alt="australia" />
   <div class="card-body">
    <h5 className="card-text">Australia</h5>
    <a href="#" className="card-texts1">Travel to Australia</a>
  </div>
 </div>

 <div className='country'>
 <img src="images/canada.jpg" className="img-top" alt="canada" />
  <div class="card-body">
    <h5 className="card-text">Canada</h5>
    <a href="#" class="card-texts1">Travel to Canada</a>
  </div>
 </div>

 <div className='country'>
 <img src="images/germany.jpg" className="img-top" alt="germany" />
  <div class="card-body">
    <h5 className="card-text">Germany</h5>
    <a href="#" className="card-texts1">Travel to Germany</a>
  </div>
 </div>  

 <div className='country'>
 <img src="images/usa.jpg" className="img-top" alt="usa" />
  <div class="card-body">
    <h5 className="card-text">USA</h5>
    <a href="#" className="card-texts1">Travel to USA</a>
  </div>
 </div>  

 <div className='country'>
   <img src="images/sey.jpg" className="img-top" alt="seychelles" />
   <div class="card-body">
    <h5 className="card-text">Seychelles</h5>
    <a href="#" className="card-texts1">Travel to Seychelles</a>
  </div>
 </div>  
</div>
    </div>
 
  </>
  )
}

export default Hero;
