import React, { useEffect, useRef } from "react";
import "./Day92.scss";

function Day92() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame92">
      <Repeat numTimes={16}>
        {(i) => <div class={`ball ball-${i}`}></div>}
      </Repeat>
    </div>
  );
}

export default Day92;
