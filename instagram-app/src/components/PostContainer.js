import React from "react";
import App from "../App";
import CommentSection from "./CommentSection";

// Maps thru each object, sending the object.comments array
// down to Comment section

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props
    };
  }

  //Why does this.state.newComment and the input field name need to be the same?
  changeHandler = event => {
    //console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

 // No idea how this is working
 // theory: fires on submit, should add value to form
  submit = event => {
    event.preventDefault();
    this.state.props.addComment(event, this.state.props);
    this.setState({ newComment: "" });
  };

  render() {
  
    return (
      <div>
        <span>
          {/* displays user avatar next to username*/}
          <img src={this.state.props.userData.thumbnailUrl} />
          {this.state.props.userData.username}
        </span>
        <div>
          {/* displays big photo */}
          <img src={this.state.props.userData.imageUrl} />
        </div>
        {/* Shows Likes */}
        <div>Likes: {this.state.props.userData.likes} </div>
        {/* Passes down dummyData.user.comment array down to CommentSection*/}
        {this.state.props.userData.comments.map(usercomms => {
          return <CommentSection userComments={usercomms} />;
        })}
      
        <form onSubmit={this.submit}>
          <input
            type="text"
            name="newComment"
            placeholder="Add a comment..."
            value={this.state.newComment}
            onChange={this.changeHandler}
          />
          {/* button triggered by onSubmit on form */}
          <button>Add new Comment</button>
        </form>
      </div>
    );
  }
}

export default PostContainer;
