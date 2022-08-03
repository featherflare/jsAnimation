import React, { useEffect, useRef } from "react";
import "./Day65.scss";

function Day65() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame65">
      <div class="form">
        <Repeat numTimes={18}>
          {(i) => <div class={`ellipse ellipse-${i}`}></div>}
        </Repeat>
      </div>
    </div>
  );
}

export default Day65;
