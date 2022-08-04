import React, { useEffect, useRef } from "react";
import "./Day79.scss";

function Day79() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame79">
      <div class="center">
        <Repeat numTimes={10}>
          {(i) => <div class={`line line-${i}`}></div>}
        </Repeat>
      </div>
    </div>
  );
}

export default Day79;
