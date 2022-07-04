import React, { useEffect, useRef } from "react";
import "./Day16.scss";

function Day16() {
  return (
    <div class="frame16">
      <div class="blobb"></div>
      <div class="blobb-ring"></div>
      <svg class="octagon">
        <polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
      </svg>
      <div class="octa-sparkles">
        <div class="sparkle s1"></div>
        <div class="sparkle s2"></div>
        <div class="sparkle s3"></div>
        <div class="sparkle s4"></div>
      </div>
      <svg class="triangle">
        <polygon points="53,0 106,90 0,90" />
      </svg>
      <div class="triangle-sparkles">
        <div class="sparkle s1"></div>
        <div class="sparkle s2"></div>
        <div class="sparkle s3"></div>
      </div>
    </div>
  );
}

export default Day16;
