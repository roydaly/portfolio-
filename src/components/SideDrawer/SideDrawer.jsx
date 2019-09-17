import React from 'react';
import './SideDrawer.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
   return (

   <nav className={drawerClasses}>
        <ul>
        <li><Link to="/aboutme">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>

   );
};

export default sideDrawer;