import React from 'react';
import './Banner.css'; // Optional: move styles here if preferred

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <h1 className="name">John Doe</h1>
        <p className="title">Full Stack Developer | React | Node.js | Python</p>
        <p className="contact">
          📍 New York, NY &nbsp; | &nbsp;
          📧 john.doe@example.com &nbsp; | &nbsp;
          🌐 www.johndoe.dev
        </p>
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
