import React from 'react';
import './App.css';
import dummyData from "./dummy-data"
import PostContainer from './components/PostContainer';


class App extends React.Component {
  state = {
    dummyData: dummyData
  }

  render (){
    // Just sends the dummyData out to PostContainer
    console.log(this.state.dummyData)
    return (
      <div>
      <div>App page rendering</div>
      <PostContainer data={this.state.dummyData} />
      </div>
  )
}

}

export default App;
