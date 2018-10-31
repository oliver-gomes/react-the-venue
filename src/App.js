import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header-footer/Header";
import Featured from "./components/featured/Featured";
import VenueInfo from "./components/venue-info/VenueInfo";
import Highlights from "./components/highlights/Highlights";
import Pricing from "./components/pricing/Pricing";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
      </div>
    );
  }
}

export default App;
