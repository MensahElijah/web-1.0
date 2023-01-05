import React from 'react'
import { Component } from 'react';
import './Navbar.css'




class nav extends Component {
   
  state = { clicked: false};
  handleClick = () =>{
     this.setState({clicked: !this.state.clicked})
  }

  render(){
  return (
    <>
    <nav className='top'>
    <a href='/' className='brand-title'><img src='images/G-H.jpg' alt='' className='image'/></a>
    <div>
      <ul id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}>
        <li><a href='/' className='active'>Home</a></li>
        <li><a href='/about'>About</a></li> 
        <li><a href='/services'>Services</a></li>
        <li><a href='/contact'>Contact</a></li>
        <li><a href='/register'>Register</a></li>
      </ul>
    </div>

    <div className='mobile' onClick={this.handleClick}>
      <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      
    </div>
    </nav>
    </>
    
  )
}
}

export default nav;
