import React, { useEffect, useRef } from "react";
import "./Day89.scss";

function Day89() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame89">
      <div class="horizontal">
        <Repeat numTimes={100}>
          {(i) => <div class={`stripe stripe-${i}`}></div>}
        </Repeat>
      </div>
      <div class="vertical">
        <Repeat numTimes={100}>
          {(i) => <div class={`stripe stripe-${i}`}></div>}
        </Repeat>
      </div>
    </div>
  );
}

export default Day89;
