import React from 'react';
import './Banner.css'; 

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <h1 className="name">PREETHI MAHALINGAM</h1>
        <p className="title">ASSOCIATE SOFTWARE DEVELOPER | HTML/CSS |JAVASCRIPT | REACT JS </p>
        <p className="contact">
          📍 PUDUCHERRY &nbsp; | &nbsp;
          📧 preethicap.a.m@gmail.com &nbsp; | &nbsp;
          🌐 https://www.linkedin.com/in/preethi-mahalingam-aa05a42a6/
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
