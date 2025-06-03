import React from 'react';
import './Banner.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <h1 className="name">PREETHI MAHALINGAM</h1>
        <p className="title">Associate Software Developer</p>
        <p className="contact">
          📍 puducherry &nbsp; | &nbsp;
          📧 preethicap.a.m@gmail.com;
          <div className="social-icons">
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        </p>
        <div className="skills">
          <h3>Skills</h3><p><ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT JS</li>
            <li>CORE JAVA</li>
            <li>SQL</li>
            <li>Git</li>
            <li>NODE JS</li>
          </ul></p>   
        </div>
      </div>
      <div className="banner-right">
        <img
          src="/profile-pic.jpg"
          alt="Profile"
          className="profile-pic"
        />
      </div>
    </div>
  );
};

export default Banner;
