import React from 'react';
import { Col, Row } from 'react-bootstrap';

class Home extends React.Component {
    render () {
        return (
            <Row id='home' className='text-white d-flex flex align-items-end w-100'>
                
                <div className='overlay-layer'></div>
                <Col xl={{span: 11, offset: 1}} lg={{span: 11, offset: 1}} md={{span: 11, offset: 1}} sm={{span: 11, offset: 1}} xs={{span: 11, offset: 1}} className='primary home-container d-flex flex-column justify-content-end text-right'>
                    <p className='home-title'>Deon Choi</p>
                    <p className='home-description'>
                        Dodgers Fan
                        <br></br>
                        Front-End Developer
                        <br></br>
                        San Francisco Bay Area Native
                    </p>
                </Col>
                
            </Row>
        );  
    }
}

export default Home; 