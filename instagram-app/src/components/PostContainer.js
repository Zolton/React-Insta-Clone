import React from "react";
import App from "../App";
import CommentSection from "./CommentSection";

// cuts dummyData down to just comments and sends it to CommentSection

function PostContainer(props) {
    console.log(props.dataPost.map(e=>e.comments))
//   console.log("props are " + props);
//   console.log(props)
//   console.log(props.commentsArray)
//   console.log(props.commentsArray[0])
 //console.log(props.commentsArray.map(e=>e))
//   test = props.data.map(e=>props.data.comments)
//   console.log("test is " + test)
//<CommentSection userComments={props.data.map(e=>e.comments)} />
  return (
    <div>
      <div>Post Container rendering</div>
      <CommentSection dataComment={props.dataPost.map(e=>e.comments)} />
    </div>
  );
}

export default PostContainer;
