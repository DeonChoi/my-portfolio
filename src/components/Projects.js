import React from 'react';
import JokeCardsImage from '../images/JokeCards.png';
import RandomQuoteMachineImage from '../images/RandomQuoteMachine.png';
import WeatherImage from '../images/Weather.png';
import GitHubIcon from '../images/github_light.png';
import { Row, Col, Badge } from 'react-bootstrap';

class Projects extends React.Component {
    render () {
        return (
            <Col id='projects'>
                <div className='overlay-layer'></div>

                <Row className='d-flex justify-content-end project-container'>

                    <Row>
                        <p className='project-title font-weight-bold'>Projects</p>
                    </Row>
                    
                    <Row className='d-flex flex-wrap align-items-center justify-content-center'> 
                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/weather-app/' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={WeatherImage} alt='First project'/>
                            </a>
                            <p className='font-weight-bold text-center'>Weather App</p>
                            <Row className='d-flex flex-wrap align-items-center justify-content-center'>
                                <a href='https://github.com/DeonChoi/weather-app' target='_blank' rel="noopener noreferrer">
                                <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                                </a>
                                <Badge variant='light'>HTML</Badge>
                                <Badge variant='light'>Bootstrap</Badge>
                                <Badge variant='light'>React</Badge>
                            </Row>
                            
                        </div>
                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/random-quote-machine/' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={RandomQuoteMachineImage} alt='Second project'/>
                            </a>
                            <p className='font-weight-bold text-center'>Random Quote Machine</p>
                            <Row className='d-flex flex-wrap align-items-center justify-content-center'>
                                <a href='https://github.com/DeonChoi/random-quote-machine' target='_blank' rel="noopener noreferrer">
                                <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                                </a>
                                <Badge variant='light'>HTML</Badge>
                                <Badge variant='light'>CSS</Badge>
                                <Badge variant='light'>React</Badge>
                            </Row>
                        </div>
                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/joke-cards' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={JokeCardsImage} alt='Third project'/>
                            </a>
                            <p className='font-weight-bold text-center'>Random Quote Machine</p>
                            <Row className='d-flex flex-wrap align-items-center justify-content-center'>
                                <a href='https://github.com/DeonChoi/joke-cards' target='_blank' rel="noopener noreferrer">
                                <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                                </a>
                                <Badge variant='light'>React</Badge>
                                <Badge variant='light'>Bootstrap</Badge>
                                <Badge variant='light'>HTML</Badge>
                            </Row>
                        </div>
                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/joke-cards' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={JokeCardsImage} alt='Fourth project'/>
                            </a>
                            <p className='font-weight-bold text-center'>Random Quote Machine</p>
                            <Row className='d-flex flex-wrap align-items-center justify-content-center'>
                                <a href='https://github.com/DeonChoi/joke-cards' target='_blank' rel="noopener noreferrer">
                                <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                                </a>
                                <Badge variant='light'>React</Badge>
                                <Badge variant='light'>Bootstrap</Badge>
                                <Badge variant='light'>HTML</Badge>
                            </Row>
                        </div>
                    </Row>
                </Row>
            </Col>
        );  
    }
}

export default Projects; 