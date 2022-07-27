import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "./Day40.scss";

function Day40() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }

  const select = (i) => {
    $(".pic").toggleClass("away");
    $(`.pic-${i}`).removeClass("away").toggleClass("active");
  };
  return (
    <div class="frame40">
      <div class="pics">
        <Repeat numTimes={9}>
          {(i) => (
            <div class={`pic pic-${i}`} onClick={(e) => select(i)}>
              <img src={`https://100dayscss.com/codepen/40-${i}.jpg`} alt="" />
            </div>
          )}
        </Repeat>
      </div>
    </div>
  );
}

export default Day40;
