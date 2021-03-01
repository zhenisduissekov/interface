import React, { Component } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import s from "./Header.module.css";
// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <>
        <div className={s.navbar}>
          <IconContext.Provider
            value={{ style: { fontSize: "40px", color: "rgb(0, 123, 255)" } }}
          >
            <FaIcons.FaBars onClick={this.props.sidebarToggle} />
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={this.props.button1}
            >
              SAVE/OVERWRITE
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.button2}
            >
              DELETE
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.button3}
            >
              Reset Prometheus
            </Button>
          </IconContext.Provider>
          <div className={s.clock}>{this.state.date.toLocaleTimeString()}</div>
        </div>
      </>
    );
  }
}
