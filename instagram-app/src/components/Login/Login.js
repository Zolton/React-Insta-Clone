import React from "react";

class Login extends React.Component {
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
          <button>Click me to login</button>
        </form>
      </>
    );
  }
}

export default Login
