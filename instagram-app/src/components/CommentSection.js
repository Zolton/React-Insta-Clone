import React from "react";
import App from "../App";
import PostContainer from "./PostContainer";

//sends dummyData.comments.username + dummyData.comments.text
//back to App
 // {props.userComments.text[0]}

function CommentSection(props) {
  console.log("props are " + props.userComments);
  console.log(props.userComments)
  console.log(props.userComments.map(e=>e.text));
  return (
    <div>
      <div>Comment Section rendering</div>
        {props.userComments.map(e=>e.text)}
    </div>
  );
}

export default CommentSection;
