import React, { useEffect, useRef } from "react";
import "./Day77.scss";

function Day77() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame77">
      <div class="ball">
        <Repeat numTimes={6}>
          {(i) => <div class={`blur blur-${i}`}></div>}
        </Repeat>
      </div>
    </div>
  );
}

export default Day77;
