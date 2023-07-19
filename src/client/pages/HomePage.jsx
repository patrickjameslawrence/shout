import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FeedComponent from '../components/feed/FeedComponent';
import NewPostModalComponent from '../components/navbar/NewPostModalComponent'
import LoginModalComponent from '../components/navbar/LoginModalComponent';
import "../scss/HomePage.scss";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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
                    <Navbar.Brand className="brand">Shout</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link>
                            <NewPostModalComponent />
                        </Nav.Link>
                        <Nav.Link>
                            <LoginModalComponent />
                        </Nav.Link>
                        <Link to="/profile" className="profileButtonContainer">
                            <Button>Profile</Button>
                        </Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <FeedComponent />
            </div>
        );
    }
}