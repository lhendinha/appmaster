import React, { Component } from "react";
import { Input, Icon, Container } from "semantic-ui-react";

class PostCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  changeTextValue = event => {
    this.setState({ text: event.target.value });
  };

  createPost = () => {
    const { text } = this.state;
    let time = new Date();

    const post = {
      content: text,
      time: time.toLocaleString("pt-BR", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      }),
      author: "Baraky",
      initialLikes: Math.floor(Math.random() * 1000) + 1
    };

    this.setState({ text: "" });
    this.props.onCreate(post);
  };

  render() {
    const { text } = this.state;
    return (
      <Container textAlign="center">
        <Input
          style={{ width: "100%" }}
          value={text}
          onChange={event => this.changeTextValue(event)}
          icon={
            <Icon
              name="comment"
              inverted
              circular
              link
              onClick={() => this.createPost()}
            />
          }
          placeholder="O que você está pensando..."
        />
      </Container>
    );
  }
}

export default PostCreator;
