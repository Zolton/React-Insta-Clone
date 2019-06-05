// import React from "react";
// import App from "../../App";
// import CommentSection from "../CommentSection/CommentSection";

// Maps thru each object, sending the object.comments array
// down to Comment section



class PostContainer extends React.Component {
  
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
        {this.props.filteredPosts.length === 0 ? this.props.data.map(post => 
        <>
              
        <header>
            <img src={post.thumbnailUrl} alt="thumbnail"/>
            <h3>{post.username}</h3>
        </header>

        <img src={post.imageUrl} alt={post.id}/>

        <section className="likebar">
            {post.likes} likes
        </section>

        <CommentSection 
            comments={post.comments}
            timestamp={post.timestamp}
        />

        </>
        )} : {this.props.data.map(post => {
          return (
              <>
              
              <header>
                  <img src={post.thumbnailUrl} alt="thumbnail"/>
                  <h3>{post.username}</h3>
              </header>

              <img src={post.imageUrl} alt={post.id}/>

              <section className="likebar">
                  {post.likes} likes
              </section>

              <CommentSection 
                  comments={post.comments}
                  timestamp={post.timestamp}
              />

              </>
          )
      })}
    
  </div>
      // grab comments section, pass it along as an object to comment section!
      //hell, add a timestamp too!  So easy!


//export default PostContainer;

import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends Component {
  render() {
    return (
      <div className="post-container">
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(post => {
              return (
                <>
                  <header>
                    <img src={post.thumbnailUrl} alt="thumbnail" />
                    <h3>{post.username}</h3>
                  </header>

                  <img src={post.imageUrl} alt={post.id} />

                  <section className="likebar">{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
            })
          : this.props.filteredPosts.map(post => {
              return (
                <>
                  <header>
                    <img src={post.thumbnailUrl} alt="thumbnail" />
                    <h3>{post.username}</h3>
                  </header>

                  <img src={post.imageUrl} alt={post.id} />

                  <section className="likebar">{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
            })}
      </div>
    );
  }
}

export default PostContainer;
