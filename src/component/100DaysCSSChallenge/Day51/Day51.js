import React, { useEffect, useRef } from "react";
import "./Day51.scss";

function Day51() {
  function Repeat(props) {
    let items = [];
    for (let i = 0; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame51">
      <input type="checkbox" id="button" name="state" />
      <label for="button" class="icon">
        <div class="pause"></div>
        <div class="play"></div>
      </label>
      <div class="counter">
        <div class="thousands number">
          <Repeat numTimes={9}>
            {(i) => <span class={`number-${i}`}>{i}</span>}
          </Repeat>
        </div>
        <div class="hundreds number">
          <Repeat numTimes={9}>
            {(i) => <span class={`number-${i}`}>{i}</span>}
          </Repeat>
        </div>
        <div class="tens number">
          <Repeat numTimes={9}>
            {(i) => <span class={`number-${i}`}>{i}</span>}
          </Repeat>
        </div>
        <div class="units number">
          <Repeat numTimes={9}>
            {(i) => <span class={`number-${i}`}>{i}</span>}
          </Repeat>
        </div>
      </div>
    </div>
  );
}

export default Day51;
