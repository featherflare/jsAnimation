import $ from "jquery";
import "./JQueryTest.scss";
import Effect from "./JQueryEffect";

$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
  $("h1").click(function () {
    $("#test1").hide();
  });
  $("h3").click(function () {
    $(".test2").hide();
  });
  $("h2").click(function () {
    $("p").show();
  });
  $(".test3").click(function () {
    $("p:first-child").hide();
  });
  $(".test4").click(function () {
    $("p:first").hide();
  });
  $(".test5").click(function () {
    $("p:even").hide();
  });
  $(".test6").click(function () {
    $("p:odd").hide();
  });
});

function JQueryTest() {
  return (
    <div className="jqBG">
      <div className="selector">
        <div>Jquery have 4 selector</div>
        <div>{"1: $(this).hide() - hides the current element."}</div>
        <div>{`2: $("p").show() - show all <p> elements.`}</div>
        <div>{`3: $(".test").hide() - hides all elements with className="test".`}</div>
        <div>{`4: $("#test").hide() - hides the element with id="test".`}</div>
        <div>
          Expample 1:
          <div className="selectorEx">
            <div>
              <p>test first p hide</p>
              <p>testclickthis hide</p>
              <p id="test1">testid hide</p>
              <p className="test2">testclass hide</p>
              <p>test even hide</p>
              <p>test odd hide</p>
            </div>
            <div>
              <p className="test3">test first-child p hide</p>
              <p className="test4">test first p hide</p>
              <p className="test5">test odd p hide</p>
              <p className="test6">test even p hide</p>
              <h2>test show all p</h2>
              <h1>test hide id p</h1>
              <h3>test hide class p</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="event">
        <p>Mouse Event</p>
        <ul>
          <li>click</li>
          <li>dbclick</li>
          <li>mouseenter</li>
          <li>mouseleave</li>
          <li>mouseup</li>
          <li>mousedown</li>
          <li>hover</li>
        </ul>
        <p>Keyboard Event</p>
        <ul>
          <li>keypress</li>
          <li>keydown</li>
          <li>keyup</li>
        </ul>
        <p>Form Event</p>
        <ul>
          <li>submit</li>
          <li>change</li>
          <li>focus</li>
          <li>blur</li>
        </ul>
        <p>Document/Window Events</p>
        <ul>
          <li>load</li>
          <li>rezide</li>
          <li>scroll</li>
          <li>unload</li>
        </ul>
      </div>
      <Effect />
    </div>
  );
}

export default JQueryTest;
