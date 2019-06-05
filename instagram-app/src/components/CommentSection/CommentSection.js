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

/* 

addNewComment called on submit.  Says,  "take a look in value field of input - whatever it is, stick it into this.state.newComment above"
text on const = this.state.newComment, so that gets pulled in when addnewCommentruns
then setState takes all existing this.state.comments, puts it into a new array, and adds this.state.newComment as a new array item at the end
the second newComment: "" just resets the value field of hte input box back to zero for the next comment
and that's how the addnewcomment/submit button works
*/

addNewComment = e => {
  e.preventDefault();
  //don't refresh page^
  //now declare new comment format
  //NOT the same newComment as above or name, can be different!
  const newComment = {
    username: "Cannonball Run",
    text: this.state.newComment
    //text here is pointing to the newCOmment variable from state
  }
  //the abvoe just set the template, now to update and push it in

  this.setState({
    comments: 
    [...this.state.comments, newComment], 
    newComment: ""
   /* 
   build the new array
    newComment in array comes from const above, not the state!
    first newComment is const, the one after comment is state newComment that we're trying to reset
  
    setting state - saying, alrright state, for comments, what I wanna make is a new array - the []
    and inside that new array, put in the previous array - this.state.comments, just smash it in there via the ...
    just push it all in there
    peeling back the shell and pouring it all in
    then the comma because we want another object added on
    the ... changes from dumping the comment array, to whats IN THE ARRAY - the objects in the array,
    and that comma says, I wanna add newComment, the const from above

    the second newComment - after spreading in the newComment to the state, saying wanna add new comment to State
    newComment on state is a placeholder for the data before it's updated.  once its updated via setstate and added to the array, 
    just blank out the placeholder
    resetting it back to zero
    if you take it out, 
    state is a memory holder, newComment is a placeholder for the input field
    newComment "" is to just collect what the user types
    you're adding into the comments
    newComment in the array is what's added to state, newComment outside just blanks - take it out, and the users typed comment 
    wouldn't clear after they hit enter -take it out and try!
    goes from input field to state, then to setState, then pushed into the new array, then second newComment resets the input field to blank
    
    */
  
  })
}

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
      // saying "hold this value" - name is unique, so each input field is tracked, don't need multiple change handlers, just one!
      //brakcets to understand chain of command
      //referencing a variable, that could have spaces!
      //brackets protect against interpreting as a literal
  
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
      /*
      this.props needed for timestamp bc we're outside the map, just
      pulling off surface level object stuff
      yes, name= must be same as state created variable
      its just a variable!
      e.target.name is what's setting the state, so it needs to match name
*/
    
    );
  }
}

export default CommentSection;
