import React, { useEffect, useRef } from "react";
import "./Day83.scss";

function Day83() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame83">
      <div class="warp">
        <Repeat numTimes={30}>
          {(i) => (
            <div class={`ring ring-${i}`}>
              <Repeat numTimes={24}>
                {(j) => <div class={`stripe stripe-${j}`}></div>}
              </Repeat>
            </div>
          )}
        </Repeat>
      </div>
    </div>
  );
}

export default Day83;
