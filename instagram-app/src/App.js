import React from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage"
import withAuthenticate from "./components/authentication/withAuthenticate"
import Login from "./components/Login/Login";

const ComponentFromWithAuthenticate = withAuthenticate(<PostsPage />)

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Login />
        <ComponentFromWithAuthenticate />
    </div>
    );
  }
}

export default App;
