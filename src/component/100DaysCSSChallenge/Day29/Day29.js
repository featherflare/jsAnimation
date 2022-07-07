import React from "react";
import $ from "jquery";
import { FaSearch } from "react-icons/fa";
import "./Day29.scss";

$(document).ready(function () {
  $(".searchfield").keyup(function () {
    var $suggestions = $(".suggestions");
    var text = $(this).val();
    if (text.length) {
      $suggestions.html("").addClass("active");
      $suggestions.append($("<li/>", { html: "<b>" + text + "</b>" }));
      $suggestions.append(
        $("<li/>", { html: "Veritatis et <b>" + text + "</b>" })
      );
      $suggestions.append(
        $("<li />", { html: "ut aliquid ex <b>" + text + "</b> vero eos" })
      );
    } else {
      $suggestions.html("").removeClass("active");
    }
  });
});

function Day29() {
  return (
    <div class="frame29">
      <div class="search">
        <input
          type="text"
          class="searchfield"
          placeholder="Start typing ..."
          // value="asd"
        />
        <button type="button" class="button">
          <FaSearch />
        </button>
        <ul class="suggestions clearfix"></ul>
      </div>
    </div>
  );
}

export default Day29;
