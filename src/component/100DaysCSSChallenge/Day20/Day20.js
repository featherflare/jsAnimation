import React, { useEffect, useRef } from "react";
import "./Day20.scss";

function Day20() {
  return (
    <div class="frame20">
      <input type="checkbox" id="cb" />
      <label for="cb" class="button">
        Send mail
      </label>
      <label for="cb" class="button reset">
        Reset
      </label>
      <div class="circle"></div>
      <div class="circle-outer"></div>
      <svg class="icon mail">
        <polyline points="119,1 119,69 1,69 1,1"></polyline>
        <polyline points="119,1 60,45 1,1 119,1"></polyline>
      </svg>
      <svg class="icon plane">
        <polyline points="119,1 1,59 106,80 119,1"></polyline>
        <polyline points="119,1 40,67 43,105 69,73"></polyline>
      </svg>
    </div>
  );
}

export default Day20;
