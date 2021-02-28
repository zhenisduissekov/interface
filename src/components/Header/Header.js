import React, { Component } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import s from "./Header.module.css";

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
            <button className={s.btn} onClick={this.props.button}>
              Reset Prometheus
            </button>
          </IconContext.Provider>
          <div className={s.clock}>{this.state.date.toLocaleTimeString()}</div>
        </div>
      </>
    );
  }
}
