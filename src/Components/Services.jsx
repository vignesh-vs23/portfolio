import React from 'react';
import './Services.css';
import web from './Images/icons/webdesignblack.png'
import graphic from './Images/icons/graphicblack.png'
import ui from './Images/icons/ui-ux.png'
const Services = () => {
  return (
    <section id="services" className="services">
      <div className="service_container">
        <div className='service_text'>
          <h2>MY </h2>
          <span>SERVICES</span>
        </div>
        
        <div className="service_listcontainer">
          <div className="service">
            <img src={web} alt="" />
            <h3>Web Design</h3>
            <p>Creating modern and responsive web designs.</p>
          </div>
          <div className="service">
            <img src={graphic} alt="" />
            <h3>Graphic Design</h3>
            <p>Designing visually appealing graphics.</p>
          </div>
          <div className="service">
            <img src={ui} alt="" />
            <h3>UX/UI Design</h3>
            <p>Designing intuitive user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
