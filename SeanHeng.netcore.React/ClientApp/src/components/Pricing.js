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
              <a href="#register" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <h3>14 วันแรก</h3>
                  <h4>ฟรี</h4>
                  <p>ใช้งานได้ทุกคุณสมบัติ</p>
                </div>
              </a>

              <a href="#register" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <h3>1 เดือน</h3>
                  <h4>฿490</h4>
                  <p>ต่อเดือน</p>
                </div>
              </a>

              <a href="#register" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <h3>3 เดือน</h3>
                  <h4>฿1,290</h4>
                  <p>จาก 1,490 บาท</p>
                </div>
              </a>

              <a href="#register" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <h3>6 เดือน</h3>
                  <h4>฿2,540</h4>
                  <p>จาก <span className="cross-out">2,940</span> บาท</p>
                </div>
              </a>

              <a href="#register" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <h3>12 เดือน</h3>
                  <h4>฿4,990</h4>
                  <p>จาก 5,880 บาท</p>
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
