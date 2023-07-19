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
    var date = new Date(timestamp);
    return (
      <div id={id}>
        <Card className="m-1 shoutWrapper">
          <Card.Body className="shoutBody">
            <Card.Text className="shoutText">{text ? text : "Loading..."}</Card.Text>
            <div className="posterProfile">
              <Card.Subtitle>{poster.username ? poster.username : "Loading..."}</Card.Subtitle>
              <Card.Subtitle>{timestamp ? date.toLocaleString() : "Loading..."}</Card.Subtitle>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}