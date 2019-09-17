import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
  

  return (
    <Router>
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <main style={{marginTop: "64px"}}>
      </main>
    </div>
        <Route exact path="/aboutme"  component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
    </Router>
  );
}
}
export default App;
