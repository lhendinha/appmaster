import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import Post from "./Post";
import PostCreator from "./PostCreator";

class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount = () => {
    this.readFromStorage();
  };

  onNavigate = post => {
    this.props.history.push("/post/" + post.time);
  };

  renderPost = () => {
    const { posts } = this.state;

    return posts.map((item, index) => (
      <Post
        key={index}
        post={item}
        onEdit={this.editPost.bind(this)}
        onNavigate={() => this.onNavigate(item)}
      />
    ));
  };

  insertPost = post => {
    const myPosts = this.state.posts;
    myPosts.push(post);

    this.setState({ posts: myPosts });

    this.saveInStorage();
  };

  editPost = post => {
    const posts = JSON.parse(localStorage.getItem("savedPosts"));

    const updatedPosts = posts.map(item => {
      if (item.time === post.time) {
        item.initialLikes = post.initialLikes;
      }

      return item;
    });

    localStorage.setItem("savedPosts", JSON.stringify(updatedPosts));
  };

  saveInStorage = () => {
    const posts = JSON.stringify(this.state.posts);
    localStorage.setItem("savedPosts", posts);
  };

  readFromStorage = () => {
    const savedPosts = localStorage.getItem("savedPosts");

    if (savedPosts) {
      this.setState({ posts: JSON.parse(savedPosts) });
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", padding: 10 }}>Minha rede social</h1>
        <PostCreator onCreate={this.insertPost.bind(this)} />
        <br />
        <Button
          style={{ marginLeft: window.innerWidth * 0.5 }}
          onClick={() => this.props.history.push("./sobre")}
        >
          Sobre
        </Button>
        {this.renderPost()}
      </div>
    );
  }
}

export default TimeLine;
