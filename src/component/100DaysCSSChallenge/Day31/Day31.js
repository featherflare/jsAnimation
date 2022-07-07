import React, { useEffect, useRef } from "react";
import "./Day31.scss";

function Day31() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame31">
      <div class="dots">
        <Repeat numTimes={20}>
          {(i) => <div class={`dot dot-${i}`}></div>}
        </Repeat>
      </div>
    </div>
  );
}

export default Day31;
