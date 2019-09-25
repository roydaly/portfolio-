import React from 'react';
import './AboutMe.css';
import seattle from './seattle-from-air.jpg';

function AboutMe()  {
     
        return (
            <div className="container">
            <img src={seattle} alt="Seattle" style={{backgroundSize: "cover", width:"100%", height:"100%"}}/>;
            <div className="about-me">Pilot, Customer Success Manager and Managing Broker turned 
                full-stack web developer. I am driven to provide thorough, clean, efficient, 
                and unique solutions. My desire to learn and grow comes from being curious 
                and a desire to be a life long learner. Through these personal and 
                professional experiences, I bring someone who is organized and well-prepared, 
                easy to work with, and anticipates needs and concerns to any project and 
                working environment.</div>
            </div>
        )
    
}

export default AboutMe;