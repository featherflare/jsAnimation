import React, { useEffect, useRef } from "react";
import "./Day46.scss";

function Day46() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame46">
      <Repeat numTimes={6}>
        {(i) => (
          <div class={`ring ring-${i}`}>
            <Repeat numTimes={12}>
              {(j) => <div class={`dot dot-${j}`}></div>}
            </Repeat>
          </div>
        )}
      </Repeat>
    </div>
  );
}

export default Day46;
