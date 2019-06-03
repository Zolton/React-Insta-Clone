import React from 'react';
import './App.css';
import dummyData from "./dummy-data"
import PostContainer from './components/PostContainer';


class App extends React.Component {
  state = {
    data: dummyData
  }

  render (){
    // Just sends the dummyData out to PostContainer
    // console.log(this.state.dummyData[0])
    //userData={this.state.dummyData.map(e=>e.comments)}

    return (
      <div>
      <div>App page rendering</div>

      {this.state.data.map(post => {
      return <PostContainer post={post} key={post.id} />
      })}
  
      
      
      </div>
  )
}

}

export default App;
