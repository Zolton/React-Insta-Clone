import React from "react";

class Login extends React.Component {

  state ={
    loggedIn: false,
}
  toggle = e => {
    e.preventDefault();
    if (localStorage.getItem("loggedIn")) {
      localStorage.removeItem("loggedIn");
      this.setState({
        loggedIn: false
      });
      // check if loggedIn is in local storage, if so, take it out
      //and set it to false
    } else {
      localStorage.setItem("loggedIn", true);
      // passing in key name, value
      // otherwise, set it to true if its false
      this.setState({
        loggedIn: true
      });
    }
  };

  render() {
    return (
      <>
        <form>
          <input 
          type="text" 
          placeholder="username goes here" 
          name="username" 
          />
          <input 
          type="text" 
          placeholder="password goes here" 
          name="password" 
          />
          <button onClick={this.toggle}>Click me to login</button>
        </form>
      </>
    );
  }
}

export default Login
