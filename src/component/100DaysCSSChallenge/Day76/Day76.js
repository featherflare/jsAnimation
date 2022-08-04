import React, { useEffect, useRef } from "react";
import "./Day76.scss";

function Day76() {
  return (
    <div class="frame76">
      <div class="center">
        <div class="hiddenKey">
          <form class="inputWrapper">
            <input
              type="text"
              class="input"
              placeholder='Enter "password"'
              pattern="[pP]assword"
              required
            />
            <div class="backSide">Secret Key</div>
          </form>
          <div class="keyWrapper">MD5-SU3-CX8</div>
        </div>
      </div>
    </div>
  );
}

export default Day76;
