import React from "react";
import App from "../App";
import PostContainer from "./PostContainer";

//sends dummyData.comments.username + dummyData.comments.text
//back to App
// {props.userComments.text[0]}
//  {props.comment.map(e => {
//     return e.username + " " + e.text
//     })}

function CommentSection(props) {
  // console.log(props.dataComment)
  //   console.log(props.userComments[0])
  //   console.log("props are " + props.userComments);
  //   console.log(props.userComments[0].text)
  //   console.log(props.userComments.map(e=>e.text));
  console.log("Comment section below" + props.userComments);
  console.log(props.userComments.username);
  // {props.userComments.map(nameText => {
  //     return nameText.username
  //   })}.map(nameText => nameText.text)}
  //.map(nameText => nameText.username)}

  //{props.userComments.map(nameText2 => nameText2.text)}
  //<input
  //  type="text"
  // placeholder="Enter text here"/>
  console.log("props.usercomments " + props.userComments);
  console.log(props.userComments);

  return (
    <div>
      <div>Username: {props.userComments.username}</div>
      <div>Comment: {props.userComments.text}</div>
      
    </div>
  );
}

export default CommentSection;
