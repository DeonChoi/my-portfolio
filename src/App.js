import React, {useEffect} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Row } from 'react-bootstrap';


function App() {

  useEffect(() => {
    const timerAlert = setTimeout(() => {
      alert('Press OK/CLOSE to redirect to new website -> https://deonchoi.com/')
      window.location.href = 'https://deonchoi.com/';
    }, 1500);
    // const redirectAlert = setTimeout(() => {
    //   window.location.href = 'https://deonchoi.com/';
    // }, 1500);

    return () => clearTimeout(timerAlert);
  }, []);

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
