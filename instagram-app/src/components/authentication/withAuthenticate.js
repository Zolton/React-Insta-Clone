import React from "react";



const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
      state ={
          loggedIn: false,
      }
      componentDidMount() {
        if (localStorage.getItem("loggedIn")) {
            localStorage.removeItem("loggedIn");
            this.setState({
              loggedIn: false
            });
            // check if loggedIn is in local storage, if so, take it out
            //and set it to false
      } else {
        localStorage.setItem("loggedIn", true);
        this.setState({
          loggedIn: true
        });
      }
        // passing in key name, value
        // otherwise, set it to true if its false
    }
    
    render() {
        if (this.state.loggedIn === true) {
      return <PostsPage />
        }
        else {
            <LoginPage />
        }
    }
  
}

export default withAuthenticate;
