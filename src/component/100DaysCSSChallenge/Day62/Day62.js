import React, { useEffect, useRef } from "react";
import "./Day62.scss";

function Day62() {
  return (
    <div class="frame62">
      <div class="plan basic" onclick="void(0);">
        <div class="title">Basic</div>
        <div class="price">
          $5<span>per month</span>
        </div>
        <div class="lines">
          <div class="line" style={{ width: "69px" }}></div>
          <div class="line" style={{ width: "59px" }}></div>
          <div class="line" style={{ width: "66px" }}></div>
          <div class="line" style={{ width: "46px" }}></div>
        </div>
      </div>

      <div class="plan pro" onclick="void(0);">
        <div class="title">Pro</div>
        <div class="price">
          $10<span>per month</span>
        </div>
        <div class="lines">
          <div class="line" style={{ width: "69px" }}></div>
          <div class="line" style={{ width: "59px" }}></div>
          <div class="line" style={{ width: "66px" }}></div>
          <div class="line" style={{ width: "46px" }}></div>
        </div>
      </div>

      <div class="plan premium" onclick="void(0);">
        <div class="title">Premium</div>
        <div class="price">
          $20<span>per month</span>
        </div>
        <div class="lines">
          <div class="line" style={{ width: "69px" }}></div>
          <div class="line" style={{ width: "59px" }}></div>
          <div class="line" style={{ width: "66px" }}></div>
          <div class="line" style={{ width: "46px" }}></div>
        </div>
      </div>

      <div class="datas">
        <div class="data users">
          <div class="text">
            <span class="left">5 Users</span>
            <span class="right">100 Users</span>
          </div>
          <div class="line">
            <div class="fill"></div>
          </div>
        </div>

        <div class="data gb">
          <div class="text">
            <span class="left">20 GB</span>
            <span class="right">200 GB</span>
          </div>
          <div class="line">
            <div class="fill"></div>
          </div>
        </div>

        <div class="data projects">
          <div class="text">
            <span class="left">1 Project</span>
            <span class="right">50 Projects</span>
          </div>
          <div class="line">
            <div class="fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day62;
