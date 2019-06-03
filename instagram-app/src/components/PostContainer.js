import React from "react";
import App from "../App";
import CommentSection from "./CommentSection";

// cuts dummyData down to just comments and sends it to CommentSection

function PostContainer(props) {
  console.log("props are " + props);
  console.log(props)
  console.log(props.data[0])
  console.log(props.data[0].comments[0])
  console.log("map is " + props.data.map(e=>e.comments))
  console.log(props.data.map(e=>e.comments))
//   test = props.data.map(e=>props.data.comments)
//   console.log("test is " + test)
  return (
    <div>
      <div>Post Container rendering</div>
      <CommentSection userComments={props.data.map(e=>e.comments)} />
    </div>
  );
}

export default PostContainer;
