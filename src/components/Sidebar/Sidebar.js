import React, { Component } from "react";
import s from "./Sidebar.module.css";
import * as BsIcons from "react-icons/bs";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: props.list,
    };
  }

  render() {
    return (
      <>
        <nav className={s.nav_menu}>
          <h1>FILES</h1>
          <ul className={s.nav_menu_items}>
            {this.props.list.map((item) => (
              <li
                key={item}
                className={s.nav_text}
                onClick={() => this.props.choose(item)}
              >
                <BsIcons.BsDot />
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }
}
