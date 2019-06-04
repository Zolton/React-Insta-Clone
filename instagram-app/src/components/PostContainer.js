import React from "react";
import App from "../App";
import CommentSection from "./CommentSection";

// cuts dummyData down to just comments and sends it to CommentSection

// class PostContainer extends React.Component {
//     constructor(props) {
//         super(props);
//         {props.post.map(comment => {
//     return <CommentSection comment={comment} />
//     })}
//     }

//<div>Post Container rendering</div>
//{props.post.map(e => {
//
//})}

// render() {

//   console.log(props.dataPost)
//   console.log("props are " + props);
//   console.log(props)
//   console.log(props.commentsArray)
//   console.log(props.commentsArray[0])
//console.log(props.commentsArray.map(e=>e))
//   test = props.data.map(e=>props.data.comments)
//   console.log("test is " + test)
//<CommentSection userComments={props.data.map(e=>e.comments)} />

// {props.post.map(comment => {
//     return <CommentSection comment={comment} />
//     })}

// <CommentSection userComments={props.userData.map(e=>e)} />
//<CommentSection userComments={puppies} />

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
