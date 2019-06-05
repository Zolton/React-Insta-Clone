import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends Component {
  
  // increaseLikes = e => {
  //   preventDafault();
  //   return ({post.likes + 1}
  // }

  state = {
    count: 0
  }

  increase = (prevState, count) => {
    this.setState({count: prevState + 1 })
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
              <header>
                <img src={post.thumbnailUrl} alt="thumbnail" />
                <h3>{post.username}</h3>
              </header>

              <img src={post.imageUrl} alt={post.id} />

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
