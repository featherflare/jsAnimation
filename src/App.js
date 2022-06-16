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
import Profile from "./component/Profile/Profile";

import { useState } from "react";

function App({ children }) {
  const [size, setSize] = useState({ x: 380, y: 300 });
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
      setSize({ x: 0, y: 300 });
      setClick("click");
    } else {
      setClick("");
      setSize({ x: 380, y: 300 });
    }
  };

  return (
    <div className="App ">
      <BrowserRouter>
        <div
          className={`Menu ${click}`}
          id="container"
          style={{ width: size.x, height: "100vh" }}
          onDoubleClick={clicks}
        >
          <div className="Link-list">
            <Link className="Link" to="/">
              Hello
            </Link>
          </div>
          <div className="Link-list">
            <Link className="Link" to="/cardRevealOnHover">
              CardRevealOnHover
            </Link>
          </div>
          <div className="Link-list">
            <Link className="Link" to="/glassCard">
              GlassCard
            </Link>
          </div>
          <div className="Link-list">
            <Link className="Link" to="/buttonAni">
              ButtonAni
            </Link>
          </div>
          <div className="Link-list">
            <Link className="Link" to="/barColorGen">
              BarColorGen
            </Link>
          </div>
          <div className="Link-list">
            <Link className="Link" to="/cardBorderMoving">
              CardBorderMoving
            </Link>
          </div>
          <div className="Link-list">
            <Link className="Link" to="/explandingFlexCard">
              ExplandingFlexCard
            </Link>
          </div>
          <div className="Link-list">
            <Link className="Link" to="/cardHoverZoomEffect">
              CardHoverZoomEffect
            </Link>
          </div>
          <div className="Link-list">
            <Link className="Link" to="/hambergerToggle">
              HambergerToggle
            </Link>
          </div>
          <div className="Link-list">
            <Link className="Link" to="/cardBlurWhenNoHover">
              CardBlurWhenNoHover
            </Link>
          </div>
          <div className="Link-list">
            <Link className="Link" to="/cardHoverSildeEffect">
              CardHoverSildeEffect
            </Link>
          </div>
        </div>

        <div id="draghandle" onMouseDown={handler} onDoubleClick={clicks}></div>

        <div className="Component">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/cardRevealOnHover" element={<CardRevealOnHover />} />
            <Route path="/glassCard" element={<GlassCard />} />
            <Route path="/buttonANi" element={<ButtonAni />} />
            <Route path="/barColorGen" element={<BarColorGen />} />
            <Route path="/cardBorderMoving" element={<CardBorderMoving />} />
            <Route
              path="/explandingFlexCard"
              element={<ExplandingFlexCard />}
            />
            <Route
              path="/cardHoverZoomEffect"
              element={<CardHoverZoomEffect />}
            />
            <Route path="/hambergerToggle" element={<HambergerToggle />} />
            <Route
              path="/cardBlurWhenNoHover"
              element={<CardBlurWhenNoHover />}
            />
            <Route
              path="/cardHoverSildeEffect"
              element={<CardHoverSildeEffect />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
