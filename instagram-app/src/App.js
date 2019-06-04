import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({data: dummyData});
  }

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
        <form>
        <input 
        type="text" 
        placeholder="Add a comment..."
     //   value={this.state.newComment}
     //   onChange={addCommentFunction}
         />
         </form>

      </div>
    );
  }
}

export default App;
