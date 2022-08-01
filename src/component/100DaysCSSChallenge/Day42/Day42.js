import React, { useEffect, useRef } from "react";
import "./Day42.scss";

function Day42() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame42">
      <div class="stage">
        <Repeat numTimes={300}>
          {(i) => <div class={`star star-${i}`}></div>}
        </Repeat>
        <Repeat numTimes={6}>
          {(i) => <div class={`shooting-star shooting-star-${i}`}></div>}
        </Repeat>
      </div>
    </div>
  );
}

export default Day42;
