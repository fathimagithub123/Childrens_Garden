import React from 'react'
import logo1 from '../assets/logo1.png'
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src={logo1} alt="Logo" className="logo" />
    </div>
    <ul className="navbar-links">
      <li ><button className='home'>Home</button></li>
      <li className='links'><a href="#about" className="nav-link-about">About Us</a></li>
      <li className='links'><a href="#programs "  className="nav-link-programs">Programs</a></li>
      <li className='links'><a href="#gallery"  className="nav-link-gallery">Gallery</a></li>
      <li className='links'><a href="#careers"className="nav-link-careers">Careers</a></li>
      <li className='links'><a href="#contact" className="nav-link-contact">Contact Us</a></li>
    </ul>
    <div className="navbar-toggle">
      <span className="nav-link-english" >English</span>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  </nav>
  )
}

export default Navbar
