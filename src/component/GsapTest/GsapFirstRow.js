import React, { forwardRef, useEffect, useRef, useState } from "react";
import $ from "jquery";
import gsap from "gsap";
import "./GsapTest.scss";

//Create Widget
const Box = forwardRef(({ children }, ref) => {
  return (
    <div className="box" ref={ref}>
      {children}
    </div>
  );
});

function Container({ children }) {
  return (
    <div>
      <Box>Don't Animate Me</Box>
    </div>
  );
}

//Random Box Widget
const randomX = gsap.utils.random(-200, 200, 1, true);

function RndBox({ children, endX }) {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { x: endX });
  }, [endX]);

  return (
    <div className="box" ref={boxRef}>
      {children}
    </div>
  );
}

function FirstRow() {
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();

  const el = useRef();
  const q = gsap.utils.selector(el);

  const [count, setCount] = useState(0);
  const [delayedCount, setDelayedCount] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    const boxes1 = [box2.current, box3.current];
    gsap.to(box1.current, { rotation: "+=360" });
    gsap.to(boxes1, { x: 100, repeat: -1, repeatDelay: 1, yoyo: true });
  }, []);

  useEffect(() => {
    gsap.to(q(".box-1"), { rotation: "+=360" });
  }, []);

  useEffect(() => {
    gsap.to(q(".box-2"), { rotation: "+=360" });
  }, [delayedCount]);

  useEffect(() => {
    gsap.to(q(".box-3"), { rotation: "+=360" });
  }, [count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedCount(count);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="bgGsap">
      <Box ref={box1}>Hello</Box>
      <div className="forwardRef">
        <Box ref={box2}>Box</Box>
        <Container></Container>
        <Box ref={box3}>Box</Box>
      </div>
      <div className="trigger" ref={el}>
        <button onClick={() => setCount(count + 1)}>
          Click to trigger a render
        </button>
        <p>Count: {count}</p>
        <p>Delayed Count: {delayedCount}</p>
        <p>Renders: {1 + delayedCount + count}</p>
        <div className="triggerBox">
          <div className="box box-1">First render</div>
          <div className="box box-2">First & delayed count change</div>
          <div className="box box-3">Every render</div>
        </div>
      </div>
      <div className="rndVal">
        <button onClick={() => setEndX(randomX())}>
          Pass in a randomized value
        </button>
        <RndBox endX={endX}>{endX}</RndBox>
      </div>
    </div>
  );
}

export default FirstRow;
