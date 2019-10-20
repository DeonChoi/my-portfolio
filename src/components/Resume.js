import React from 'react';
import MyResume from '../images/myresume.png';
import { Button, Modal } from 'react-bootstrap';

class Resume extends React.Component {
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
            <div id='resume'>
                <Button className='contact-icon resume-button' variant="white" onClick={this.showModal}>
                    <img className='resume-img-preview' src={MyResume} alt='My Resume'/>
                </Button>
                <Modal show={this.state.show} onHide={this.hideModal} centered size='lg'>
                    <Modal.Body>
                        <img className='resume-img' src={MyResume} alt='My Resume'/>
                    </Modal.Body>
                </Modal>
            </div>
        );  
    }
}

export default Resume; 