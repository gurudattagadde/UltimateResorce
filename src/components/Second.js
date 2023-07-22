import React from "react";
import "./Second.css";
import { BarController } from "chart.js";
import Chart from "./BarChart";
import { useState } from "react";
import ProgressCircles from "./ProgressCircles";
const Second = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="container">
      <p className="blue-text">Retirement Income</p>
      <h1>Starting Year 2056</h1>
      <div className="three-columns">
        <div>
          <h3>$300,000</h3>
          <p>My Goal</p>
          <hr className="bluehr" />
        </div>

        <div>
          <h3>59%</h3>
          <p>Goal Achieved</p>
          <hr className="bluehr" />
        </div>
        <div>
          <h3>$300 </h3>
          <p> Monthly Income</p>
          <hr className="bluehr" />
        </div>
      </div>
      <h3>Contributions Overtime</h3>
      <Chart />
      <h3>How do I compare to my peers?</h3>
      <p>Those Numbers reperesnt the current goal to achieve</p>
      <div className="two-columns">
        <div className="paragraph-container">
          <p>
            <strong>Age:</strong> Under 30🔻
          </p>
          <br />
          <p>
            <strong>Salary:</strong> k 20 -k 30🔻
          </p>
          <br />
          <p>
            <strong>Gender:</strong> Male 🔻
          </p>
        </div>
        <div className="progress-circles-wrapper">
          <ProgressCircles value={65} maxValue={100} text="Average" />
          <ProgressCircles value={95} maxValue={100} text="Top" />
          <ProgressCircles value={59} maxValue={100} text="Me" />
        </div>
      </div>
    </div>
  );
};

export default Second;
