import React, { useEffect, useRef } from "react";
import "./Day9.scss";

function Day9() {
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame9">
      <div class="moon">
        <Repeat numTimes={11}>
          {(i) => <div class={`crater-${i}`}></div>}
        </Repeat>
      </div>
      <div class="hill-bg-1"></div>
      <div class="hill-bg-2"></div>
      <div class="hill-fg-1"></div>
      <div class="hill-fg-2"></div>
      <div class="hill-fg-3"></div>
      <div class="front">
        <div class="temperature">12°</div>
        <div class="info">
          Wind: E 7 km/h <br /> Humidity: 87%
        </div>
        <table class="preview">
          <tr>
            <td>Tue</td>
            <td class="temp">21° / 9°</td>
          </tr>
          <tr>
            <td>Wed</td>
            <td class="temp">23° / 10°</td>
          </tr>
        </table>
      </div>
      <Repeat numTimes={10}>
        {(i) => <div class={`drop-big-${i}`}></div>}
      </Repeat>
      <Repeat numTimes={10}>
        {(i) => <div class={`drop-medium-${i}`}></div>}
      </Repeat>
      <Repeat numTimes={10}>
        {(i) => <div class={`drop-small-${i}`}></div>}
      </Repeat>
    </div>
  );
}

export default Day9;
