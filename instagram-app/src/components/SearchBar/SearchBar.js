import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        name={this.props.newSearch}
        onChange={this.props.searchFilter}
        placeholder="type your search here..."
        type="text"
      />
    );
  }
}

// lets jsut make it search usernames - totally arbitrary, but a decision needs to be made to start at
//better to keep dat aon app, bc once searchbar is altered, it'll make post container re-render - search bar searches thru post containers - so better to put it on the app that'll be rendering the postcontainers
//if there's something going on between components, go to the parent

//when it hcanges, call changeHandler from props

//intakes new data, spreads to state search in app.js

export default SearchBar;
