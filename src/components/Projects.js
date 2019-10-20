import React from 'react';
import JokeCardsImage from '../images/JokeCards.png';
import RandomQuoteMachineImage from '../images/RandomQuoteMachine.png';
import WeatherImage from '../images/Weather.png';
import GitHubIcon from '../images/github_dark.png';
import { Row, Col, Badge } from 'react-bootstrap';

class Projects extends React.Component {
    render () {
        return (
            <Col id='projects'>
                <Row className='d-flex justify-content-center project-container'>
                    <p className='project-title font-weight-bold'>Projects</p>
                    <Row className='d-flex flex-wrap align-items-center justify-content-center'> 
                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/weather-app/' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={WeatherImage} alt='First project'/>
                            </a>
                            <p className='font-weight-bold'>Weather App</p>
                            <a href='https://github.com/DeonChoi/weather-app' target='_blank' rel="noopener noreferrer">
                            <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                            </a>
                            <Badge variant='secondary'>HTML</Badge>
                            <Badge variant='secondary'>Bootstrap</Badge>
                            <Badge variant='secondary'>React</Badge>
                        </div>
                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/random-quote-machine/' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={RandomQuoteMachineImage} alt='Second project'/>
                            </a>
                            <p className='font-weight-bold'>Random Quote Machine</p>
                            <a href='https://github.com/DeonChoi/random-quote-machine' target='_blank' rel="noopener noreferrer">
                            <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                            </a>
                            <Badge variant='secondary'>HTML</Badge>
                            <Badge variant='secondary'>CSS</Badge>
                            <Badge variant='secondary'>React</Badge>
                        </div>
                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/joke-cards' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={JokeCardsImage} alt='Third project'/>
                            </a>
                            <p className='font-weight-bold'>Random Quote Machine</p>
                            <a href='https://github.com/DeonChoi/joke-cards' target='_blank' rel="noopener noreferrer">
                            <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                            </a>
                            <Badge variant='secondary'>React</Badge>
                            <Badge variant='secondary'>Bootstrap</Badge>
                            <Badge variant='secondary'>HTML</Badge>
                        </div>
                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/joke-cards' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={JokeCardsImage} alt='Fourth project'/>
                            </a>
                            <p className='font-weight-bold'>Random Quote Machine</p>
                            <a href='https://github.com/DeonChoi/joke-cards' target='_blank' rel="noopener noreferrer">
                            <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                            </a>
                            <Badge variant='secondary'>React</Badge>
                            <Badge variant='secondary'>Bootstrap</Badge>
                            <Badge variant='secondary'>HTML</Badge>
                        </div>
                    </Row>
                </Row>
            </Col>
        );  
    }
}

export default Projects; 