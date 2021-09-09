import React, { Component } from "react";

export default class displayList extends Component {
  handleDelete = (id) => {
    this.props.delete(id);
  };
  render() {
    return (
      <>
        <img
          className="user"
          src="https://www.freeiconspng.com/uploads/computer-user-icon-28.png"
          alt="Computer User Icon Svg"
        />
        <div className="content">
          <p className="">
            {this.props.firstName} {this.props.lastName}
          </p>
          <p> {this.props.email}</p>
        </div>
        <button
          className="remove-btn"
          onClick={() => this.handleDelete(this.props.id)}
        >
          REMOVE
        </button>
      </>
    );
  }
}
