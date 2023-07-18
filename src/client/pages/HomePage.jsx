import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import FeedComponent from '../components/feed/FeedComponent';
import NewPostModalComponent from '../components/navbar/NewPostModalComponent'
import LoginModalComponent from '../components/navbar/LoginModalComponent';

export default class HomePage extends Component {
    state = {
        appearance: "light",
        showNewPostComponent: false
    };

    render() {
        return (
            <div>
                <Navbar expand="lg" bg="primary" className="bg-body-primary">
                    <Container>
                    <Navbar.Brand href="#home">Shout [!]</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#home">
                            <LoginModalComponent />
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <FeedComponent />
            </div>
        );
    }
}