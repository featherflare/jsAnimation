import React, { useEffect, useRef } from "react";
import "./Day19.scss";

function Day19() {
  return (
    <div class="frame19">
      <div class="center">
        <input type="radio" id="check-1" name="rd" />
        <label for="check-1" class="circle" id="c1"></label>
        <input type="radio" id="check-2" name="rd" />
        <label for="check-2" class="circle" id="c2"></label>
        <input type="radio" id="check-3" name="rd" />
        <label for="check-3" class="circle" id="c3"></label>
        <div class="active"></div>
        <div class="bg"></div>
      </div>
    </div>
  );
}

export default Day19;
