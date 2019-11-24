import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HTMLIcon from '../images/AboutComponent/html5.png';
import CSSIcon from '../images/AboutComponent/css3.png';
import SASSIcon from '../images/AboutComponent/sass.png';
import JavaScriptIcon from '../images/AboutComponent/javascript.png';
import jQueryIcon from '../images/AboutComponent/jquery.png';
import ReactIcon from '../images/AboutComponent/react.png';
import BootStrap4Icon from '../images/AboutComponent/bootstrap.png';
// import ReduxIcon from '../images/AboutComponent/redux.png';
import DodgersIcon from '../images/AboutComponent/dodgers.png';

class About extends React.Component {
    render () {
        return (
            <Row className='text-white d-flex align-items-end w-100' id='about'>
                <div className='overlay-layer'></div>
                <Col xl={{span: 8, offset: 4}} lg={{span: 9, offset: 3}} md={{span: 11, offset: 1}} sm={{span: 10, offset: 2}} xs={{span: 10, offset: 2}} className='primary font-weight-bold about-container d-flex flex-column justify-content-end text-right'>
                    <p className='about-title'>About Me</p>
               
                    <p className='about-description text-justify'>
                        Hi, my name is Deon Choi. 
                        I graduated from <a className='about-link' href='https://www.gwu.edu/' target='_blank' rel="noopener noreferrer">The George Washington University</a> in May 2019 with a Bachelor of Science in Statistics & a Minor in Computer Science. 
                        Shortly after graduation, I decided to dive into the world of web development.
                        <br></br>
                        I enjoy creating most of my applications using React.js and Bootstrap and because my goal is to master the <a className='about-link' href='https://www.educative.io/edpresso/what-is-mern-stack' target='_blank' rel="noopener noreferrer">MERN</a> stack, I am currently learning to use Node.js, Express.js, and MongoDB.
                        I still have an enormous amount to learn, but I'm incredibly excited to continue down this path into becoming an excellent developer.
                        <br></br>
                        Aside from web development, I enjoy fitness, food, watching, and playing sports. I'm a Lakers, Rams/Chargers, and die-hard Dodgers fan - I know it's been a disappointing decade, please don't remind me.
                    </p>
                    <Row className='d-flex justify-content-around'>
                        <img className='skill-icon' src={HTMLIcon} alt='HTML Icon'/>
                        <img className='skill-icon' src={CSSIcon} alt='CSS Icon'/>
                        <img className='skill-icon' src={JavaScriptIcon} alt='JavaScript Icon'/>
                        <img className='skill-icon' src={jQueryIcon} alt='jQuery Icon'/>
                        <img className='skill-icon' src={SASSIcon} alt='SASS Icon'/>
                        <img className='skill-icon' src={BootStrap4Icon} alt='Bootstrap 4 Icon'/>
                        <img className='skill-icon' src={ReactIcon} alt='React Icon'/>
                        {/* <img className='skill-icon' src={ReduxIcon} alt='Redux Icon'/> */}
                        <img className='about-icon skill-icon' src={DodgersIcon} alt='Dodgers Icon'/>
                    </Row>
                </Col>
            </Row>
        );  
    }
}

export default About; 