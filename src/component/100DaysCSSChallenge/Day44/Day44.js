import React, { useEffect, useRef } from "react";
import "./Day44.scss";

function Day44() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame44">
      <Repeat numTimes={20}>
        {(i) => <div class={`rect rect-${i}`}></div>}
      </Repeat>
    </div>
  );
}

export default Day44;
