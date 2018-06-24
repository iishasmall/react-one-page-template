import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Work from './components/work/work';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Work/>
      <Skills/>
      <Portfolio/>
      <Testimonials/>
      </div>
    );
  }
}

export default App;
