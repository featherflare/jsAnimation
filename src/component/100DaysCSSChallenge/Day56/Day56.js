import React, { useEffect, useRef } from "react";
import "./Day56.scss";

function Day56() {
  function Repeat(props) {
    let items = [];
    for (let i = 0; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame56">
      <div class="flower">
        <Repeat numTimes={15}>
          {(i) => <div class={`leaf leaf-${i}`}></div>}
        </Repeat>
        <div class="dot"></div>
      </div>
    </div>
  );
}

export default Day56;
