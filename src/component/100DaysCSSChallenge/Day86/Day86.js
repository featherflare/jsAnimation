import React, { useEffect, useRef } from "react";
import "./Day86.scss";

function Day86() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame86">
      <div class="cradle">
        <Repeat numTimes={5}>
          {(i) => <div class={`ball ball-${i}`}></div>}
        </Repeat>
      </div>
    </div>
  );
}

export default Day86;
