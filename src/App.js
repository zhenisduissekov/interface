import React, { Component } from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import ContentSpace from "./components/ContentSpace/ContentSpace";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import API from "./utils/API";
// import { BsReverseLayoutSidebarReverse } from "react-icons/bs";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fileList: [],
      filename: "",
      showSidebar: false,
      data: [],
      updateScreen: false,
    };
    this.sidebarToggle = this.sidebarToggle.bind(this);
    this.request_data = this.request_data.bind(this);
  }

  sidebarToggle = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  chooseFile = (filename) => {
    if (window.confirm("Открыть файл " + filename + "?")) {
      this.setState({ filename: filename, data: [] });
      this.request_data(filename);
    }
    this.sidebarToggle();
  };

  async componentDidMount() {
    try {
      let results = await API.get("/listAllFilesInDir");
      this.setState({ fileList: results.data });
    } catch (e) {
      console.log("Axios request failed getting list of files");
    }
  }

  request_data(filename) {
    API.get("/getFileContentJSON/" + filename)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  request_reset() {
    console.log("Request reset");
    API.get("/prometheus_reset")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.filename !== nextState.filename ||
      this.state.showSidebar !== nextState.showSidebar ||
      this.state.data !== nextState.data
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div className={s.App}>
        <header className={s.App_header}>
          <Header
            sidebarToggle={this.sidebarToggle}
            button={this.request_reset}
          />
        </header>
        <div
          className={
            this.state.showSidebar
              ? `${s.App_nav_menu} ${s.active}`
              : `${s.App_nav_menu}`
          }
        >
          <Sidebar list={this.state.fileList} choose={this.chooseFile} />
        </div>
        <content className={s.App_content}>
          <ContentSpace filename={this.state.filename} data={data} />
        </content>
        <footer className={s.App_footer}>
          <Footer />
        </footer>
      </div>
    );
  }
}
