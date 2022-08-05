import React, { useEffect, useRef } from "react";
import "./Day99.scss";

function Day99() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame99">
      <input type="checkbox" id="cb"></input>
      <label for="cb" class="label">
        <div class="bg"></div>
        <div class="icon"></div>
        <div class="ring"></div>
        <div class="stripes">
          <Repeat numTimes={18}>
            {(i) => <div class={`stripe stripe-${i}`}></div>}
          </Repeat>
        </div>
      </label>
    </div>
  );
}

export default Day99;
