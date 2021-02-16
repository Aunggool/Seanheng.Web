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
                <a href="#register">
                  <Button buttonSize="btn--wide" buttonColor="blue">
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
                  src={"http://localhost:45678/images/lp_02_1x.jpg"}
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
