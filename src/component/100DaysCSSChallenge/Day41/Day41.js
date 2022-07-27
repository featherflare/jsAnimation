import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "./Day41.scss";

function Day41() {
  const close = () => {
    $(".modal").addClass("hide");
  };
  return (
    <div class="frame41">
      <div class="modal">
        <img
          src="https://100dayscss.com/codepen/alert.png"
          width="44"
          height="38"
        />
        <span class="title">Oh snap!</span>
        <p>An error has occured while creating an error report.</p>
        <div class="button" onClick={close}>
          Dismiss
        </div>
      </div>
    </div>
  );
}

export default Day41;
