import React, { useEffect, useRef } from "react";
import "./Day58.scss";

function Day58() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame58">
      <div class="center">
        <div class="form">
          <Repeat numTimes={19}>
            {(i) => <div class={`slice slice-${i}`}></div>}
          </Repeat>
        </div>
      </div>
    </div>
  );
}

export default Day58;
