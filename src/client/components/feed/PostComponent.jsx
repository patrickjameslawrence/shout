import { Component } from "react";
import Card from "react-bootstrap/Card";
import "../../scss/PostComponent.scss";

export default class PostComponent extends Component {
  state = {
    id: this.props.id,
    text: this.props.text,
    poster: this.props.poster,
    timestamp: this.props.timestamp
  };

  render() {
    const { id, text, poster, timestamp } = this.state;
    return (
      <div>
        <Card className="m-1" style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Text>{text ? text : "Loading..."}</Card.Text>

            <div className="posterProfile">
              <Card.Title>{poster.username ? poster.username : "Loading..."}</Card.Title>
              <Card.Subtitle>{timestamp ? timestamp : "Loading..."}</Card.Subtitle>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}