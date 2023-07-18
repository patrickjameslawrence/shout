import { Component } from "react";
import Axios from "axios";
import PostComponent from "./PostComponent";
import NewPostComponent from "./NewPostComponent";

export default class FeedComponent extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    Axios.get("http://localhost:3001/api/v1/posts").then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
    
  }

  render() {
    return (
      <div>
        <NewPostComponent />
        {this.state.posts.map((post) => {
          const { id, text, poster, timestamp } = post;
          return <PostComponent key={id} text={text} poster={poster} timestamp={timestamp} />;
        })}
      </div>
    );
  }
}
