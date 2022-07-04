import React, { useEffect, useRef } from "react";
import "./Day17.scss";

function Day17() {
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame17">
      <div class="stripes">
        <Repeat numTimes={29}>{(i) => <div class="stripe"></div>}</Repeat>
      </div>
      <div class="center">
        <svg class="polygon">
          <polygon
            class="middle"
            points="68,0 91,0 160,117 46,117 59,93 121,93"
          />
          <polygon
            class="dark"
            points="68,41 79,59 46,117 160,117 147,160 11,140"
          />
          <polygon
            class="light"
            points="0,117 68,0 121,93 98,93 68,41 11,140"
          />
        </svg>
      </div>
    </div>
  );
}

export default Day17;
