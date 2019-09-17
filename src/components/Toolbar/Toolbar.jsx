import React from 'react';
import './Toolbar.css';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const toolbar = props => (
   
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><Link to="/">Roy Daly | Software Engineer</Link></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="/aboutme">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </header>
    
);


export default toolbar;