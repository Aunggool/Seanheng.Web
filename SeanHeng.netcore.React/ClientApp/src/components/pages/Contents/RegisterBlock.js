import React from "react";
import { Button } from "../../Button";
import "../../HeroSection.css";

function FourthContent() {
  return (
    <>
      <div className="home__hero-section" id="register">
        <div className="container">
          <div className="home__hero-register-wrapper">
            <label className="home__hero-register-label" for="">
              อีเมลล์
            </label>
            <input className="home__hero-register-email" type="text" />
            <button className="home__hero-register-button">
              สมัครใช้งาน
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourthContent;
