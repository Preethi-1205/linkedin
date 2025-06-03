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
          📍 Puducherry &nbsp; | &nbsp;
          📧 preethicap.a.m@gmail.com
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/Preethi-1205"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="social-link"
          >
            <i className="fab fa-github"></i>
            <span className="social-text">github.com/Preethi-1205</span>
          </a>

          <a
            href="https://www.linkedin.com/in/preethi-mahalingam-aa05a42a6/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
            <span className="social-text">linkedin.com/in/preethi-mahalingam-aa05a42a6</span>
          </a>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT JS</li>
            <li>CORE JAVA</li>
            <li>SQL</li>
            <li>Git</li>
            <li>NODE JS</li>
          </ul>
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
