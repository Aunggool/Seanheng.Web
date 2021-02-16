import React from "react";
import "./Footer.css";

import { FaFacebook, FaLine, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer__main-wrapper">
        <div className="footer__text-wapper facebook">
          <a className="social-logo" href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a className="footer__text" href="https://www.facebook.com">
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
          <aside className="social-logo" href="tel:0924329323">
            <FaPhoneAlt />
          </aside>
          <a className="footer__text" href="tel:0924329323">
            092-432-9323
          </a>
        </div>
        <div className="footer__text-wapper email">
          <a className="social-logo" href="mailto:Support@SeanHeng.com">
            <MdEmail />
          </a>
          <a className="footer__text" href="mailto:Support@SeanHeng.com">
            Support@SeanHeng.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
