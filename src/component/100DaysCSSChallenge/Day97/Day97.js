import React, { useEffect, useRef } from "react";
import "./Day97.scss";

function Day97() {
  return (
    <div class="frame97">
      <div class="puppet">
        <div class="head"></div>
        <div class="body">
          <div class="arm arm-left">
            <div class="upper">
              <div class="lower"></div>
            </div>
          </div>
          <div class="arm arm-right">
            <div class="upper">
              <div class="lower"></div>
            </div>
          </div>
          <div class="leg leg-left">
            <div class="upper">
              <div class="lower"></div>
            </div>
          </div>
          <div class="leg leg-right">
            <div class="upper">
              <div class="lower"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day97;
