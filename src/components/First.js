import React from "react";
import "./First.css";
import { useState } from "react";

import guru from "./guru.png";
const First = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container">
      <div className="heading-image">
        <img src={guru} alt="Image" /> <h1> &nbsp; Hi Gurudatta, </h1>
      </div>
      <p>
        <strong>Today</strong>
      </p>
      <h1>$19,292</h1>
      <p className="para">Account Balance</p>
      <h3>$4,000</h3>
      <p className="para">Year-to-Date-Contributions</p>
      <h3>$4,000</h3>
      <p className="para">Total Interest</p>
      <div className="dropdown">
        <button className="dropdown-button" onClick={handleButtonClick}>
          I Want to 🔽
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
          </div>
        )}
      </div>
      <div className="transactions">
        <h3>Recent Transactions</h3>
        <hr />
        <p> {new Date().toLocaleDateString()}</p>
        <p>
          <strong>Withdrawal Trasnsfer to Bank-XXX11</strong>
        </p>
        <hr />
        <p> {new Date().toLocaleDateString()}</p>
        <p>
          <strong>Withdrawal Trasnsfer to Bank-XXX11</strong>
        </p>
        <hr />
        <p> {new Date().toLocaleDateString()}</p>
        <p>
          <strong>Withdrawal Trasnsfer to Bank-XXX11</strong>
        </p>
        <hr />
      </div>
    </div>
  );
};

export default First;
