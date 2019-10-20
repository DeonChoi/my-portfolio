import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state={
            color: 'white'
        };
        
       this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }

    listenScrollEvent(e) {
        let height=window.innerHeight;
        if (window.scrollY >= height*2) {
          this.setState({color: 'black'})
        } else {
          this.setState({color: 'white'})
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }
      
    render () {
        return (
            <Navbar id='navigation' fixed='top' className='justify-content-end'>
                <Navbar.Brand href='#home' style={{color:this.state.color}}>Deon Choi</Navbar.Brand>
                <Nav>
                    <Nav.Link href='#about' style={{color:this.state.color}}>About</Nav.Link>
                    <Nav.Link href='#projects' style={{color:this.state.color}}>Projects</Nav.Link>
                    <Nav.Link href='#contact' style={{color:this.state.color}}>Contact</Nav.Link>
                </Nav>
            </Navbar>
        );  
    }
}

export default Navigation; 