import React, { useEffect, useRef } from "react";
import "./Day30.scss";

function Day30() {
  return (
    <div class="frame30">
      <div class="circle"></div>
      <div class="center">
        <svg width="400px" height="65px" viewBox="0 0 400 65" class="line">
          <path d="M0,4.67941475 C0,4.67941475 42.5049504,21.0558251 95.0896109,21.0558243 C147.674271,21.0558235 149.896403,2 196.011077,2 C242.125751,2 242.386923,58.3217419 200.000004,58.3217392 C157.613085,58.3217365 163.18433,13.5133498 212.755329,13.5133498 C262.326328,13.5133498 284.162205,38.9236796 335.140774,38.9236794 C386.119343,38.9236791 399.999996,30.1608696 399.999996,30.1608696"></path>
        </svg>
      </div>
      {/* <div class="square"></div> */}
    </div>
  );
}

export default Day30;
