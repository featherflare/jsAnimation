import React, { useState } from "react";
import $ from "jquery";
import { FaPhoneAlt, FaComments, FaHeart, FaPlus } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import "./Day13.scss";

$(".profile").on("click", function () {
  $(".detail").addClass("active");
});

$(".close").on("click", function () {
  $(".detail").removeClass("active");
});

function Day13() {
  const items = [
    { id: 1, src: "https://100dayscss.com/codepen/13-1.jpg" },
    { id: 2, src: "https://100dayscss.com/codepen/13-2.jpg" },
    { id: 3, src: "https://100dayscss.com/codepen/13-3.jpg" },
    { id: 4, src: "https://100dayscss.com/codepen/13-4.jpg" },
  ];

  const [img, setImg] = useState("");

  const onChange = (e) => {
    setImg(e);
    console.log({ img });
  };

  return (
    <div class="frame13">
      {items.map(({ src, id }) => (
        <div key={id} class="profile" onClick={(e) => onChange(src)}>
          <img src={src} />
          <div class="overlay" />
          <div class="plus">
            <FaPlus />
          </div>
        </div>
      ))}
      <div class="detail">
        <div class="close icon">
          <GrClose />
        </div>
        <img
          src="https://100dayscss.com/codepen/13-1-header.jpg"
          class="header"
        />
        <img src={img} class="image" />
        <div class="infos">
          <div class="name">Julia Toth</div>
          <div class="action"></div>
          <div>
            <button class="icon">
              <FaPhoneAlt />
            </button>
            <button class="icon">
              <FaComments />
            </button>
            <button class="icon">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day13;
