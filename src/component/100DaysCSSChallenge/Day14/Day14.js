import React, { useEffect, useRef } from "react";
import "./Day14.scss";

function Day14() {
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }

  return (
    <div class="frame14">
      <div class="card">
        <div class="flip">
          <div class="front">
            <img src="https://100dayscss.com/codepen/bycicle.svg" />
            <div class="street">
              <Repeat numTimes={9}>
                {(i) => <div class={`stripe-${i}`}></div>}
              </Repeat>
            </div>
          </div>
          <div class="back">
            <img src="https://100dayscss.com/codepen/helicopter.svg" />
            <div class="sky">
              <Repeat numTimes={9}>
                {(i) => <div class={`cloud-${i}`}></div>}
              </Repeat>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day14;
