import React from "react";
import "./Third.css";

const Third = () => {
  return (
    <div className="container">
      <h1>Retirement Stratergy</h1>
      <p>Employee Contribution</p>
      <progress value="12" max="20">
        <span>12%</span>
      </progress>
      &nbsp;&nbsp; 12%
      <p>Retirement Age</p>
      <progress value="65" max="100">
        <span>  50%</span>
      </progress>
      &nbsp;&nbsp; 65%
      <p>Employer Contribution &nbsp; &nbsp; &nbsp; &nbsp; 8.4%</p>
      <p>Interest Rate &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5%</p>
      <button type="submit">Update</button>
      <p className="blue-text">View Help Docs ▶️</p>
      <div className="card">
        <p>
          Are you considering a <br /> <strong>Housing Advance ? </strong>
        </p>
        <p>Limited time reduced interest</p>{" "}
        <p className="blue-text">Learn More▶️</p>
      </div>
    </div>
  );
};

export default Third;
