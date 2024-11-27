import React from 'react';
import './Portfolio.css';
import web from './Images/icons/webdesign.png'
import app from './Images/icons/app.png'
import logo from './Images/icons/logo.png'
import ui from './Images/icons/ui.png'
import ux from './Images/icons/ux.png'
import webdev from './Images/icons/webdevelopment.png'
import graphic from './Images/icons/graphic.png'
import game from './Images/icons/game.png'
const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h3>MY</h3><span>PORTFOLIO</span>
        <div className="portfolio-items">
          <div className="portfolio-item">
            <img src={web} alt="" />
            <h2>Web Design</h2>
          </div>
          <div className="portfolio-item">
            <img src={app} alt="" />
            <h2>App Design</h2>
          </div>
          <div className="portfolio-item">
            <img src={logo} alt="" />
            <h2>Logo Design</h2>
          </div>
          <div className="portfolio-item">
            <img src={ui} alt="" />
            <h2>UI Design</h2>
          </div>
          <div className="portfolio-item">
            <img src={ux} alt="" />
            <h2>UX Design</h2>
          </div>
          <div className="portfolio-item">
            <img src={webdev} alt="" />
            <h2>Web Development</h2>
          </div>
          <div className="portfolio-item">
            <img src={graphic} alt="" />
            <h2>Graphic Design</h2>
          </div>
          <div className="portfolio-item">
            <img src={game} alt="" />
            <h2>Game Design</h2>
          </div>
        </div>
        <div className='portfolio-text'>
            <div>
                <h2>200</h2><p>+</p>
                <span>TOTAL PROJECTS</span>
            </div>
            <div>
                <h2>150</h2><p>+</p>
                <span>HAPPY CLIENTS</span>
            </div>
            <div>
                <h2>250</h2><p>+</p>
                <span>TOTAL REVIEWS</span>
            </div>
            <div>
                <h2>850</h2><p>+</p>
                <span>WORKING HOURS</span>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
