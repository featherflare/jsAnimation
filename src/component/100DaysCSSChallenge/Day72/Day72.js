import React, { useEffect, useRef } from "react";
import "./Day72.scss";

function Day72() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame72">
      <div class="center">
        <Repeat numTimes={25}>
          {(i) => <div class={`ring ring-${i}`}></div>}
        </Repeat>
      </div>
    </div>
  );
}

export default Day72;
