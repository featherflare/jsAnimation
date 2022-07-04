import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "./Day15.scss";

function Day15() {
  var droppedFiles = false;
  var fileName = "";
  var $dropzone = $(".dropzone");
  var $button = $(".upload-btn");
  var uploading = false;
  var $syncing = $(".syncing");
  var $done = $(".done");
  var $bar = $(".bar");
  var timeOut;

  $(document).ready(function () {
    $dropzone
      .on(
        "drag dragstart dragend dragover dragenter dragleave drop",
        function (e) {
          e.preventDefault();
          e.stopPropagation();
        }
      )
      .on("dragover dragenter", function () {
        $dropzone.addClass("is-dragover");
      })
      .on("dragleave dragend drop", function () {
        $dropzone.removeClass("is-dragover");
      })
      .on("drop", function (e) {
        droppedFiles = e.originalEvent.dataTransfer.files;
        fileName = droppedFiles[0]["name"];
        $(".filename").html(fileName);
        $(".dropzone .upload").hide();
      });

    $("input:file").change(function () {
      fileName = $(this)[0].files[0].name;
      $(".filename").html(fileName);
      $(".dropzone .upload").hide();
    });
  });

  function startUpload() {
    if (!uploading && fileName != "") {
      uploading = true;
      $button.html("Uploading...");
      $dropzone.fadeOut();
      $syncing.addClass("active");
      $done.addClass("active");
      $bar.addClass("active");
      timeOut = window.setTimeout(showDone, 3200);
    }
  }

  function showDone() {
    $button.html("Done");
  }

  return (
    <div class="frame15">
      <div class="center">
        <div class="title">Drop file to upload</div>
        <div class="bar"></div>
        <div class="dropzone">
          <div class="content">
            <img
              src="https://100dayscss.com/codepen/upload.svg"
              class="upload"
            />
            <span class="filename"></span>
            <input type="file" class="input" />
          </div>
        </div>
        <img src="https://100dayscss.com/codepen/syncing.svg" class="syncing" />
        <img src="https://100dayscss.com/codepen/checkmark.svg" class="done" />
        <div class="upload-btn" onClick={startUpload}>
          Upload file
        </div>
      </div>
    </div>
  );
}

export default Day15;
