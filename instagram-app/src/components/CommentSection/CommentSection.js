import React from "react";

class CommentSection extends React.Component {
  //boom! constructor gone!
  state = {
    comments: this.props.comments,
    newComment: ""
  };

  /* 

addNewComment function called on submit.

nutshell: "value" field of input box - what user types into - is set to send all
the user typing to this.state above, as this.state.comment.  addNewComment function
just grabs whatever's in this.state.newComment, shoves it into text in the template
 and then this.setState below that shoves the template into the comment's array
 at the end (newCommentAdded), the second newComment just resets the text field to zero

*/

  addNewComment = e => {
    e.preventDefault();
    //says "don't refresh page^"
    //now declare new comment format
    //NOT the same newComment as above or name, can be different!
    const newCommentAddedByUser = {
      username: "Cannonball Run",
      text: this.state.newComment
    };
    //the abvoe just sets up the template, now to update and push it in

    this.setState({comments: [...this.state.comments, newCommentAddedByUser], newComment: ""
    });
  };

      /* 
    [] = build a new array
        - Note the setState(comments: ...[])- we're setting the old array of 
        comments into the new array of comments, then just adding newCommentAddedByUser
  
    this.setState says alright this.state:

    1) I wanna make a new array for this.state.comments - that's what the [] is for
    
    2) and inside that new array, put in the previous array - this.state.comments,
      which is set to this.props.comments - the existing array!! 
        - the ... **separates out** each item in the old array so they're inserted one 
          by one into the new array, instead of just dumped in as a single object!
        - Difference b/t dumping the array to dumping what's **IN** the array - that's
          what the ... does
        - peeling back the shell and pouring it all in
    
    3) then the comma because we want another object added on - the const from above,
        newCommentAddedByUser - added on as the last/latest item in the array
  
    4) the second newComment resets the text field to blank, ""
      - delete it - try it!  The user input persists after hitting Enter and 
        needs to be deleted manually.  Very annoying for users!
      - why? State is a memory holder, and newComment is a placeholder - it'll 
        retain what the user puts in unless we manually blank it
     - after spreading in the newComment to the state, 
        saying wanna add new comment to State

    Process in a nutshell: Input from user goes from the input value field, 
      to state, then to setState, then it's pushed into the new array, then 
      second newComment resets the input field to blank
   
    */
    
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // saying "hold this value" - name is unique, so each input field is tracked 
  //separately, don't need multiple change handlers, just one!
  //brakcets to understand chain of command
  //referencing a variable, that could have spaces!
  //brackets protect against interpreting as a literal

  // just gonna add new comments to existing array
  render() {
    //Just stick the hot JSX right into the tags, format as you go
    return (
      // comment is comment object, index is what we'll use for the key/id
      //gonna jsut add the new comments right into the existing array, 
      //then yank them out
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
        - its just a variable!
      e.target.name is what's setting the state, so it needs to match name
      of this.state above
*/
    );
  }
}

export default CommentSection;
