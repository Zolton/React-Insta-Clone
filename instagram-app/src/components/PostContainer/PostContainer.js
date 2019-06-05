import React from "react";
import App from "../../App";
import CommentSection from "../CommentSection/CommentSection";

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

      // <div>
      //   <span>
      //     {/* displays user avatar next to username*/}
      //     <img src={this.state.props.userData.thumbnailUrl} />
      //     {this.state.props.userData.username}
      //   </span>
      //   <div>
      //     {/* displays big photo */}
      //     <img src={this.state.props.userData.imageUrl} />
      //   </div>
      //   {/* Shows Likes */}
      //   <div>Likes: {this.state.props.userData.likes} </div>
      //   {/* Passes down dummyData.user.comment array down to CommentSection*/}
      //   {this.state.props.userData.comments.map(usercomms => {
      //     return <CommentSection userComments={usercomms} />;
      //   })}

      //   <form onSubmit={this.submit}>
      //     <input
      //       type="text"
      //       name="newComment"
      //       placeholder="Add a comment..."
      //       value={this.state.newComment}
      //       onChange={this.changeHandler}
      //     />
      //     {/* button triggered by onSubmit on form */}
      //     <button>Add new Comment</button>
      //   </form>
      // </div>
    );
  }
}

export default PostContainer;
