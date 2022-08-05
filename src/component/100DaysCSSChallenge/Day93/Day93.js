import React, { useEffect, useRef } from "react";
import "./Day93.scss";

function Day93() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame93">
      <div class="center">
        <div class="lock">
          <div class="hanger">
            <div class="inside"></div>
          </div>
          <div class="base">
            <div class="ring">
              <Repeat numTimes={40}>
                {(i) => <div class={`line line-${i}`}></div>}
              </Repeat>
              <Repeat numTimes={8}>
                {(i) => (
                  <div class={`number number-${i - 1}`}>{(i - 1) * 5}</div>
                )}
              </Repeat>
            </div>
            <div class="knob"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day93;
