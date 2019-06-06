import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import {UserHeader} from "../Styling";
import {UserImg}  from "../Styling";
import {MainPost}  from "../Styling";

class PostContainer extends Component {


  state = {
    count: 0
  }

  // Kinda works?  Needs some kind of changeHandler to ensure only
  // 1 post is liked instead of all of them.
  increase = (count) => {
    this.setState({count: count+1 })
  }

  render() {
    return (
      //doesn't matter if you map in app or here - style, baby!
      //mapping the data AND formatting it at the same time.  Just wild stuff
      //map(post - > post becomes the starter for everythign!!
      // map over everything, return "post" for each object - so we can
      // just pull off surface level info right here!
      // It's so BONKERS how much common sense this is!
      //this.props works because constructore is auto included! ES6 goodness

      <div className="post-container">
        {this.props.data.map(post => {
         
          return (
            <>
              <UserHeader>
                <UserImg src={post.thumbnailUrl} alt="thumbnail" />
                <h3>{post.username}</h3>
              </UserHeader>

              <MainPost type="main" src={post.imageUrl} alt={post.id} />

              <section className="likebar" onClick={this.increase}>{post.likes + this.state.count} likes</section>

              <CommentSection
                comments={post.comments}
                timestamp={post.timestamp}
              />
            </>
          );
        })}
      </div>
      // grab comments section, pass it along as an object to comment section!
      //hell, add a timestamp too!  So easy!
    );
  }
}

export default PostContainer;
