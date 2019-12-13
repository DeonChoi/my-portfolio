import React from 'react';
import GitHubIcon from '../images/ProjectsComponent/github_light.png';
import PhraseHunterImage from '../images/ProjectsComponent/PhraseHunter.png';
import ShrinkURLImage from '../images/ProjectsComponent/ShrinkURL.png';
import FlixImage from '../images/ProjectsComponent/Flix.png';
import DelishImage from '../images/ProjectsComponent/Delish.png';
import { Row, Col, Badge } from 'react-bootstrap';

class Projects extends React.Component {
    render () {
        return (
            <Row id='projects' className='w-100'>
                
                <div className='overlay-layer'></div>
                <Col className='d-flex flex-column project-container primary'>
                    
                    <Row className='justify-content-end project-title w-100'>
                        <Col xl={3} lg={3} md={3} sm={3} xs={4}>
                            <p className='project-title font-weight-bold'>Projects</p>
                        </Col>
                        
                    </Row>
                    
                    <Row className='d-flex align-items-center justify-content-center w-100'> 
                        
                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/weather-app/' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={ShrinkURLImage} alt='shrinkURL screenshot'/>
                            </a>
                            <p className='font-weight-bold text-center project-name'>shrinkURL</p>
                            <Row className='d-flex flex-wrap align-items-center justify-content-center'>
                                <a href='https://github.com/DeonChoi/weather-app' target='_blank' rel="noopener noreferrer">
                                <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                                </a>
                                <Badge variant='light'>Node.js</Badge>
                                <Badge variant='light'>Express.js</Badge>
                                <Badge variant='light'>MongoDB</Badge>
                                <Badge variant='light'>React.js</Badge>
                                <Badge variant='light'>Bootstrap</Badge>
                            </Row>
                        </div>

                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/flix-app' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={FlixImage} alt='flix project screenshot'/>
                            </a>
                            <p className='font-weight-bold text-center project-name'>Flix</p>
                            <Row className='d-flex flex-wrap align-items-center justify-content-center'>
                                <a href='https://github.com/DeonChoi/flix-app' target='_blank' rel="noopener noreferrer">
                                <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                                </a>
                                <Badge variant='light'>React.js</Badge>
                                <Badge variant='light'>Bootstrap</Badge>
                                <Badge variant='light'>CSS</Badge>
                            </Row>
                        </div>

                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/recipe-app/' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={DelishImage} alt='delish project screenshot'/>
                            </a>
                            <p className='font-weight-bold text-center project-name'>Delish</p>
                            <Row className='d-flex flex-wrap align-items-center justify-content-center'>
                                <a href='https://github.com/DeonChoi/recipe-app/tree/master' target='_blank' rel="noopener noreferrer">
                                <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                                </a>
                                <Badge variant='light'>React.js</Badge>
                                <Badge variant='light'>Bootstrap</Badge>
                                <Badge variant='light'>CSS</Badge>
                            </Row>
                        </div>
                        
                        <div className='project-tile'>
                            <a href='https://deonchoi.github.io/OOPgameShowApp/' target='_blank' rel="noopener noreferrer">
                                <img className='project-image ' src={PhraseHunterImage} alt='phrase hunter project screenshot'/>
                            </a>
                            <p className='font-weight-bold text-center project-name'>Phrase Hunter</p>
                            <Row className='d-flex flex-wrap align-items-center justify-content-center'>
                                <a href='https://github.com/DeonChoi/OOPgameShowApp' target='_blank' rel="noopener noreferrer">
                                <img className='repo-icon' src={GitHubIcon} alt='GitHub Icon'/>
                                </a>
                                <Badge variant='light'>HTML</Badge>
                                <Badge variant='light'>CSS</Badge>
                                <Badge variant='light'>jQuery</Badge>
                            </Row>
                        </div>
                        
                    </Row>
                </Col>
            </Row>
        );  
    }
}

export default Projects; 