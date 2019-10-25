import React from 'react';
import GmailIcon from '../images/ContactComponent/gmail.png';
import LinkedInIcon from '../images/ContactComponent/linkedin.png';
import GitHubIcon from '../images/ContactComponent/github_dark.png';
import MyResume from '../images/ContactComponent/DeonChoiResume.png';
import { Row, Col, Button, Modal } from 'react-bootstrap';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    showModal() {
        this.setState({
            show: true
        });
    }

    hideModal(){
      this.setState({
        show: false
      })
    }

    render () {
        return (
            <Col id='contact' className='d-flex flex-column align-items-center bg-white contact-container'>
                <p className='contact-title font-weight-bold'>Contact</p>
                <p className='contact-description text-center'>I'd love to chat with you about my code, sports, work opportunities, or anything else!</p>
                <Row className=''>
                    <a href='mailto:deon.choi@gmail.com'>
                        <img className='contact-icon' src={GmailIcon} alt='Gmail Icon'/>
                    </a>
                    <a href='https://www.linkedin.com/in/deon-choi-b3019b128/' target='_blank' rel="noopener noreferrer">
                        <img className='contact-icon' src={LinkedInIcon} alt='LinkedIn Icon'/>
                    </a>
                    <a href='https://github.com/DeonChoi' target='_blank' rel="noopener noreferrer">
                        <img className='contact-icon' src={GitHubIcon} alt='GitHub Icon'/>
                    </a>
                    <div id='resume'>
                        <Button className='resume-button' variant="white" onClick={this.showModal}>
                            <img className='resume-img-preview' src={MyResume} alt='My Resume'/>
                        </Button>
                        <Modal show={this.state.show} onHide={this.hideModal} centered size='lg'>
                            <Modal.Body>
                                <img className='resume-img' src={MyResume} alt='My Resume'/>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Row>
            </Col>
        );  
    }
}

export default Contact; 