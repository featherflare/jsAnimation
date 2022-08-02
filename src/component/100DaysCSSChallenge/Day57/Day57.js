import React, { useEffect, useRef } from "react";
import "./Day57.scss";

function Day57() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame57">
      <div class="center">
        <div class="ikosaeder">
          <Repeat numTimes={20}>
            {(i) => <div class={`side side-${i}`}></div>}
          </Repeat>
        </div>
      </div>
    </div>
  );
}

export default Day57;
