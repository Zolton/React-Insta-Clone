import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar"

class App extends React.Component {
  state = {
    data:[]
  };
 
//BOOM! No more constructor and super
// Why? Because syntactic sugar in new react - constructor props + super props
//is just assumed!

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  // Creates a new dummyData.comment
  // No idea how its working beyond creating a template
  // addComment = event => {
  //   event.preventDefault();
  //   const newUserComment = {
  //     id: Date.now(),
  //     username: "Cannonball",
  //     text: ""
  //   };
  //   this.setState({
  //     userData: [...this.state.data, newUserComment],
  //     //text: ""
  //   });
  // };

  render() {
    // maps thru dummyData, sends each object (3) to PostContainer as
    // its own set of data

    return (
      <div>
        <SearchBar />
        <PostContainer data={this.state.data} />
        {/* {this.state.data.map(user => {
          return <PostContainer data={user} addComment={this.addComment} />;
        })} */}
      </div>
    );
  }
}

export default App;
