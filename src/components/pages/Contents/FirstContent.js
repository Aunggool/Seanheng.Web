import React from "react";
import { Button } from "../../Button";
import "../../HeroSection.css";

function FirstContent() {
  return (
    <>
      <div className="home__hero-section darkBg">
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                {/* <div className="top-line">{topLine}</div> */}
                <h1 className="heading">
                  เซียนเฮงแชทบอท
                  <span className="subHeading">จึงเกิดขึ้น</span>
                </h1>
                <p className="home__hero-subtitle">
                  เพื่อช่วยดูแลธุรกิจให้กับคุณ ให้คุณมีเวลาไปดูแลครอบครัว
                  ซึ่งเป็นสิ่งสำคัญได้มากขึ้น
                </p>
                <a href="https://app.seanheng.com/web.merchantmgmt.biz/register?q=wzF+X4jNJESoNmPzahaeWRaCAXeNqlDC9waf11Yf3x405p7UaFmWPXEec4msKeja6yknnZw8M/Xf30LnAlC3JY645KX09ZhBaQANDju26PE=" id='register_feature_button'>
                  <Button buttonSize="btn--wide" buttonColor="blue" id='register_feature_button'>
                    สมัครใช้งาน
                  </Button>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <div className="home__hero-caption-wrapper">
                  <h3>เพื่อให้... </h3>
                  <h3>คุณได้ดูแลลูกได้มากขึ้น</h3>
                </div>
                <img
                  src={"images/lp_01_1x.jpg"}
                  alt={"Child"}
                  className="home__hero-img"
                />
              </div>
              <div className="home__hero-img-wrapper">
                <div className="home__hero-caption-wrapper">
                  <h3>เพื่อให้...</h3>
                  <h3>คุณได้มีเวลาให้กับคนที่รักคุณ</h3>
                </div>
                <img
                  src={"images/lp_02_1x.jpg"}
                  alt={"Child"}
                  className="home__hero-img"
                />
              </div>
              <div className="home__hero-img-wrapper">
                <div className="home__hero-caption-wrapper">
                  <h3>เพื่อให้...</h3>
                  <h3>คุณได้มีเวลาได้มอบความรัก</h3>
                </div>
                <img
                  src={"images/lp_03_1x.jpg"}
                  alt={"Child"}
                  className="home__hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstContent;
