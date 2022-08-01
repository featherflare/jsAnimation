import React, { useEffect, useRef } from "react";
import "./Day49.scss";

function Day49() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame49">
      <Repeat numTimes={400}>
        {(i) => <a class={`trigger trigger-${i}`} href="#"></a>}
      </Repeat>
      <div class="mouseFollow"></div>
    </div>
  );
}

export default Day49;
