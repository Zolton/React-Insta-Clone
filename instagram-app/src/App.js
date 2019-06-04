import React from 'react';
import './App.css';
import dummyData from "./dummy-data"
import PostContainer from './components/PostContainer';


// <PostContainer userData={this.state.data.map(e=>e.comments)} />
class App extends React.Component {
  state = {
    data: dummyData
  }

  render (){
    // Just sends the dummyData out to PostContainer
    // console.log(this.state.dummyData[0])
    //userData={this.state.dummyData.map(e=>e.comments)}


    console.log("data below" + this.state.data)
    console.log(this.state.data)
    return (
      <div>
      <div>App page rendering</div>

   
      {this.state.data.map(user => {
 return <PostContainer 
          userData={user} />
  })}
      
      
      </div>
  )
}

}

export default App;
