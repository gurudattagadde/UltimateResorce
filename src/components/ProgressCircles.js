import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ value, maxValue,text }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div style={{ width: "80px", height: "auto" }}>
      <CircularProgressbar
        value={percentage}
        text={`${value}%`}
        styles={buildStyles({
          textSize: "20px",
          textColor: "#000",
          pathColor: "#007bff",
          trailColor: "#bac6f0",
        })}
      />
      <br />
      <strong>{text}</strong>
    </div>
  );
};

export default CircularProgressBar;
