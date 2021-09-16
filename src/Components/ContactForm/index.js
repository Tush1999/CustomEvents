import React, { Component } from "react";
import Form from "../Form/index";
import contactList from "../contactList/index";
import "./style.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      searchField: "",
    };
    this.initialState = this.state;
  }
  addData = (item) => {
    this.setState({ list: [...this.state.list, item] });
  };
  updateList = (newList) => {
    this.setState({ list: newList });
  };

  render() {
    return (
      <React.Fragment>
        <div className="search-div"> </div>
        <Form add={this.addData} />
        <contactList data={this.state.list} updateList={this.updateList} />
      </React.Fragment>
    );
  }
}
