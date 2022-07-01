import React, { useEffect, useRef } from "react";
import { MdDashboardCustomize, MdComment } from "react-icons/md";
import { FaUser, FaSearch } from "react-icons/fa";
import { HiBell } from "react-icons/hi";
import { BsGearFill } from "react-icons/bs";
import $ from "jquery";
import "./Day7.scss";

$(document).ready(function () {
  $(".search-icon").on("click", function () {
    $(".search-input").toggleClass("active");
  });

  $(".menu-icon").on("click", function () {
    $(".center").toggleClass("show-menu");
    $(".menu").toggleClass("active");
  });
});

function Day7() {
  return (
    <div class="frame7">
      <div class="center">
        <div class="header">
          <div class="menu-icon">
            <div class="dash-top"></div>
            <div class="dash-bottom"></div>
            <div class="circle"></div>
          </div>
          <div class="notification">Notifications</div>
          <input type="text" class="search-input" placeholder="Search ..." />
          <FaSearch class="search-icon" />
        </div>
        <div class="timeline">
          <div class="noti">
            <span class="time">9:24 AM</span>
            <div class="message">
              <p>
                <b>John Walker</b> posted a photo on your wall.
              </p>
            </div>
          </div>
          <div class="noti">
            <span class="time">8:19 AM</span>
            <div class="message">
              <p>
                <b>Alice Parker</b> commented your last post.
              </p>
            </div>
          </div>
          <div class="noti">
            <span class="time">Yesterday</span>
            <div class="message">
              <p>
                <b>Luke Wayne</b> added you as friend.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="menu">
        <ul>
          <li>
            <MdDashboardCustomize />
            Dashboard
          </li>
          <li>
            <FaUser />
            Profile
          </li>
          <li>
            <HiBell />
            Notifications
          </li>
          <li>
            <MdComment />
            Messages
          </li>
          <li>
            <BsGearFill />
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Day7;
