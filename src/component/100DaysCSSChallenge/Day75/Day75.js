import React, { useEffect, useRef } from "react";
import "./Day75.scss";

function Day75() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame75">
      <div class="center">
        <div class="ball-big">
          <Repeat numTimes={18}>
            {(i) => <div class={`plane plane-${i}`}></div>}
          </Repeat>
        </div>
      </div>
    </div>
  );
}

export default Day75;
