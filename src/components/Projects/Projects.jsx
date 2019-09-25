import React from 'react';
import './Projects.css';
import pImg from './rJKXLO.jpg';

function Projects()  {
     
        return (
            <div className="container">
            <img src={pImg} alt="Projects" style={{backgroundSize: "cover", width:"100%", height:"100%"}}/>;
            <div className="projects">
            <a className="link" href="https://github.com/roydaly/safe-street" target="_blank" rel="noopener noreferrer">GitHub</a> - Safe Street - <a className="link" href="https://safest-street.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Link</a>
            <br></br>
            <a className="link" href="https://github.com/roydaly/cocktail-time" target="_blank" rel="noopener noreferrer">GitHub</a> - Cocktail Time - <a className="link" href="https://cocktail-time.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Link</a>
            <br></br>
            <a className="link" href="https://github.com/roydaly/pinball-wars" target="_blank" rel="noopener noreferrer">GitHub</a> - Pinball Wars - <a className="link" href="https://pinball-wars.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Link</a>
            <br></br>
            <a className="link" href="https://github.com/roydaly/trade-tracker" target="_blank" rel="noopener noreferrer">GitHub</a> - Trade Tracker - <a className="link" href="https://trades-tracker.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Link</a>
            <br></br>
            <a className="link" href="https://github.com/roydaly/you-do-not-know-jack" target="_blank" rel="noopener noreferrer">GitHub</a> - You Don't Know Jack - <a className="link" href="https://you-do-not-know-jack.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Link</a>
            </div>
            </div>
        )
    
}

export default Projects;