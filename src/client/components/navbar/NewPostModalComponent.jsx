import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";
import Cookies from "js-cookie";

export default function NewPostComponent(props) {
    const [ isOpen, setOpen ] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handlePostShoutButtonClick = () => {
      const uuid = uuidv4();
      var JSONString = {};
      JSONString.id = uuid;
      if (Cookies.get('uuid')) {
        JSONString.poster = {
          id: Cookies.get('uuid'),
          username: Cookies.get('username'),
        }
      } else {
      JSONString.poster = {
          id: -1,
          username: "Anonymous",
        };
      }
      JSONString.text = document.getElementById("newPostTextarea").value;
      var date = new Date();
      JSONString.timestamp = date.getTime();

      Axios.post(
          "http://localhost:3001/api/v1/posts",
          JSONString
      ).then((res) => {
          console.log("posted tweet to server");
      });

      handleClose();
    }

    return (
        <div
        onKeyDown={e => e.stopPropagation()}
        onClick={e => e.stopPropagation()}
        onFocus={e => e.stopPropagation()}
        onMouseOver={e => e.stopPropagation()} // these fix an issue where you can't type a space when a modal is inside a bootstrap navbar
        >
            <Button onClick={handleOpen}>New post</Button>
            <Modal show={isOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                        >
                            <Form.Control id="newPostTextarea" as="textarea" rows={4} autoFocus />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handlePostShoutButtonClick}>
                        Post shout
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
