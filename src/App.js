import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Row } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
  
        <Row className='row-container'>
          <Navigation />
        </Row>
        <Row className='row-container'>
          <Home />
        </Row>
        <Row className='row-container'>
          <About />
        </Row>
        <Row className='row-container'>
          <Projects />
        </Row>
        <Row className='row-container'>
            <Contact />
        </Row>

    </div>
  );
}

export default App;
