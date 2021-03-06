import React from "react";
import { Button } from "../../Button";
import "../../HeroSection.css";

function SecondContent() {
  return (
    <>
      <div className="home__hero-section">
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1 className="heading dark">
                  เซียนเฮง
                  <span className="subHeading dark">ทำอะไรได้อีกบ้าง</span>
                </h1>
                <p className="home__hero-subtitle dark">
                  เพราะเรารู้ว่าการตอบแชทลูกค้าจะใช้เวลามาก เซียนเฮงสามารถช่วยคุณตอบแชทและบันทึกการสั่งซื้อของลูกค้าของคุณได้อย่างถูกต้องและแม่นยำ ลูกค้าของคุณจะไม่ต้องรออีกต่อไป ทุกคำถามและทุกการสั่งซื้อ เซียนเฮงสามารถตอบให้ได้ภายในเสี้ยววินาที
                </p>
                <a href="https://app.seanheng.com/web.merchantmgmt.biz/register?q=wzF+X4jNJESoNmPzahaeWRaCAXeNqlDC9waf11Yf3x405p7UaFmWPXEec4msKeja6yknnZw8M/Xf30LnAlC3JY645KX09ZhBaQANDju26PE=" id='register_feature_button_2'>
                  <Button buttonSize="btn--wide" buttonColor="blue" id='register_feature_button_2'>
                    สมัครใช้งาน
                  </Button>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img
                  src={"images/chat-sample.png"}
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

export default SecondContent;
