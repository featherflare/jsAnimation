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
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Flip from "gsap/Flip";

gsap.registerPlugin(CustomEase);
gsap.config({ trialWarn: false });

// CustomWiggle.create("myWiggle", {
//   wiggles: 8,
//   type: "uniform",
// });

gsap.registerEffect({
  name: "pulse",
  effect(targets) {
    return gsap.fromTo(
      targets,
      {
        scale: 1,
      },
      {
        scale: 1.5,
        repeat: 1,
        ease: "bounce",
        yoyoEase: "power3",
      }
    );
  },
});

gsap.registerEffect({
  name: "spin",
  effect(targets) {
    return gsap.to(targets, {
      rotation: (i, el) =>
        gsap.utils.snap(360, gsap.getProperty(el, "rotation") + 360),
    });
  },
});

gsap.registerEffect({
  name: "shake",
  effect(targets) {
    return gsap.fromTo(
      targets,
      {
        x: 0,
      },
      {
        x: 10,
        ease: "bounce",
      }
    );
  },
});

const GsapEffect = forwardRef(({ children, effect, targetRef, vars }, ref) => {
  const animation = useRef();

  useLayoutEffect(() => {
    if (gsap.effects[effect]) {
      animation.current = gsap.effects[effect](targetRef.current, vars);
    }
  }, [effect]);

  useEffect(() => {
    // forward the animation instance if a ref is passed
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);

  return <>{children}</>;
});

const Box = forwardRef(({ children }, ref) => {
  return (
    <div className="box" ref={ref}>
      {children}
    </div>
  );
});

const wrap = gsap.utils.wrap(["pulse", "spin", "shake"]);

//Add Item
let count = 0;

gsap.registerPlugin(Flip);
gsap.config({ trialWarn: false });

const wrapColor = gsap.utils.wrap(["blue", "red", "purple", "orange"]);

function createItem() {
  return { id: ++count, color: wrapColor(count), status: "entered" };
}

function ThirdRow() {
  const boxRef = useRef();
  const count = useRef(0);
  const [effect, setEffect] = useState("");

  const toggle = () => {
    setEffect(wrap(count.current++));
  };

  // remove Element with Gsap
  const [items, setItems] = useState(() => [
    { id: 0, color: "blue" },
    { id: 1, color: "red" },
    { id: 2, color: "purple" },
  ]);

  const removeItem = (value) => {
    setItems((prev) => prev.filter((item) => item !== value));
  };

  const remove = (item, target) => {
    gsap.to(target, { opacity: 0, onComplete: () => removeItem(item) });
  };

  //Add Item
  const el = useRef();
  const q = gsap.utils.selector(el);

  const [layout, setLayout] = useState(() => {
    return {
      items: [createItem(), createItem(), createItem(), createItem()].reverse(),
    };
  });

  useLayoutEffect(() => {
    if (!layout.state) return;
    const exiting = layout.items.filter((item) => item.status === "exiting");

    const timeline = Flip.from(layout.state, {
      absolute: true,
      ease: "power1.inOut",
      targets: q(".box, .button"),
      scale: true,
      simple: true,
      onEnter: (element) => {
        return gsap.fromTo(
          element,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            delay: 0.2,
            duration: 0.3,
          }
        );
      },
      onLeave: (element) => {
        return gsap.to(element, {
          opacity: 0,
          scale: 0,
        });
      },
    });

    timeline.add(() => {
      removeItem2(exiting);
    }, [layout]);
  });

  const removeItem2 = (exitingItems) => {
    if (!exitingItems.length) return;

    setLayout((prev) => ({
      state: Flip.getState(q(".box,.button")),
      items: prev.items.filter((item) => !exitingItems.includes(item)),
    }));
  };

  const addItem = () => {
    setLayout({
      state: Flip.getState(q(".box,.button")),
      items: [createItem(), ...layout.items],
    });
  };

  const shuffle = () => {
    setLayout({
      state: Flip.getState(q(".box,.button")),
      items: [...gsap.utils.shuffle(layout.items)],
    });
  };

  const remove2 = (item) => {
    item.status = "exiting";

    setLayout({
      ...layout,
      state: Flip.getState(q(".box,.button")),
    });
  };

  return (
    <div className="bgGsap">
      <div>
        <div>
          <button onClick={toggle}>Toggle</button>
        </div>
        <p>Effect: {effect}</p>
        <GsapEffect targetRef={boxRef} effect={effect}>
          <Box ref={boxRef}>Box</Box>
        </GsapEffect>
      </div>
      <div style={{ margin: "0 20px" }}>
        {items.map((item) => (
          <div
            className={`box ${item.color}`}
            key={item.id}
            onClick={(e) => remove(item, e.currentTarget)}
          >
            Click Me!!
          </div>
        ))}
      </div>
      <div className="addItem" ref={el}>
        <div>
          <button onClick={addItem}>Add Box</button>
          <button onClick={shuffle}>Shuffle</button>
        </div>
        <div className="boxes">
          {layout.items.map((item) => (
            <div
              id={`box-${item.id}`}
              key={item.id}
              className={`box ${item.color} ${item.status}`}
              onClick={() => remove2(item)}
            >
              Click Me
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThirdRow;
