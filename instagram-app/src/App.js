import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar"

class App extends React.Component {
  state = {
    data:[],
    search: "",
    filteredPosts: []
  };
 
//BOOM! No more constructor and super
// Why? Because syntactic sugar in new react - constructor props + super props
//is just assumed!

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  searchfilter = e => {
      const filtered = this.state.data.filter(post=>post.username.toLowerCase().includes(e.target.value.toLowerCase()))
//check if username is equal to value, toLowercase is just in case of aberations innames
    this.setState({filteredPosts: filtered})
    //when a hit results, send it to the state above, filteredPosts


  }
  // const newFilter = this.state.data.filter(post => 
    //   post.username === this.state.search
    // )
  //wanna filter our data ^^
  //take this.state.data, and instead of mapping it, FILTER it
  //go over each surface level object, assign it to post, and check if - 
  //filter posts, only show usersnames equal to the search
  //remember filter gets RID of things, opposite of map

  render() {
    // maps thru dummyData, sends each object (3) to PostContainer as
    // its own set of data

    return (
      <div>
        <SearchBar 
        changeHandler={this.props.changeHandler} 
        newSearch={this.state.search}
        searchfilter={this.searchFilter}
        />
        <PostContainer 
        data={this.state.data} 
        filteredPosts = {this.state.filteredPosts}
        searchFilter={this.searchFilter}
        />
        {/* {this.state.data.map(user => {
          return <PostContainer data={user} addComment={this.addComment} />;
        })} */}
      </div>
    );
  }
}

export default App;
