import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar"
import PostsPage from "./components/PostContainer/PostsPage"
import withAuthenticate from "./components/authentication/withAuthenticate"

const ComponentFromWithAuthenticate = withAuthenticate(<PostsPage />)

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
    </div>
    );
  }
}

export default App;
