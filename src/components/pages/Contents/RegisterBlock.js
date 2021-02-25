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
            <a href='https://app.seanheng.com/web.merchantmgmt.biz/register?q=wzF+X4jNJESoNmPzahaeWRaCAXeNqlDC9waf11Yf3x405p7UaFmWPXEec4msKeja6yknnZw8M/Xf30LnAlC3JY645KX09ZhBaQANDju26PE=' className="nav-links" >
              <button className="home__hero-register-button" >
                สมัครใช้งาน
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourthContent;
