import React from "react";
import App from "../App";
import CommentSection from "./CommentSection";

// Maps thru each object, sending the object.comments array
// down to Comment section

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      props,
      newComment: ""
    }
  }

  addComment = event => {
    event.preventDefault();
    const newComment = {
     id: Date.now(),
     username: "test run",
     text: ""
   };
   
   this.setState({   });
 }
      
render () {
  //console.log("post container below " + this.state.props.userData);
  //console.log(this.state.props);
  return (
    <div>
      {this.state.props.userData.comments.map(usercomms => {
        return <CommentSection userComments={usercomms} />;
      })}

      <form>

      <input 
        type="text" 
        name="inputField"
        placeholder="Add a comment..."
        value={this.state.newComment}
        //onChange={addComment}
         />

         </form>

    </div>
  );
}
}

export default PostContainer;
