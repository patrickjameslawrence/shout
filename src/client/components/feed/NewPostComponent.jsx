import Axios from "axios";
import { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { v4 as uuidv4 } from "uuid";

export default class NewPostComponent extends Component {
    state = {
        newPostText: "",
    };

    handleClick() {
        console.log(document.getElementById("newPostTextarea").value);
        const uuid = uuidv4();
        var JSONString = {};
        JSONString.id = uuid;
        JSONString.poster = {
            id: 10,
            username: "John Doe",
        };
        JSONString.text = document.getElementById("newPostTextarea").value;
        var date = new Date();
        JSONString.timestamp = date.getTime();

        Axios.post(
            "http://localhost:3001/api/v1/posts",
            JSONString
        ).then((res) => {
            console.log("posted tweet to server");
        });
    }

    render() {
        return (
            <div>
                <Card className="m-1" style={{ width: "20rem" }}>
                    <Card.Body>
                        <Card.Text>
                            <textarea
                                id="newPostTextarea"
                                placeholder="Enter post text here..."
                                rows="4"
                            ></textarea>
                        </Card.Text>
                        <Button variant="primary" onClick={() => {
                            this.handleClick();
                        }}>Post</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
