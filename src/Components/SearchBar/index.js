import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchField: "" };
  }
  handleSearch = (e) => {
    this.props.searchItem(e.target.value);
  };
  render() {
    return (
      <input
        type="search"
        placeholder="search here..."
        onChange={this.handleSearch}
      />
    );
  }
}
