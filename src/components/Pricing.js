import React from "react";
import { IconContext } from "react-icons/lib";
import "./Pricing.css";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div id="price">
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <a href="#register" className="pricing__container-card" id='price_button_free'>
                <div className="pricing__container-cardInfo" id='price_button_free'>
                  <h3 id='price_button_free'>14 วันแรก</h3>
                  <h4 id='price_button_free'>ฟรี</h4>
                  <p id='price_button_free'>ใช้งานได้ทุกคุณสมบัติ</p>
                </div>
              </a>

              <a href="#register" className="pricing__container-card" id='price_button_1m'>
                <div className="pricing__container-cardInfo" id='price_button_1m'>
                  <h3 id='price_button_1m'>1 เดือน</h3>
                  <h4 id='price_button_1m'>฿490</h4>
                  <p id='price_button_1m'>ต่อเดือน</p>
                </div>
              </a>

              <a href="#register" className="pricing__container-card" id='price_button_3m'>
                <div className="pricing__container-cardInfo" id='price_button_3m'>
                  <h3 id='price_button_3m'>3 เดือน</h3>
                  <h4 id='price_button_3m'>฿1,290</h4>
                  <p id='price_button_3m'>จาก 1,490 บาท</p>
                </div>
              </a>

              <a href="#register" className="pricing__container-card" id='price_button_6m'>
                <div className="pricing__container-cardInfo" id='price_button_6m'>
                  <h3 id='price_button_6m'>6 เดือน</h3>
                  <h4 id='price_button_6m'>฿2,540</h4>
                  <p id='price_button_6m'>จาก <span className="cross-out">2,940</span> บาท</p>
                </div>
              </a>

              <a href="#register" className="pricing__container-card" id='price_button_12m'>
                <div className="pricing__container-cardInfo" id='price_button_12m'>
                  <h3 id='price_button_12m'>12 เดือน</h3>
                  <h4 id='price_button_12m'>฿4,990</h4>
                  <p id='price_button_12m'>จาก 5,880 บาท</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
