import React from "react";

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {

    render() {
        if (localStorage.getItem("loggedIn")) {
          return (
          <PostsPage />
          )
        }
        else {
          return <LoginPage />
        }
    }
  
}

export default withAuthenticate;
