import React from "react";
//import App from "../../App";
//import PostContainer from "../PostContainer/PostContainer";
//NOT NEEDED^^

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
  //boom! constructor gone!
  state = {
comments: this.props.comments,
newComment: ""
  }

addNewComment = e => {
  e.preventDefault();
  //don't refresh page^
  //now declare new comment format
  //NOT the same newComment as above or name, can be different!
  const newComment = {
    username: "Cannonball Run",
    text: this.state.newComment
    //pointing to the newCOmment variable from state
  }
  //the abvoe just set the template, now to update and push it in
  this.setState({
    comments: [...this.state.comments, newComment], newComment: ""
    //build the new array
    //newComment comes from const above, not the state!
    //first newCOmment is const, the one after comment is state newComment that we're trying to reset
  })
}

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
      // saying "hold this value" - name is unique, so each input field is tracked, don't need multiple change handlers, just one!
      //brakcets to understand chain of command
      //referencing a variable, that could have spaces!
      //brackets protect against interpreting as a literal
    })
  }

// just gonna add new comments to existing array
  render() {
    //Just stick the hot JSX right into the tags, format as you go
    return (
      // comment is comment object, index is what we'll use for the key/id
      //gonna jsut add the new comments right into the existing array, then yank them out
      <div>
        
        {this.state.comments.map(comment => {
          return (
            <>
              <h3>{comment.username}</h3>
              <p>{comment.text}</p>
            </>
          );
        })}
        <p className="timestamp">{this.props.timestamp}</p>
        
        <form onSubmit={this.addNewComment}>

        <input 
        type="text" 
        placeholder="add a comment" 
        name="newComment"
        value={this.state.newComment}
        onChange={this.changeHandler}
        />

        </form>
        
      </div>
      // this.props needed for timestamp bc we're outside the map, just
      //pulling off surface level object stuff
      //yes, name= must be same as state created variable
      //its just a variable!
      //e.target.name is what's setting the state, so it needs to match name

      // <div>
      //   <span>
      //     {/* username in bold, next to comments */}
      //     <strong>{this.state.props.userComments.username}: </strong>
      //     {this.state.props.userComments.text}
      //   </span>
      // </div>
    );
  }
}

export default CommentSection;
