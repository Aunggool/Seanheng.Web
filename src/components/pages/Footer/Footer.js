import React from "react";
import "./Footer.css";

import { FaFacebook, FaLine, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer__main-wrapper">
        <div className="footer__text-wapper facebook">
          <a className="social-logo" href="https://www.facebook.com/seanhengchatbot">
            <FaFacebook />
          </a>
          <a className="footer__text" href="https://www.facebook.com/seanhengchatbot">
            เซียนเฮงแชทบอท
          </a>
        </div>
        <div className="footer__text-wapper line">
          <a className="social-logo" href="https://line.me/R/ti/p/@SeanHeng">
            <FaLine />
          </a>
          <a className="footer__text" href="https://line.me/R/ti/p/@SeanHeng">
            @SeanHeng
          </a>
        </div>
        <div className="footer__text-wapper phone">
          <aside className="social-logo" href="tel:0931646553">
            <FaPhoneAlt />
          </aside>
          <a className="footer__text" href="tel:0931646553">
            093-164-6553
          </a>
        </div>
        <div className="footer__text-wapper email">
          <a className="social-logo" href="mailto:support.admin@seanheng.com">
            <MdEmail />
          </a>
          <a className="footer__text" href="mailto:support.admin@seanheng.com">
            support.admin@seanheng.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
