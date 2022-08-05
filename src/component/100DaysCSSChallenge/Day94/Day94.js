import React, { useEffect, useRef } from "react";
import "./Day94.scss";

function Day94() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame94">
      <div class="tree">
        <div class="leafs"></div>
        <div class="trunk">
          <Repeat numTimes={5}>{(i) => <div class="branch"></div>}</Repeat>
        </div>
      </div>
    </div>
  );
}

export default Day94;
