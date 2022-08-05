import React, { useEffect, useRef } from "react";
import "./Day85.scss";

function Day85() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame85">
      <div class="wave">
        <Repeat numTimes={200}>
          {(i) => <div class={`dot dot-${i}`}></div>}
        </Repeat>
      </div>
    </div>
  );
}

export default Day85;
