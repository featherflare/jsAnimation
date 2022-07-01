import React, { useEffect, useRef } from "react";
import { FaHeartbeat } from "react-icons/fa";
import "./Day10.scss";

function Day10() {
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame10">
      <div class="center">
        <Repeat numTimes={15}>
          {(i) => (
            <div class={`point-set-${i}`}>
              <Repeat numTimes={4}>
                {(j) => <div class={`point-${j}`}></div>}
              </Repeat>
            </div>
          )}
        </Repeat>
        <svg
          class="spinner"
          viewBox="0 0 202 202"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="101" cy="101" r="99.5" />
        </svg>
        <div class="data">
          <div class="date">Mon 15 Jan 2015</div>
          <div class="time">11:42</div>
          <div>
            <div class="beat">
              <span>
                <FaHeartbeat />
              </span>
              81
            </div>
            <div class="energy">1248 kcal</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day10;
