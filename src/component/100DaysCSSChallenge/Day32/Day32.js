import React, { useState } from "react";
import $ from "jquery";
import "./Day32.scss";

function Day32() {
  var [number, setNumber] = useState(0);
  var $number = $(".number");
  function updateNumber(value) {
    console.log(value);
    var number2 = (number += value);
    setNumber(number2);
    $number.find(".fadeOutDown").remove(); // remove old numbers
    $number.find(".fadeOutUp").remove(); // remove old numbers
    $number.find("span").removeClass(); // clear current number
    if (value > 0) {
      // fadeUp Animation
      $number.find(".fadeIn").addClass("fadeOutUp");
      $number.find("span").addClass("fadeOutUp");
      $number.append('<span class="fadeInUp">' + number + "</span>");
      $number.find(".fadeOutUp").remove();
    } else {
      // fadeDown Animation
      $number.find(".fadeIn").addClass("fadeOutUp");
      $number.find("span").addClass("fadeOutDown");
      $number.append('<span class="fadeInDown">' + number + "</span>");
      $number.find(".fadeOutDown").remove();
    }
  }
  return (
    <div class="frame32">
      <div class="counter">
        <div class="minus" onClick={(e) => updateNumber(-1)}>
          <div class="line"></div>
        </div>
        <div class="number">
          <span class="fadeIn">0</span>
        </div>
        <div class="plus" onClick={(e) => updateNumber(1)}>
          <div class="line-h"></div>
          <div class="line-v"></div>
        </div>
      </div>
    </div>
  );
}

export default Day32;
