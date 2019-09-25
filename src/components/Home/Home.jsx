import React from 'react';
import './Home.css';
import logo from './bg.jpg';
import terminal from '../../../src/icons/terminal-solid.svg';


function Home()  {
        return (
        <div className="container">
        <img className="logo" src={logo} alt="Logo" style={{backgroundSize: "cover", width:"100%", height:"100%"}}/>;
        <img className="terminal" src={terminal} alt="Terminal"></img>
        <div className="typewriter">
        <div>Welcome and thanks for visiting! Please take a look around...</div>
        </div>
        </div>
        )
}

export default Home;