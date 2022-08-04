import React, { useEffect, useRef } from "react";
import "./Day71.scss";

function Day71() {
  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  return (
    <div class="frame71">
      <div class="triggers">
        {abc.map((abclist) => (
          <>
            <input
              type="radio"
              name="morse"
              id={`morse-${abclist}`}
              class="radio"
            />
            <label
              for={`morse-${abclist}`}
              class="trigger"
              id={`label-${abclist}`}
            >
              {abclist}
            </label>
          </>
        ))}
        <div class="light"></div>
      </div>
    </div>
  );
}

export default Day71;
