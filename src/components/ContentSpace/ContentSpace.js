import React, { Component } from "react";
import TableContent from "./../TableContent/TableContent";
import s from "./ContentSpace.module.css";
// import { BsReverseLayoutSidebarReverse } from "react-icons/bs";

export default class ContentSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editIdx: -1,
      headers: [],
    };
  }

  handleRemove = (i) => {
    this.setState((state) => ({
      data: state.data.filter((row, j) => j !== i),
    }));
  };

  startEditing = (i) => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState((state) => ({
      data: state.data.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      ),
    }));
  };

  render() {
    return (
      <>
        <p>Файл: {this.props.filename}</p>
        <p>количество записей: {this.props.data.length}</p>
        <TableContent
          className={s.table}
          handleRemove={this.handleRemove}
          startEditing={this.startEditing}
          editIdx={this.state.editIdx}
          stopEditing={this.stopEditing}
          handleChange={this.handleChange}
          data={this.props.data}
          header={this.state.headers}
        />
      </>
    );
  }
}
