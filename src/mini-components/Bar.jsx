import React, { useState } from "react";
import "../styles/bar_styles.css";

export const Bar = () => {
  const [activeLines, setActiveLines] = useState(false);

  const animateBars = () => {
    setActiveLines(!activeLines);
  };

  return (
    <div
      className={`bars__menu ${activeLines ? "active" : ""}`}
      onClick={animateBars}
    >
      <span
        className={`line1__bars-menu ${
          activeLines ? "activeline1__bars-menu" : ""
        }`}
      ></span>
      <span
        className={`line2__bars-menu ${
          activeLines ? "activeline2__bars-menu" : ""
        }`}
      ></span>
      <span
        className={`line3__bars-menu ${
          activeLines ? "activeline3__bars-menu" : ""
        }`}
      ></span>
    </div>
  );
};
