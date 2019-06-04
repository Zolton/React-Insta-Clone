import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer";

// <PostContainer userData={this.state.data.map(e=>e.comments)} />
class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({data: dummyData});
  }

  render() {
    // Just sends the dummyData out to PostContainer
    // console.log(this.state.dummyData[0])
    //userData={this.state.dummyData.map(e=>e.comments)}

    console.log("data below" + this.state.data);
    console.log(this.state.data);
    return (
      <div>
        {this.state.data.map(user => {
          return <PostContainer userData={user} />;
        })}
        <input type="text" placeholder="Enter text here" />
      </div>
    );
  }
}

export default App;
