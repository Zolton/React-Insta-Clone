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
console.log("Comment sectio below" + props.userComments)
console.log(props.userComments)
  return (
    
    <div> 
        Comment Section rendering 

    </div>
     
    
    
  )
}

export default CommentSection;
