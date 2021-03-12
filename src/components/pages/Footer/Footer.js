import React from "react";
import "./Footer.css";

import { FaFacebook, FaLine, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer__main-wrapper">
        <div className="footer__text-wapper facebook">
          <a className="social-logo" href="https://www.facebook.com/seanhengchatbot" id='fb_footer'>
            <FaFacebook />
          </a>
          <a className="footer__text" href="https://www.facebook.com/seanhengchatbot" id='fb_footer'>
            เซียนเฮงแชทบอท
          </a>
        </div>
        <div className="footer__text-wapper line">
          <a className="social-logo" href="https://line.me/R/ti/p/@SeanHeng" id='line_footer'>
            <FaLine />
          </a>
          <a className="footer__text" href="https://line.me/R/ti/p/@SeanHeng" id='line_footer'>
            @SeanHeng
          </a>
        </div>
        <div className="footer__text-wapper phone">
          <aside className="social-logo" href="tel:0931646553" id='mobile_footer'>
            <FaPhoneAlt />
          </aside>
          <a className="footer__text" href="tel:0931646553" id='mobile_footer'>
            093-164-6553
          </a>
        </div>
        <div className="footer__text-wapper email">
          <a className="social-logo" href="mailto:support.admin@seanheng.com" id='email_footer'>
            <MdEmail />
          </a>
          <a className="footer__text" href="mailto:support.admin@seanheng.com" id='email_footer'>
            support.admin@seanheng.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
