import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
} from "react";
import $ from "jquery";
import gsap from "gsap";

function Box({ children, timeline, index }) {
  const el = useRef();

  useEffect(() => {
    timeline && timeline.to(el.current, { x: -100 }, index * 0.1);
  }, [timeline]);

  return (
    <div className="box" ref={el}>
      {children}
    </div>
  );
}

function Circle({ children, timeline, index, rotation }) {
  const el = useRef();

  useEffect(() => {
    timeline &&
      timeline.to(el.current, { rotate: rotation, x: 100 }, index * 0.1);
  }, [timeline, rotation]);

  return (
    <div className="circle" ref={el}>
      {children}
    </div>
  );
}

//callback function
function BoxWithCallback({ children, addAnimation, index }) {
  const el = useRef();

  useEffect(() => {
    const animation = gsap.to(el.current, { x: -100 });
    addAnimation(animation, index);
    return () => animation.progress(0).kill();
  }, [addAnimation, index]);

  return (
    <div className="box" ref={el}>
      {children}
    </div>
  );
}

function CircleWithCallback({ children, addAnimation, index, rotation }) {
  const el = useRef();

  useEffect(() => {
    const animation = gsap.to(el.current, { rotate: rotation, x: 100 });
    addAnimation(animation, index);
    return () => animation.progress(0).kill();
  }, [addAnimation, rotation, index]);

  return (
    <div className="circle" ref={el}>
      {children}
    </div>
  );
}

//selection box
const SelectedContext = createContext();

function Box2({ children, id }) {
  const el = useRef();
  const { selected } = useContext(SelectedContext);

  useEffect(() => {
    gsap.to(el.current, { x: selected === id ? 200 : 0 });
  }, [selected, id]);

  return (
    <div className="box" ref={el}>
      {children}
    </div>
  );
}

function Boxes() {
  return (
    <div className="boxes">
      <Box2 id="1">Box 1</Box2>
      <Box2 id="2">Box 2</Box2>
      <Box2 id="3">Box 3</Box2>
    </div>
  );
}

function Menu() {
  const { selected, setSelected } = useContext(SelectedContext);

  const onChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="menu">
      <label class="container">
        <input
          onChange={onChange}
          checked={selected === "1"}
          type="radio"
          value="1"
          name="selcted"
        />
        <span class="checkmark"></span>
        Box 1
      </label>
      <label class="container">
        <input
          onChange={onChange}
          checked={selected === "2"}
          type="radio"
          value="2"
          name="selcted"
        />
        <span class="checkmark"></span>
        Box 2
      </label>
      <label class="container">
        <input
          onChange={onChange}
          checked={selected === "3"}
          type="radio"
          value="3"
          name="selcted"
        />
        <span class="checkmark"></span>
        Box 3
      </label>
    </div>
  );
}

//detect mouse
const CircleMV = forwardRef(({ size, delay }, ref) => {
  const el = useRef();
  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y, delay });
        },
      };
    },
    [delay]
  );
  return (
    <div className={size} ref={el}>
      {/* <div className="circle2"></div> */}
    </div>
  );
});

//Creating reusable animations
const FadeToggle = forwardRef(({ children, stagger = 0, x = 0 }, ref) => {
  const el5 = useRef();
  const animation3 = useRef();

  useLayoutEffect(() => {
    animation3.current = gsap.from(el5.current.children, {
      opacity: 0,
      stagger,
      x,
    });
  }, []);

  useEffect(() => {
    if (typeof ref === "function") {
      ref(animation3.current);
    } else if (ref) {
      ref.current = animation3.current;
    }
  }, [ref]);

  return <span ref={el5}>{children}</span>;
});

function SecondRow() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "rgba(255, 132, 0, 0.6)",
      scale: 1.2,
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "rgba(0, 255, 21, 0.6)",
      scale: 1,
    });
  };

  const [reversed, setReversed] = useState(false);
  const [tl, setTl] = useState();
  const [tl2, setTl2] = useState(() => gsap.timeline());

  useEffect(() => {
    const tl = gsap.timeline();
    setTl(tl);
  }, []);

  useEffect(() => {
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  //callback function
  const addAnimation = useCallback(
    (animation, index) => {
      tl2.add(animation, index * 0.1);
    },
    [tl2]
  );

  useEffect(() => {
    tl2.reversed(reversed);
  }, [reversed, tl2]);

  //selection box
  const [selected, setSelected] = useState("2");

  //detect mouse
  const circleRefs = useRef([]); // reset on re-renders

  circleRefs.current = [];
  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  //Creating reusable animations
  const animation3 = useRef();

  const toggle = () => {
    animation3.current.reversed(!animation3.current.reversed());
  };

  return (
    <div className="bgGsap">
      <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        Hover Me
      </div>
      <div className="reverse">
        <button onClick={() => setReversed(!reversed)}>Toggle</button>
        <Box timeline={tl} index={0}>
          Box
        </Box>
        <Circle timeline={tl} rotation={360} index={1}>
          Circle
        </Circle>
        <BoxWithCallback addAnimation={addAnimation} index={0}>
          Box
        </BoxWithCallback>
        <CircleWithCallback
          addAnimation={addAnimation}
          rotation={360}
          index={1}
        >
          Circle
        </CircleWithCallback>
      </div>
      <div>
        <SelectedContext.Provider value={{ selected, setSelected }}>
          <Menu />
          <Boxes />
        </SelectedContext.Provider>
      </div>
      <div>
        <CircleMV size="lg" ref={addCircleRef} delay={0.2} />
        <CircleMV size="md" ref={addCircleRef} delay={0.1} />
        <CircleMV size="sm" ref={addCircleRef} delay={0} />
      </div>
      <div>
        <div>
          <button onClick={toggle}>Toggle</button>
        </div>
        <FadeToggle stagger={0.1} x={100} ref={animation3}>
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
        </FadeToggle>
      </div>
    </div>
  );
}

export default SecondRow;
