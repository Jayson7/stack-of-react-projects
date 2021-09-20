import React from "react";

import "./nav.css";
export default function Nav() {
  return (
    <div>
      <div className="navbar">
        <div className="logo"> DEVELOPER </div>
        <nav>
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/"> Contact </a>
            </li>
            <li>
              <a href="/"> Profile </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
