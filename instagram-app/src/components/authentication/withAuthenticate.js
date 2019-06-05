import React from "react";
import LoginPage from "../Login/Login"

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    render() {
      if (localStorage.getItem("loggedIn")) {
        return <PostsPage />;
      } else {
        return <LoginPage />;
      }
    }

    render() {
        if (this.state.loggedIn === true) {
      return <PostsPage />
        }
        else {
            return <LoginPage />
        }
    }
  
}

export default withAuthenticate;
