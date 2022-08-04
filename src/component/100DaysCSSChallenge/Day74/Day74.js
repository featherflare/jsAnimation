import React, { useEffect, useRef } from "react";
import "./Day74.scss";

function Day74() {
  return (
    <div class="frame74">
      <div class="center">
        <div class="pagination">
          <input type="radio" name="nav" id="input-1" class="input" checked />
          <input type="radio" name="nav" id="input-2" class="input" />
          <input type="radio" name="nav" id="input-3" class="input" />
          <input type="radio" name="nav" id="input-4" class="input" />
          <label for="input-1" class="button button-1">
            1
          </label>
          <label for="input-2" class="button button-2">
            2
          </label>
          <label for="input-3" class="button button-3">
            3
          </label>
          <label for="input-4" class="button button-4">
            4
          </label>
        </div>
      </div>
    </div>
  );
}

export default Day74;
