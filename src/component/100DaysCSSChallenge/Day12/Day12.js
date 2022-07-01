import React, { useEffect, useRef } from "react";
import { FaVolumeUp } from "react-icons/fa";
import "./Day12.scss";

function Day12() {
  return (
    <div class="frame12">
      <div class="quote">
        <p>
          I know quite certainly that I myself have no special talent;
          curiosity,
          <span class="tooltip">
            obsession
            <span class="info">
              <span class="pronounce">
                {`[əbˈseʃ(ə)n]`}
                <FaVolumeUp class="icon" />
              </span>
              <span class="text">
                <b>Obsession</b>, a persistent disturbing preoccupation with an
                often unreasonable idea or feeling.
              </span>
            </span>
          </span>
          and dogged endurance, combined with self-criticism have brought me to
          my ideas.
        </p>
        <p class="author">Albert Einstein</p>
      </div>
    </div>
  );
}

export default Day12;
