import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import s from "./TableContent.module.css";

export default class TableContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
    };
  }

  createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  render() {
    const rows = [
      this.createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
      this.createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      this.createData("Eclair", 262, 16.0, 24, 6.0),
      this.createData("Cupcake", 305, 3.7, 67, 4.3),
      this.createData("Gingerbread", 356, 16.0, 49, 3.9),
    ];

    return (
      <>
        <TableContainer component={Paper}>
          <Table className={s.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>TARGETS</TableCell>
                <TableCell>JOB</TableCell>
                <TableCell>NAME</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.targets[0]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.labels.job}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.labels.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    up/down
                  </TableCell>
                  <TableCell component="th" scope="row">
                    edit
                  </TableCell>
                  <TableCell component="th" scope="row">
                    remove
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

{
  /* <TableContainer>
<Table>
  <TableHead>
    <TableRow>
      {this.props.header.map((x, i) => (
        <TableCell id={i} key={"thc-${i}"}>
          {x}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
  <TableBody>
    {this.props.data.map((x, i) =>
      row(
        x,
        i
        header,
        handleRemove,
        startEditing,
        editIdx,
        handleChange,
        stopEditing
      )
    )}
  </TableBody>
</Table>
</TableContainer> */
}
