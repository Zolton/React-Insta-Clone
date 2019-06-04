import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer";


class App extends React.Component {
  state = {
    data: [],
    newComment: ""
  };

  componentDidMount() {
    this.setState({data: dummyData});
  }

  // creates a container for the new comment, with the 3 fields all comments need,
  // id, username, and text



  render() {
   
  
    // maps thru dummData, sends each object (3) to PostContainer as
    // its own set of data
    console.log("data below" + this.state.data);
    console.log(this.state.data);
    
    return (
      <div>
        {this.state.data.map(user => {
          return <PostContainer userData={user} />;
        })}
      </div>
      // Input field at bottom of page, 
    );
  }
}

export default App;
