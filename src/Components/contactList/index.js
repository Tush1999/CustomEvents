import React, { Component } from "react";
import SearchBar from "../SearchBar/index";
import ContactShow from "../contactShow/index";
import Form from "../Form/index";
import "./style.css";

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      searchField: "",
    };
    this.initialState = this.state;
  }
  searchItem = (value) => {
    this.setState({ searchField: value });
  };
  handleDelete = (id) => {
    let newList = this.state.list.filter((val) => val.id !== id);
    this.setState({ list: newList });
  };
  addData = (item) => {
    this.setState({ list: [...this.state.list, item] });
  };
  contactData = () => {
    let Data = this.state.list.filter(
      (val) =>
        val.email.includes(this.state.searchField) ||
        val.firstName.includes(this.state.searchField) ||
        val.lastName.includes(this.state.searchField)
    );
    return Data.map((value) => {
      return (
        <div className="inner-flex">
          <ContactShow
            firstName={value.firstName}
            lastName={value.lastName}
            email={value.email}
            id={value.id}
            delete={this.handleDelete}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <div>
          <Form add={this.addData} />
          <SearchBar searchItem={this.searchItem} />
        </div>
        <div className="flex-box">{this.contactData()}</div>;
      </>
    );
  }
}
