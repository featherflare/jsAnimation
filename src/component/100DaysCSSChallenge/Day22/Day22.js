import React, { useEffect, useRef } from "react";
import "./Day22.scss";

function Day22() {
  return (
    <div class="frame22">
      <div class="center">
        <div class="headline small">your daily</div>
        <div class="headline">progress</div>
        <div class="circle-big">
          <div class="text">
            2758
            <div class="small">kcal</div>
          </div>
          <svg>
            <circle cx="57" cy="57" r="52" class="bg" />
            <circle cx="57" cy="57" r="52" class="progress" />
          </svg>
        </div>
        <div class="row">
          <div class="circle-small">
            <div class="text">
              8563
              <div class="small">steps</div>
            </div>
            <svg>
              <circle cx="40" cy="40" r="37" class="bg" />
              <circle cx="40" cy="40" r="37" class="progress one" />
            </svg>
          </div>
          <div class="circle-small">
            <div class="text">
              6.2
              <div class="small">km</div>
            </div>
            <svg>
              <circle cx="40" cy="40" r="37" class="bg" />
              <circle cx="40" cy="40" r="37" class="progress two" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day22;
