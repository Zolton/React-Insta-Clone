import React from "react";
import App from "../App";
import PostContainer from "./PostContainer";

// function CommentSection(props) {

//   console.log("Comment section below" + props.userComments);
//   console.log(props.userComments.username);
//   console.log("props.usercomments " + props.userComments);
//   console.log(props.userComments);

//   // Not actually sure why I don't have to map over this
//   // Guessing it's bc props is already the comment section, and
//   // this function is looking over each comment object and returning
//   // username and text.  Tho still not sure why I don't have to
//   // specifically map out username and text

//   return (
//     <div>
//       <div>Username: {props.userComments.username}</div>
//       <div>Comment: {props.userComments.text}</div>
//     </div>
//   );
// }

// export default CommentSection;

class CommentSection extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      props
    }
  }

  // newComment = event => {

  // }

  // addCommentFunction = event => {
  //   this.setState({newComment: event.target.value})
  // }
      
render(){
  console.log("this.state.props.userComments.username is " + this.state.props.userComments.username)
  console.log(this.state.props.userComments.username)
  return (
    <div>
      <div>Username: {this.state.props.userComments.username}</div>
      <div>Comment: {this.state.props.userComments.text}</div>
    </div>
  );
}
  }

export default CommentSection;
