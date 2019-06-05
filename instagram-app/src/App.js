import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  // Creates a new dummyData.comment
  addComment = event => {
    event.preventDefault();
    const newUserComment = {
      id: Date.now(),
      username: "Cannonball",
      text: ""
    };
    this.setState({
      userData: [...this.state.data.comments, newUserComment],
      text: ""
    });
  };

  render() {
    // maps thru dummyData, sends each object (3) to PostContainer as
    // its own set of data
    console.log("data below" + this.state.data);
    console.log(this.state.data);

    return (
      <div>
        {this.state.data.map(user => {
          return <PostContainer userData={user} addComment={this.addComment} />;
        })}
      </div>
    );
  }
}

export default App;
