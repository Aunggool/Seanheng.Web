import React from "react";
import { Button } from "../../Button";
import "../../HeroSection.css";

function ThirdContent() {
  return (
    <>
      <div className="home__hero-section darkBg" id="feature">
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
                <h1 className="heading">แอดมินสามารถเป็นได้มากกว่าแค่แอดมิน</h1>
                <h2 className="heading">เพียงแค่ทำงานร่วมกับเซียนเฮง</h2>
                <p className="home__hero-subtitle">
                  ไม่ว่าร้านคุณจะใหญ่ขึ้นขนาดไหน
                  แอดมินก็สามารถรับมือและดูแลลูกค้าได้อย่างแน่นอน
                </p>
                <a href="#register">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    สมัครใช้งาน
                  </Button>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper ">
                <img
                  src={"images/more-than-admin.png"}
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

export default ThirdContent;
