import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./GsapScrollTrigerDemo.scss";
import imagesLoaded from "imagesloaded";

function GsapScrollTrigerDemo() {
  gsap.registerPlugin(ScrollTrigger);
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <>{items}</>;
  }
  function makeid(length) {
    var result = "";
    var characters = "34";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const slice = useRef();

  useEffect(() => {
    const element = slice.current;
    gsap.fromTo(
      element.querySelector(".wrapper"),
      { x: "100%" },
      {
        x: 0,
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);
  return (
    <div className="gsapDemo2">
      {/* <div className="loader df aic jcc">
        <div>
          <h1>Loading</h1>
          <h2 className="loader--text 0%"></h2>
        </div>
      </div> */}
      <div className="demo-wrapper" ref={slice}>
        <header className="df aic jcc">
          <div>
            <h1>ScrollTrigger</h1>
            <h2>demo</h2>
          </div>
        </header>
        <section className="demo-text wrapper text" id="slice">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </section>
        <Repeat numTimes={4}>
          {(index) => (
            <section className={`demo-gallery`} key={index}>
              <ul className="wrapper">
                <Repeat numTimes={makeid(1)}>
                  {(i) => (
                    <li key={i}>
                      <img
                        src={`https://source.unsplash.com/random/1240x874?sig=${randomNumberInRange(
                          0,
                          206
                        )}`}
                      />
                    </li>
                  )}
                </Repeat>
              </ul>
            </section>
          )}
        </Repeat>
        <section className="demo-text wrapper text">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </section>
        <footer className="df aic jcc">
          <p>
            Images from <a href="https://unsplash.com/">Unsplash</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default GsapScrollTrigerDemo;
