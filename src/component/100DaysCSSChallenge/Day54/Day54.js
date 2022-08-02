import React, { useEffect, useRef } from "react";
import "./Day54.scss";

function Day54() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame54">
      <div class="wave wave-back">
        <Repeat numTimes={10}>{(i) => <div class="circle" />}</Repeat>
      </div>
      <div class="wave wave-middle">
        <Repeat numTimes={10}>{(i) => <div class="circle" />}</Repeat>
      </div>
      <div class="wave wave-front">
        <Repeat numTimes={10}>{(i) => <div class="circle" />}</Repeat>
      </div>
    </div>
  );
}

export default Day54;
