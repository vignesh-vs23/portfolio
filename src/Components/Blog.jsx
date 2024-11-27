import React from 'react';
import './Blog.css';
import web from './Images/webdesign.jpg'
import app from './Images/appdesign.png'
import graphic from './Images/graphicdesign.jpg'
import html from './Images/icons/html5.png'
import css from './Images/icons/css3.png'
import js from './Images/icons/js.png'
import react from './Images/icons/react.png'
import python from './Images/icons/python.png'
import java from './Images/icons/java.png'
const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <h1>BLOG</h1><span>US</span>
        <div className="blog-items">
          <div className="blog-item">
            <img src={web} alt="Web Design" />
            <h3>Web Design Development</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content.
            </p>
            <a href="#read-more" ><button className="btn">Read More</button></a>
          </div>
          <div className="blog-item">
            <img src={app} alt="App Development" />
            <h3>App Development</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content.
            </p>
            <a href="#read-more" ><button className="btn">Read More</button></a>
          </div>
          <div className="blog-item">
            <img src={graphic} alt="Graphic Design" />
            <h3>Graphic Design</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content.
            </p>
            <a href="#read-more" ><button className="btn">Read More</button></a>
          </div>
        </div>
        <div className='blog-icons'>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src={python} alt="" />
            <img src={java} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Blog;
