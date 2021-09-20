import React, { Component } from "react";
import "./sec3.css";
export default class Section3 extends Component {
  render() {
    return (
      <div>
        <div className="gallery">
          <div className="navigator ">
            <ul>
              <li>
                <a href="/">FRONTEND</a>
              </li>
              <li>
                <a href="/">BACKGROUND</a>
              </li>
              <li>
                <a href="/">RESTAPI</a>
              </li>
              <li>
                <a href="/">DESIGN</a>
              </li>
              <li>
                <a href="/">DATABASE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
