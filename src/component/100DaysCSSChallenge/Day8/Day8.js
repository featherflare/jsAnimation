import React, { useEffect, useRef } from "react";
import "./Day8.scss";

function Day8() {
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame8">
      <div class="center">
        <div class="ball"></div>
        <Repeat numTimes={8}>{(i) => <div class={`blubb-${i}`}></div>}</Repeat>
        <Repeat numTimes={10}>
          {(i) => <div class={`sparkle-${i}`}></div>}
        </Repeat>
      </div>
    </div>
  );
}

export default Day8;
