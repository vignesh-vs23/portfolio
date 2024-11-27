import React from 'react';
import {Link } from 'react-router-dom'
import './Header.css';
import logo from './Images/icons/phoenix.png'
const Header = () => {
  return (
    <>
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>PHOENIX</h1>
      </div>
      <div className='nav_container'>
        <nav>
          <ul>
            {/* <li><Link to='/Home' className='link'>Home</Link></li>
            <li><Link to='/About' className='link'>About</Link></li>
            <li><Link to='/Services' className='link'>Services</Link></li>
            <li><Link to='/Portfolio' className='link'>Portfolio</Link></li>
            <li><Link to='/Contact' className='link'>Contact</Link></li>
            <li><Link to='/Blog' className='link'>Blog</Link></li> */}
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
      </div>    
    </header>
    
    </>
    
  );
}

export default Header;
