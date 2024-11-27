import React from 'react'
import './Home.css'
import  img from './Images/myimage1.jpeg'
import fb from './Images/icons/fb.png'
import twitter from './Images/icons/twitter.png'
import telegram from './Images/icons/telegram.png'
import portfolio from './Images/icons/portfolio.png'
const Home = () => {
    return (
        <>
        <div className='home_container'>
            <div className="container1">
                <span>Hello There!</span><br /><br />
                <span className='span1'>I'm</span>
                <span className='span2'>VIGNESH </span>
                <p>I'm a Professional Web designer and Developer with a UX/UI design background.</p>
                <button className="btn">Hire Me</button>
                <img src={fb} alt="" />
                <img src={twitter} alt="" />
                <img src={telegram} alt="" />
                <img src={portfolio} alt="" />
            </div>
            <div className='container2'>
                <img src={img} alt="" />
            </div>

        </div>
        </>
        
    );
  }
  

export default Home