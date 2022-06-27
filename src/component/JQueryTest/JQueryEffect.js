import React from "react";
import $ from "jquery";
function effect() {
  $(document).ready(function () {
    //hide show
    $("#hide").click(function () {
      $("#testHide").hide(1000, function () {
        alert("The paragraph is now hidden");
      });
    });
    $("#show").click(function () {
      $("#testHide").show();
    });
    $("#toggle").click(function () {
      $("#testToggle").toggle();
    });

    //fade
    $("#testFadeIn").click(function () {
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
    $("#testFadeOut").click(function () {
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
    });
    $("#testFadeTo").click(function () {
      $("#div1").fadeTo("slow", 0.15);
      $("#div2").fadeTo("slow", 0.4);
      $("#div3").fadeTo("slow", 0.7);
    });

    //slide
    $("#flip").click(function () {
      $("#panel").slideDown("slow");
    });
    $("#flip2").click(function () {
      $("#panel").slideUp("slow");
    });

    //animate
    $("#animate").click(function () {
      var div = $(".anitest");
      div.animate(
        {
          left: "250px",
          opacity: "0.5",
          height: "+=50px",
          width: "150px",
        },
        "slow"
      );
      div.animate(
        {
          bottom: "250px",
          opacity: "0.2",
          height: "+=50px",
          width: "150px",
        },
        1000
      );
      div.animate(
        {
          right: "250px",
          opacity: "0.8",
          height: "+=50px",
          width: "150px",
        },
        "slow"
      );
      div.animate(
        {
          left: "0px",
          right: "0px",
          bottom: "0px",
          opacity: "1",
          height: "100px",
          width: "100px",
        },
        1000
      );
    });

    $(".anitest").click(function () {
      $(".anitest").stop();
    });
    $("#btn1").click(function () {
      $(".anitest").text("Bring it").css("color", "red");
    });
    $("#btn2").click(function () {
      $(".anitest").html("<b>Stop it!</b>").css("color", "white");
    });
    $("#btn3").click(function () {
      $(".anitest").text(function (i, origText) {
        return origText + " are you understand! ";
      });
    });

    $("#btn4").click(function () {
      $(".anitest").html(function (i, origText) {
        return origText + "<b>are you understand!!</b> ";
      });
    });

    //Add elements
    $("#btn5").click(function () {
      $("ol").prepend("<li>Prepended item</li>");
    });
    $("#btn6").click(function () {
      $("ol").append("<li>Appended item</li>");
    });
    $("#remove").click(function () {
      $("p").remove(".test, .demo");
    });
    $("#empty").click(function () {
      $("p").empty();
    });
    $("#addclass").click(function () {
      $("h1, h2, p").addClass("blue");
      $("h1, h2, p").removeClass("blue");
    });

    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });

  function appendText() {
    console.log("click");
    var txt1 = "<p>Text with HTML.</p>";
    var txt2 = $("<p></p>").text("Text with jQuery.");
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text with DOM.";
    $("#testText").append(txt1, txt2, txt3);
  }

  return (
    <div className="effect">
      <div>
        <p id="testHide">
          {`In Jquery have Effect => Hide, Show, Toggle, Slide(Up,Down,Toggle),
        Fade(in,out,Toggle,To), Animate({addCss,"size"},(speed)) => Ex $("div").animate({
        opasity: '0.4', height: '500px', width: '500px'},"slow");,text("word"),
        attr("detect in widget Ex. href,src","optional Ex. www.xxx.com"),
        val("input value") , append("insert the text at the end of element") , 
        prepend("insert the text at the end of element"), remove(optional in input element class or id Ex ".test", "#demo"), 
        empty(remove element child), stop, addClass("addclass optional is more than one class"), removeClass, toggleClass,css("":""),
        {add => heigth(500(mean 500px))).width()},innerHeight, parent(s), parentUntil, children, find, siblings, next, nextAll, nextUntil, 
        prev, prevAll, prevUntil, first, last, ed(mean ntd-child), filter, not(is the opposite of filter)`}
        </p>
        <button id="hide">Hide</button>
        <button id="show">Show</button>
      </div>
      <div>
        <p id="testToggle">Click on the button to test.</p>

        <button id="toggle">{"Toggle(between hiding and showing)"}</button>
      </div>
      <div>
        <button id="testFadeIn">Click to fade in boxes</button>
        <button id="testFadeOut">Click to fade out boxes</button>
        <button id="testFadeTo">Click to fade to boxes</button>
        <div className="fade1">
          <div
            id="div1"
            style={{
              width: "80px",
              height: "80px",
              display: "none",
              backgroundColor: "red",
            }}
          ></div>
          <div
            id="div2"
            style={{
              width: "80px",
              height: "80px",
              display: "none",
              backgroundColor: "green",
            }}
          ></div>
          <div
            id="div3"
            style={{
              width: "80px",
              height: "80px",
              display: "none",
              backgroundColor: "blue",
            }}
          ></div>
        </div>
      </div>
      <div className="slide">
        <div id="flip">Click to slide down panel</div>
        <div id="flip2">Click to slide up panel</div>
        <div id="panel">Hello world!</div>
      </div>
      <div className="boxAni">
        <button id="animate">Start Animation</button>
        <button id="btn1">Set Text</button>
        <button id="btn2">Set HTML</button>
        <div
          className="anitest"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#98bf21",
            position: "absolute",
          }}
        >
          Stop it!
        </div>

        <button id="btn3">Show Old/New Text</button>
        <button id="btn4">Show Old/New HTML</button>
      </div>
      <div>
        <button id="btn5">Prepend list items</button>
        <button id="btn6">Append list items</button>
        <ol>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ol>
        <button id="append" onClick={appendText}>
          Append text with many way
        </button>
        <div id="testText"></div>
      </div>
      <div>
        <p>This is a paragraph.</p>
        <p className="test">This is p element with class="test".</p>
        <p id="test">This is p element with class="test".</p>
        <p className="demo">This is p element with class="demo".</p>

        <button id="remove">
          Remove all p elements with class="test" and class="demo"
        </button>
        <button id="empty">Empty the div element</button>
        <button id="addclass">Toggle class</button>
      </div>
      <div>
        <h2>Filterable Table</h2>
        <p>
          Type something in the input field to search the table for first names,
          last names or emails:
        </p>
        <input id="myInput" type="text" placeholder="Search.." />
        <br></br>

        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody id="myTable">
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@mail.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@greatstuff.com</td>
            </tr>
            <tr>
              <td>Anja</td>
              <td>Ravendale</td>
              <td>a_r@test.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default effect;
