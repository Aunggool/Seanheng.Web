import React from "react";
import "../../HeroSection.css";

function RegisterBlock() {
  return (
    <>
      <div className="home__hero-section">
        <div className="container">
          <div className="home__hero-content-simple-img-wrapper">
            <img
              src={"images/feature-content-simple-desktop.png"}
              alt={"Child"}
              className="home__hero-content-simple-img hide-on-desktop"
            />
            <img
              src={"images/feature-content-simple.png"}
              alt={"Child"}
              className="home__hero-content-simple-img hide-on-mobile"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterBlock;
