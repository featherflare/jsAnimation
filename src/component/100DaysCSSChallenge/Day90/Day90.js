import React, { useEffect, useRef } from "react";
import "./Day90.scss";

function Day90() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame90">
      <div class="space"></div>
      <Repeat numTimes={380}>
        {(i) => <div class={`trigger trigger-${i}`}></div>}
      </Repeat>
      <div class="lines">
        <Repeat numTimes={19}>
          {(i) => (
            <div class={`line line-${i}`}>
              <div class="left"></div>
              <div class="right"></div>
            </div>
          )}
        </Repeat>
      </div>
    </div>
  );
}

export default Day90;
