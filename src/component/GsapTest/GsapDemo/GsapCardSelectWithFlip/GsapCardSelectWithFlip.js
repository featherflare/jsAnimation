import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";
import "./GsapCardSelectWithFlip.scss";
function GsapCardSelectWithFlip() {
  const [items2, setItems] = useState(() => [
    {
      id: 0,
      title: "Owl",
      secondary: "Hoo are you?",
      text: "Owel lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-owl.png",
    },
    {
      id: 1,
      title: "Deer",
      secondary: "Hi deer.",
      text: "Deer lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-deer.png",
    },
    {
      id: 2,
      title: "Hipster",
      secondary: "What's new?",
      text: "Hipster lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-hipster.png",
    },
    {
      id: 3,
      title: "Ram",
      secondary: "I just drank a Mountain Dew.",
      text: "Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-ram.png",
    },
    {
      id: 4,
      title: "Dog",
      secondary: "I'm trying to sleep here.",
      text: "Dog lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-dog.png",
    },
    {
      id: 5,
      title: "Bored Ram",
      secondary: "No time for you.",
      text: "Bored Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-sideram.png",
    },
    {
      id: 6,
      title: "Super Ram",
      secondary: "I have lazer vision.",
      text: "Super Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-multiram.png",
    },
    {
      id: 7,
      title: "Gorilla",
      secondary: "I can fit a whole watermelon in my mouth.",
      text: "Gorilla lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-gorilla.png",
    },
    {
      id: 8,
      title: "Birb",
      secondary: "I'm just here to chill.",
      text: "Birb lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-bird.png",
    },
    {
      id: 9,
      title: "Owl",
      secondary: "Hoo are you?",
      text: "Owel lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-owl.png",
    },
    {
      id: 10,
      title: "Deer",
      secondary: "Hi deer.",
      text: "Deer lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-deer.png",
    },
    {
      id: 11,
      title: "Hipster",
      secondary: "What's new?",
      text: "Hipster lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-hipster.png",
    },
    {
      id: 12,
      title: "Ram",
      secondary: "I just drank a Mountain Dew.",
      text: "Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-ram.png",
    },
    {
      id: 13,
      title: "Dog",
      secondary: "I'm trying to sleep here.",
      text: "Dog lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-dog.png",
    },
    {
      id: 14,
      title: "Bored Ram",
      secondary: "No time for you.",
      text: "Bored Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-sideram.png",
    },
    {
      id: 15,
      title: "Super Ram",
      secondary: "I have lazer vision.",
      text: "Super Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-multiram.png",
    },
    {
      id: 16,
      title: "Gorilla",
      secondary: "I can fit a whole watermelon in my mouth.",
      text: "Gorilla lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-gorilla.png",
    },
    {
      id: 17,
      title: "Birb",
      secondary: "I'm just here to chill.",
      text: "Birb lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-bird.png",
    },
    {
      id: 18,
      title: "Owl",
      secondary: "Hoo are you?",
      text: "Owel lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-owl.png",
    },
    {
      id: 19,
      title: "Deer",
      secondary: "Hi deer.",
      text: "Deer lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-deer.png",
    },
    {
      id: 20,
      title: "Hipster",
      secondary: "What's new?",
      text: "Hipster lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-hipster.png",
    },
    {
      id: 21,
      title: "Ram",
      secondary: "I just drank a Mountain Dew.",
      text: "Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-ram.png",
    },
    {
      id: 22,
      title: "Dog",
      secondary: "I'm trying to sleep here.",
      text: "Dog lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-dog.png",
    },
    {
      id: 23,
      title: "Bored Ram",
      secondary: "No time for you.",
      text: "Bored Ram lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/kl-sideram.png",
    },
  ]);
  const items = gsap.utils.toArray(".item"),
    details = document.querySelector(".detail"),
    detailContent = document.querySelector(".content"),
    detailImage = document.querySelector(".detail img"),
    detailTitle = document.querySelector(".detail .title"),
    detailSecondary = document.querySelector(".detail .secondary"),
    detailDescription = document.querySelector(".detail .description");

  let activeItem; // keeps track of which item is open (details)

  gsap.set(detailContent, { yPercent: -100 }); // close the details "drawer" (content) initially

  function showDetails(item) {
    if (activeItem) {
      // someone could click on an element behind the open details panel in which case we should just close it.
      return hideDetails();
    }
    let onLoad = () => {
      // position the details on top of the item (scaled down)
      Flip.fit(details, item, { scale: true, fitChild: detailImage });

      // record the state
      const state = Flip.getState(details);

      // set the final state
      gsap.set(details, { clearProps: true }); // wipe out all inline stuff so it's in the native state (not scaled)
      gsap.set(details, {
        xPercent: -50,
        top: "50%",
        yPercent: -50,
        visibility: "visible",
        overflow: "hidden",
      });

      Flip.from(state, {
        duration: 0.5,
        ease: "power2.inOut",
        scale: true,
        onComplete: () => gsap.set(details, { overflow: "auto" }), // to permit scrolling if necessary
      })
        // Flip.from() returns a timeline, so add a tween to reveal the detail content. That way, if the flip gets interrupted and forced to completion & killed, this does too.
        .to(detailContent, { yPercent: 0 }, 0.2);

      detailImage.removeEventListener("load", onLoad);
      document.addEventListener("click", hideDetails);
    };

    // Change image and text
    const data = item.dataset;
    detailImage.addEventListener("load", onLoad);
    detailImage.src = item.querySelector("img").src;
    detailTitle.innerText = data.title;
    detailSecondary.innerText = data.secondary;
    detailDescription.innerText = data.text;

    // stagger-fade the items out from the one that was selected in a staggered way (and kill the tween of the selected item)
    gsap
      .to(items, {
        opacity: 0.3,
        stagger: { amount: 0.7, from: items.indexOf(item), grid: "auto" },
      })
      .kill(item);
    gsap.to(".container", { backgroundColor: "#888", duration: 1, delay: 0.3 }); // fade out the background
    activeItem = item;
  }

  function hideDetails() {
    document.removeEventListener("click", hideDetails);
    gsap.set(details, { overflow: "hidden" });

    // record the current state of details
    const state = Flip.getState(details);

    // scale details down so that its detailImage fits exactly on top of activeItem
    Flip.fit(details, activeItem, { scale: true, fitChild: detailImage });

    // animate the other elements, like all fade all items back up to full opacity, slide the detailContent away, and tween the background color to white.
    const tl = gsap.timeline();
    tl.set(details, { overflow: "hidden" })
      .to(detailContent, { yPercent: -100 })
      .to(items, {
        opacity: 1,
        stagger: { amount: 0.7, from: items.indexOf(activeItem), grid: "auto" },
      })
      .to(".container", { backgroundColor: "#fff" }, "<");

    // animate from the original state to the current one.
    Flip.from(state, {
      scale: true,
      duration: 0.5,
      delay: 0.2, // 0.2 seconds because we want the details to slide up first, then flip.
      onInterrupt: () => tl.kill(),
    }).set(details, { visibility: "hidden" });

    activeItem = null;
  }

  // Add click listeners
  gsap.utils
    .toArray(".item")
    .forEach((item) => item.addEventListener("click", () => showDetails(item)));

  // Intro animation
  window.addEventListener("load", () => {
    gsap.to(".container", { autoAlpha: 1, duration: 0.2 });
    gsap.from(".item", { autoAlpha: 0, yPercent: 30, stagger: 0.04 });
  });

  return (
    <div className="gsapDemo2">
      <div className="container">
        <div className="gallery">
          {items2.map((item) => (
            <div
              className="item"
              key={item.id}
              data-title={item.title}
              data-secondary={item.secondary}
              data-text={item.text}
            >
              <img src={item.src} alt="" />
            </div>
          ))}
        </div>

        <div className="detail">
          <img />

          <div className="content">
            <div className="title">Placeholder title</div>
            <div className="secondary">Placeholder secondary</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              cum, est amet delectus, blanditiis voluptatem laborum pariatur
              consequatur quae voluptate, nisi. Laborum adipisci iste earum
              distinctio, fugit, quas ipsa impedit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GsapCardSelectWithFlip;
