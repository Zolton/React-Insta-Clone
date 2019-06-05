import React from "react";
import App from "../../App";
import PostContainer from "../PostContainer/PostContainer";

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
  constructor(props) {
    super(props);
    this.state = {
      props
    };
  }

  render() {

    return (
      <div>
        <span>
          {/* username in bold, next to comments */}
          <strong>{this.state.props.userComments.username}: </strong>
          {this.state.props.userComments.text}
        </span>
      </div>
    );
  }
}

export default CommentSection;
