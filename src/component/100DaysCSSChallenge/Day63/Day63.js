import React, { useEffect, useRef } from "react";
import "./Day63.scss";

function Day63() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame63">
      <Repeat numTimes={50}>
        {(i) => <div class={`circle circle-${i}`}></div>}
      </Repeat>
    </div>
  );
}

export default Day63;
