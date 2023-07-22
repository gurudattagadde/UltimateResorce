// ThreeColumnLayout.js
import React from "react";
import "./styles.css";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
const ThreeColumnLayout = () => {
  return (
    <div className="content">
      <div className="column1">
        <First />
      </div>
      <div className="column">
        <Second />
      </div>
      <div className="column">
        <Third />
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
