import React, { Component } from "react";
import SearchBar from "../SearchBar/index";
import DisplayList from "../displayList/index";
import "./style.css";

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = { searchField: "" };
  }
  searchItem = (value) => {
    this.setState({ searchField: value });
  };
  handleDelete = (id) => {
    let newList = this.props.data.filter((val) => val.id !== id);
    this.props.updateList(newList);
  };

  render() {
    let filteredData = this.props.data.filter(
      (val) =>
        val.email.includes(this.state.searchField) ||
        val.firstName.includes(this.state.searchField) ||
        val.lastName.includes(this.state.searchField)
    );
    var contactData = filteredData.map((value) => {
      return (
        <div className="inner-flex">
          <DisplayList
            firstName={value.firstName}
            lastName={value.lastName}
            email={value.email}
            id={value.id}
            delete={this.handleDelete}
          />
        </div>
      );
    });
    return (
      <>
        <div>
          <SearchBar searchItem={this.searchItem} />
        </div>
        <div className="flex-box">{contactData}</div>;
      </>
    );
  }
}
