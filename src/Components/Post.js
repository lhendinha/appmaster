import React, { Component } from "react";
import { Button, Icon, Label } from "semantic-ui-react";

import "../Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.initialLikes
    };
  }

  addLike = () => {
    const { likes } = this.state;
    const { post } = this.props;

    this.setState({ likes: likes + 1 }, () => {
      const editedPost = {
        ...post,
        initialLikes: this.state.likes
      };
      this.props.onEdit(editedPost);
    });
  };

  render() {
    const { likes } = this.state;
    const { post } = this.props;

    return (
      <div className={"post"}>
        <Label onClick={() => this.props.onNavigate()} size={"big"}>
          {post.content}
        </Label>
        <br />
        <br />
        <Label size={"medium"}>{post.author}</Label>
        <br />
        <br />
        <Label circular color={"blue"}>
          {post.time}
        </Label>
        <br />
        <br />
        <Button as="div" labelPosition="right">
          <Button color="blue" onClick={() => this.addLike()}>
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic color="blue" pointing="left">
            {likes}
          </Label>
        </Button>
      </div>
    );
  }
}

export default Post;
