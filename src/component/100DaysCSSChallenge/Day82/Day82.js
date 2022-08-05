import React, { useEffect, useRef } from "react";
import "./Day82.scss";

function Day82() {
  return (
    <div class="frame82">
      <input type="checkbox" name="cb" id="cb" class="cb" />
      <label class="button" for="cb">
        <span class="front">send</span>
        <span class="back">done</span>
      </label>
    </div>
  );
}

export default Day82;
