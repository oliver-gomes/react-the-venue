import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header-footer/Header";
//import Featured from "./components/featured/Featured.js";
import SideDrawer from "./components/header-footer/SideDrawer";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
      </div>
    );
  }
}

export default App;
