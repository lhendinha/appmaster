import React, { Component } from "react";
import { Segment, Dimmer, Loader, Label } from "semantic-ui-react";

import Post from "./Post";

class DetalhePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }

  componentDidMount = () => {
    const posts = JSON.parse(localStorage.getItem("savedPosts"));
    const post = posts
      .filter(savedPost => {
        return savedPost.time === this.props.match.params.time;
      })
      .pop();

    this.setState({ post });
  };

  render() {
    if (this.state.post === null) {
      return (
        <Segment
          style={{
            marginTop: window.innerHeight * 0.5,
            height: 150
          }}
        >
          <Dimmer active>
            <Loader>Carregando</Loader>
          </Dimmer>
        </Segment>
      );
    } else {
      return (
        <div>
          <Post post={this.state.post} />
        </div>
      );
    }
  }
}

export default DetalhePost;
