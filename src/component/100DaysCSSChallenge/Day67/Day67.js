import React, { useEffect, useRef } from "react";
import "./Day67.scss";

function Day67() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame67">
      <div class="parasol">
        <div class="pole"></div>
        <div class="shadowPole"></div>
        <div class="top">
          <Repeat numTimes={12}>
            {(i) => <div class={`triangle triangle-${i}`}></div>}
          </Repeat>
        </div>
        <div class="shadowTop">
          <div class="shadow">
            <Repeat numTimes={12}>
              {(i) => <div class={`triangle triangle-${i}`}></div>}
            </Repeat>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day67;
