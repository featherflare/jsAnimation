import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CardRevealOnHover from "./component/CardRevealOnHover/CardRevealOnHover";
import GlassCard from "./component/GlassCard/GlassCard";
import ButtonAni from "./component/Button/ButtonBorderMoving";
import BarColorGen from "./component/BarColorGen/BarColorGen";
import CardBorderMoving from "./component/CardBorderMoving/CardBorderMoving";
import ExplandingFlexCard from "./component/ExplandingFlexCard/ExplandingFlexCard";
import CardHoverZoomEffect from "./component/CardHoverZoomEffect/CardHoverZoomEffect";
import HambergerToggle from "./component/HambergerToggle/HambergerToggle";
import CardBlurWhenNoHover from "./component/CardBlurWhenNoHover/CardBlurWhenNoHover";
import CardHoverSildeEffect from "./component/CardHoverSildeEffect/CardHoverSildeEffect";
import JQueryTest from "./component/JQueryTest/JQueryTest";
import GsapTest from "./component/GsapTest/GsapTest";
import Profile from "./component/Profile/Profile";
import GsapCardSelectWithFlip from "./component/GsapTest/GsapDemo/GsapCardSelectWithFlip/GsapCardSelectWithFlip";
import GsapScrollTrigerDemo from "./component/GsapTest/GsapDemo/GsapScrollTrigerDemo/GsapScrollTrigerDemo";
import Day1 from "./component/100DaysCSSChallenge/Day1/Day1";
import Day2 from "./component/100DaysCSSChallenge/Day2/Day2";
import Day3 from "./component/100DaysCSSChallenge/Day3/Day3";
import Day4 from "./component/100DaysCSSChallenge/Day4/Day4";
import Day5 from "./component/100DaysCSSChallenge/Day5/Day5";
import Navbar from "./component/Navbar";

import { useState } from "react";

function App({ children }) {
  const [size, setSize] = useState({ x: 380, y: 50 });
  const [click, setClick] = useState("click");
  const handler = (mouseDownEvent) => {
    const startSize = size;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

    function onMouseMove(mouseMoveEvent) {
      setSize((currentSize) => ({
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY,
      }));
    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      // uncomment the following line if not using `{ once: true }`
      // document.body.removeEventListener("mouseup", onMouseUp);
    }

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };

  const clicks = () => {
    if (click == "") {
      setSize({ x: 0, y: 0 });
      setClick("click");
    } else {
      setClick("");
      setSize({ x: 0, y: 50 });
    }
  };

  return (
    <div className="App ">
      <header>
        <div
          className={`nav-area  ${click}`}
          id="container"
          style={{ width: "100vw", height: size.y }}
        >
          <Navbar />
        </div>
      </header>
      <BrowserRouter>
        <div id="draghandle" onMouseDown={handler} onDoubleClick={clicks}></div>

        <div className="Component">
          <Routes>
            <Route index element={<Profile />} />
            <Route path="" element={<Profile />} />
            <Route path="cardRevealOnHover" element={<CardRevealOnHover />} />
            <Route path="glassCard" element={<GlassCard />} />
            <Route path="buttonANi" element={<ButtonAni />} />
            <Route path="barColorGen" element={<BarColorGen />} />
            <Route path="cardBorderMoving" element={<CardBorderMoving />} />
            <Route path="explandingFlexCard" element={<ExplandingFlexCard />} />
            <Route
              path="cardHoverZoomEffect"
              element={<CardHoverZoomEffect />}
            />
            <Route path="hambergerToggle" element={<HambergerToggle />} />
            <Route
              path="cardBlurWhenNoHover"
              element={<CardBlurWhenNoHover />}
            />
            <Route
              path="cardHoverSildeEffect"
              element={<CardHoverSildeEffect />}
            />
            <Route path="jQueryTest" element={<JQueryTest />} />
            <Route path="gsapTest" element={<GsapTest />} />
            <Route
              path="gsapCardSelectWithFlip"
              element={<GsapCardSelectWithFlip />}
            />
            <Route
              path="gsapScrollTrigerDemo"
              element={<GsapScrollTrigerDemo />}
            />
            <Route path="day1" element={<Day1 />} />
            <Route path="day2" element={<Day2 />} />
            <Route path="day3" element={<Day3 />} />
            <Route path="day4" element={<Day4 />} />
            <Route path="day5" element={<Day5 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
