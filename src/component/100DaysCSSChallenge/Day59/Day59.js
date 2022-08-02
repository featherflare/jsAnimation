import React, { useEffect, useRef } from "react";
import "./Day59.scss";

function Day59() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame59">
      <div class="slices">
        <Repeat numTimes={8}>
          {(i) => <div class={`slice slice-${i}`}></div>}
        </Repeat>
        <div class="text">
          <h1>Slice</h1>
          <h2>transition</h2>
        </div>
      </div>
    </div>
  );
}

export default Day59;
