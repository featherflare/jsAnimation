import React, { useEffect, useRef } from "react";
import "./Day47.scss";

function Day47() {
  function Repeat(props) {
    let items = [];
    for (let i = 1; i <= props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  return (
    <div class="frame47">
      <Repeat numTimes={400}>
        {(i) => (
          <div class="pixel">
            {i === 130 ||
            i === 131 ||
            i === 149 ||
            i === 150 ||
            i === 151 ||
            i === 152 ||
            i === 168 ||
            i === 169 ||
            i === 170 ||
            i === 171 ||
            i === 172 ||
            i === 173 ||
            i === 187 ||
            i === 188 ||
            i === 190 ||
            i === 191 ||
            i === 193 ||
            i === 194 ||
            i === 207 ||
            i === 208 ||
            i === 209 ||
            i === 210 ||
            i === 211 ||
            i === 212 ||
            i === 213 ||
            i === 214 ||
            i === 229 ||
            i === 232 ||
            i === 248 ||
            i === 250 ||
            i === 251 ||
            i === 253 ||
            i === 267 ||
            i === 269 ||
            i === 272 ||
            i === 274 ? (
              <input type="checkbox" id={`pixel-${i}`} checked="checked" />
            ) : (
              <input type="checkbox" id={`pixel-${i}`} />
            )}
            <label class="tab" for="pixel-#{i}"></label>
          </div>
        )}
      </Repeat>
    </div>
  );
}

export default Day47;
