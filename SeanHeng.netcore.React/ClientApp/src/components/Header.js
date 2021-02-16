import React from "react";
import './Header.css'


function Header() {
  return (
      <div
        className="header__container"
      >
        <div className="header__row header__text-center">
          <span>เรารู้ว่าการ</span>
          <span className="header__text-underline">ดูแลครอบครัว</span>
        </div>
        <div className="header__row header__text-center">
          <span> ไปพร้อมกับ</span>
        </div>
        <div className="header__row header__text-center">
          <span>การ</span>
          <span className="header__text-underline">จัดการธุรกิจออนไลน์</span>
        </div>
        <div className="header__row header__text-center">
          <span className="header__text-bolder-red">ไม่ใช่เรื่องง่าย</span>
        </div>
      </div>
  );
}

export default Header;
