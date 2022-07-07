import React, { useEffect, useRef } from "react";
import "./Day27.scss";

function Day27() {
  return (
    <div class="frame27">
      <div class="list">
        <div class="head">
          <div class="title">Friday</div>
          <div class="subtitle">March 4, 2016</div>
        </div>
        <ul>
          <li>
            <input type="checkbox" id="item-1" name="item-1" />
            <label for="item-1" class="text">
              Create a list
            </label>
            <label for="item-1" class="button"></label>
            <svg width="15px" height="10px" class="checkmark">
              <polyline points="1,5 6,9 14,1" />
            </svg>
          </li>
          <li>
            <input type="checkbox" id="item-2" name="item-2" />
            <label for="item-2" class="text">
              Complete first task
            </label>
            <label for="item-2" class="button"></label>
            <svg width="15px" height="10px" class="checkmark">
              <polyline points="1,5 6,9 14,1" />
            </svg>
          </li>
          <li>
            <input type="checkbox" id="item-3" name="item-3" />
            <label for="item-3" class="text">
              Write some CSS code
            </label>
            <label for="item-3" class="button"></label>
            <svg width="15px" height="10px" class="checkmark">
              <polyline points="1,5 6,9 14,1" />
            </svg>
          </li>
          <li>
            <input type="checkbox" id="item-4" name="item-4" />
            <label for="item-4" class="text">
              Amaze the world
            </label>
            <label for="item-4" class="button"></label>
            <svg width="15px" height="10px" class="checkmark">
              <polyline points="1,5 6,9 14,1" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Day27;
