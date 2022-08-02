import React, { useEffect, useRef } from "react";
import "./Day52.scss";

function Day52() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame52">
      <Repeat numTimes={10}>
        {(i) => (
          <div class={`ring ring-${i}`}>
            <Repeat numTimes={12 + i * 6}>
              {(j) => (
                <div class={`dot dot-${j}`}>
                  <div class="fill"></div>
                </div>
              )}
            </Repeat>
          </div>
        )}
      </Repeat>
    </div>
  );
}

export default Day52;
