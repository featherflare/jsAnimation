import React from "react";
import "./ButtonBorderMoving.css";

export default function ButtonAni() {
  return (
    <div>
      <div className="buttonBG">
        <a className="buttonMove" href="/#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Button
        </a>
      </div>
    </div>
  );
}
