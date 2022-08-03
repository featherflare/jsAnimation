import React, { useEffect, useRef } from "react";
import "./Day66.scss";

function Day66() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame66">
      <div class="checkbox">
        <input type="checkbox" name="cb" id="cb-1" />
        <label for="cb-1" class="toggle"></label>
        <div class="sparkles">
          <Repeat numTimes={12}>
            {(i) => <div class={`sparkle sparkle-${i}`}></div>}
          </Repeat>
        </div>
      </div>
    </div>
  );
}

export default Day66;
