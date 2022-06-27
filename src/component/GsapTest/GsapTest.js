import React, { forwardRef, useEffect, useRef, useState } from "react";
import $ from "jquery";
import gsap from "gsap";
import FirstRow from "./GsapFirstRow";
import SecondRow from "./GsapSecondRow";
import ThirdRow from "./GsapThirdRow";
import "./GsapTest.scss";

function Gsap() {
  return (
    <div className="gsap">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
}

export default Gsap;
