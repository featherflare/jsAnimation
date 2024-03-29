import React, { useEffect, useRef } from "react";
import "./Day55.scss";

function Day55() {
  return (
    <div class="frame55">
      <div class="thermostat" onclick="void(0);">
        <div class="ring">
          <div class="bottom_overlay"></div>
        </div>
        <div class="control">
          <div class="indicator"></div>
          <div class="temp_outside">23°</div>
          <div class="temp_room">
            19<span>°</span>
          </div>
          <div class="temp_room two">
            20<span>°</span>
          </div>
          <div class="room">Bedroom</div>
        </div>
      </div>
    </div>
  );
}

export default Day55;
