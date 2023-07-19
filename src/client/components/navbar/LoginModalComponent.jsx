import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { useState } from "react";
import '../../scss/LoginModalComponent.scss'
import Axios from "axios";
import Cookies from 'js-cookie';

export default function LoginModalComponent(props) {
    const [ isOpen, setOpen ] = useState(false);
    const [ isInvalid, setIsInvalid ] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLoginButtonClick = () => {
        var JSONString = {};
        JSONString.username = document.getElementById("usernameInput").value;
        JSONString.password = document.getElementById("passwordInput").value;
        Axios.post(
            "http://localhost:3001/api/v1/users",
            JSONString
        ).then((res) => {
            if(res.status === 200) {
                Cookies.set('uuid', res.data.id, { expires: 7 });
                Cookies.set('username', res.data.username, { expires: 7 });
                handleClose();
            }
        }).catch((e) => {
            setIsInvalid(true);
        });
    }

    return (
        <div
            onKeyDown={e => e.stopPropagation()}
            onClick={e => e.stopPropagation()}
            onFocus={e => e.stopPropagation()}
            onMouseOver={e => e.stopPropagation()} // these fix an issue where you can't type a space when a modal is inside a bootstrap navbar
            >
            <Button onClick={handleOpen}>Login</Button>
            <Modal show={isOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3 credentialContainer">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        id="usernameInput"
                        type="username"
                        autoFocus
                        isInvalid={isInvalid}
                    />
                    </Form.Group>
                    <Form.Group
                    className="mb-3 credentialContainer"
                    >
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="passwordInput" type="password" as="input" isInvalid={isInvalid} />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleLoginButtonClick}>
                    Login
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}