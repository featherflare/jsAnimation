import React, { useEffect, useRef } from "react";
import "./Day70.scss";

function Day70() {
  return (
    <div class="frame70">
      <div class="cards">
        <div class="card70" onclick="void(0);">
          <span class="text">Friday</span>
          <span class="number">15</span>
        </div>
        <div class="card70" onclick="void(0);">
          <span class="text">Saturday</span>
          <span class="number">16</span>
        </div>
        <div class="card70" onclick="void(0);">
          <span class="text">Sunday</span>
          <span class="number">17</span>
        </div>
        <div class="card70" onclick="void(0);">
          <span class="text">Monday</span>
          <span class="number">18</span>
        </div>
      </div>
    </div>
  );
}

export default Day70;
