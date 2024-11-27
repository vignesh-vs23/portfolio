import React from 'react';
import './About.css';
import  img from './Images/myimage2.jpeg'
import gmail from './Images/icons/gmail.png'
import portfolio from './Images/icons/portfolio.png'
import phone from './Images/icons/phone.png'
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about_heading">
        <h1 className="about_heading1">ABOUT</h1>
        <h1 className="about_heading2"> ME</h1>
      </div>
      
      <div className="about_container">
              <div className='about_imagecontainer'>
                {/* <div className='exp'></div> */}
                <img src={img} alt="" />
              </div>
              < div className="about_detailscontainer">
                    <h2>I'm Vignesh</h2>
                    <span>UI/UX Designer and Developer</span>
                    <p>
                        I am a highly motivated UI/UX Designer and Web Developer with 
                        experience in building web applications and designing user-friendly interfaces.
                    </p>
                    <p>
                        My passion for design and development drives me to create impactful solutions 
                        that improve user experience.
                    </p>
                    <div className="about_contactinfo">
                        <a href="mailto:k.vignesh2304@gmail.com"><img src={gmail} alt="" />k.vignesh2304@.com</a>
                        <a href="https://myportfolio.com"><img src={portfolio} alt="" />myportfolio.com</a>
                        <a href="tel:+919514869586"><img src={phone} alt="" />+919514869586</a>
                    </div>
                    <div className="about_buttons">
                        <a href="#" ><button className="btn">Download CV</button></a>
                        <a href="#" ><button className="btn">Hire Me</button></a>
                    </div>
              </div>
      </div>
    </section>
  );
}

export default About;
