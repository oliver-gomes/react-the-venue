import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class TimeUntil extends Component {
  state = {};

  render() {
    return (
      <Fade left>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event Starts In</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">23</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">2</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">20</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">40</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default TimeUntil;
