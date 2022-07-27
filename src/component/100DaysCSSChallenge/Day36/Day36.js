import React, { useEffect, useRef } from "react";
import { FaEye, FaComments, FaBell, FaCog, FaSearch } from "react-icons/fa";
import "./Day36.scss";

function Day36() {
  return (
    <div class="frame36">
      <div class="center">
        <div class="taps">
          <div class="top"></div>

          <input type="radio" id="tab-1" name="rd" checked="checked" />
          <label class="tab" for="tab-1">
            <FaEye />
          </label>

          <input type="radio" id="tab-2" name="rd" />
          <label class="tab" for="tab-2">
            <FaComments />
          </label>

          <input type="radio" id="tab-3" name="rd" />
          <label class="tab" for="tab-3">
            <FaBell />
          </label>

          <input type="radio" id="tab-4" name="rd" />
          <label class="tab" for="tab-4">
            <FaCog />
          </label>

          <label class="tab search">
            <FaSearch />
          </label>

          <div class="content">
            <div class="box" id="box-1">
              <h1>Dashboard</h1>
              <p>
                <span style={{ width: "250px" }}></span>
                <span style={{ width: "270px" }}></span>
                <span style={{ width: "235px" }}></span>
                <span style={{ width: "260px" }}></span>
                <span style={{ width: "53px" }}></span>
              </p>
              <p>
                <span style={{ width: "262px" }}></span>
                <span style={{ width: "234px" }}></span>
                <span style={{ width: "246px" }}></span>
                <span style={{ width: "260px" }}></span>
                <span style={{ width: "144px" }}></span>
              </p>
            </div>

            <div class="box" id="box-2">
              <h1>Comments</h1>
              <p>
                <span style={{ width: "250px" }}></span>
                <span style={{ width: "270px" }}></span>
                <span style={{ width: "235px" }}></span>
                <span style={{ width: "260px" }}></span>
                <span style={{ width: "53px" }}></span>
              </p>
              <p>
                <span style={{ width: "262px" }}></span>
                <span style={{ width: "234px" }}></span>
                <span style={{ width: "246px" }}></span>
                <span style={{ width: "260px" }}></span>
                <span style={{ width: "144px" }}></span>
              </p>
            </div>

            <div class="box" id="box-3">
              <h1>Notifications</h1>
              <p>
                <span style={{ width: "250px" }}></span>
                <span style={{ width: "270px" }}></span>
                <span style={{ width: "235px" }}></span>
                <span style={{ width: "260px" }}></span>
                <span style={{ width: "53px" }}></span>
              </p>
              <p>
                <span style={{ width: "262px" }}></span>
                <span style={{ width: "234px" }}></span>
                <span style={{ width: "246px" }}></span>
                <span style={{ width: "260px" }}></span>
                <span style={{ width: "144px" }}></span>
              </p>
            </div>

            <div class="box" id="box-4">
              <h1>Settings</h1>
              <p>
                <span style={{ width: "250px" }}></span>
                <span style={{ width: "270px" }}></span>
                <span style={{ width: "235px" }}></span>
                <span style={{ width: "260px" }}></span>
                <span style={{ width: "53px" }}></span>
              </p>
              <p>
                <span style={{ width: "262px" }}></span>
                <span style={{ width: "234px" }}></span>
                <span style={{ width: "246px" }}></span>
                <span style={{ width: "260px" }}></span>
                <span style={{ width: "144px" }}></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day36;
