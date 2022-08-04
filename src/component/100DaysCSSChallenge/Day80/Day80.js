import React, { useEffect, useRef } from "react";
import "./Day80.scss";

function Day80() {
  return (
    <div class="frame80">
      <div class="boxes">
        <div class="box dark" onclick="void(0);">
          <span class="text">First</span>
        </div>
        <div class="box orange" onclick="void(0);">
          <span class="text">Second</span>
        </div>
        <div class="box dark" onclick="void(0);">
          <span class="text">Third</span>
        </div>
        <div class="box orange" onclick="void(0);">
          <span class="text">Fourth</span>
        </div>
      </div>
    </div>
  );
}

export default Day80;
