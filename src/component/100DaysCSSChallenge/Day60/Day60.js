import React, { useEffect, useRef } from "react";
import "./Day60.scss";

function Day60() {
  function Repeat(props) {
    let items = [];
    for (let i = 0; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame60">
      <Repeat numTimes={200}>
        {(i) => <div class={`trigger trigger-${i}`}></div>}
      </Repeat>
      <div class="plane">
        <div class="text-front">Hover</div>
      </div>
      <div class="text-back">Hover</div>
    </div>
  );
}

export default Day60;
