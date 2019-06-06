import React, { Component } from "react";
import { Search } from "../Styling";
import {SearchInsta} from "../Styling";

class SearchBar extends Component {
  render() {
    return (
      <>
        <Search>
          
            <h3>Instagram</h3>
            <input
              name="search"
              onChange={this.props.searchFilter}
              placeholder="search..."
              type="text"
              // value={this.props.newSearch}
            />
         
        </Search>
      </>
    );
  }
}

export default SearchBar;

// lets jsut make it search usernames - totally arbitrary, but a decision needs to be made to start at
//better to keep data on app, bc once searchbar is altered, it'll make post container re-render - search bar searches thru post containers -
// so better to put it on the app that'll be rendering the postcontainers
//if there's something going on between components, go to the parent

//when it changes, call changeHandler from props

//intakes new data, spreads to state search in app.js
