import React from "react";
import App from "../App";
import CommentSection from "./CommentSection";

// Maps thru each object, sending the object.comments array
// down to Comment section

function PostContainer(props) {
  console.log("post container below" + props.userData);
  console.log(props.userData);
  return (
    <div>
      {props.userData.comments.map(usercomms => {
        return <CommentSection userComments={usercomms} />;
      })}
    </div>
  );
}

export default PostContainer;
