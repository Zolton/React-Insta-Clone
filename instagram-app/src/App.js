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

   addCommentFunction = event => {
     event.preventDefault();
    //this.setState({newComment: event.target.value})
    const newComment = {
      id: Date.now(),
      
    }
  }

  addTodo = (e, item) => {
    e.preventDefault();
    const newTodoItem = {
    task: item,
    id: Date.now(),
    completed: false
    };
    };
  render() {
   
  
    // maps thru dummData, sends each object (3) to PostContainer as
    // its own set of data
    console.log("data below" + this.state.data);
    console.log(this.state.data);
    //console.log(event.target.value)
    return (
      <div>
        {this.state.data.map(user => {
          return <PostContainer userData={user} />;
        })}
        <form>
        <input 
        type="text" 
        name="inputField"
        placeholder="Add a comment..."
        //value={newComment}
        onChange={this.addCommentFunction}
         />
         </form>

      </div>
    );
  }
}

export default App;
