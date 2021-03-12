import React, { useState } from "react";
import "./FAQContent.css";

function FAQContent() {
  const [faqList, setFaqList] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false
  });

  const handleClick = (faqId) => {
    let _falList = { ...faqList };
    _falList[faqId] = !_falList[faqId]
    setFaqList(_falList)
    console.log(faqId, faqList);
  };

  return (
    <>
      <div className="faq-section">
        <div className="container">
          <div className="faq__wrapper" id='faq_content_1'>
            <div
              className="faq__question-wrapper"
              onClick={() => {
                handleClick("faq1");
              }}

            >
              <h3>1) เซียนเฮงคืออะไร</h3>
            </div>
            <div className={(faqList.faq1 ? "faq__answer-wrapper " : "faq__answer-wrapper hide")}>
              เซียนเฮงเป็นระบบแชทบอทที่ช่วยร้านค้า เสนอสินค้า ตอบ ปิดการขาย พร้อมรองรับจำนวนผู้ซื้อผ่านช่องทางการแชท Line และ Facebook พร้อมระบบการจัดการสินค้า ออร์เดอร์ แชท วิเคราะห์การขาย
              </div>
          </div>
          <div className="faq__wrapper" id='faq_content_2'>
            <div
              className="faq__question-wrapper"
              onClick={() => {
                handleClick("faq2");
              }}

            >
              <h3>2) เซียนเฮงมี Feature อะไรบ้าง</h3>
            </div>
            <div className={(faqList.faq2 ? "faq__answer-wrapper " : "faq__answer-wrapper hide")}>
              <li>2.1) สมัครใช้งานง่ายเพียงแค่สมัครใช้งาน ไม่เกิน 5 นาที ก็สามารถขายสินค้าได้ทันที เรามีทีมงานที่พร้อมดูแลและเข้าใจคุณ</li>
              <li>2.2) ระบบแชทบอท ไม่ต้องสอน'บอท'ใช้งานได้ทันที ที่ช่วยนำเสนอสินค้า ตอบลูกค้าหลายๆรายอย่างฉับไว และสามารถปิดการขายได้ทันที พร้อมตัดสต๊อกให้อัตโนมัติ </li>
              <li>2.3) แชทสด(Livechat) พูดคุยกับลูกค้าทุกช่องทาง Facebook Line คุณสามารถแชทกับลูกค้าได้โดยตรง และที่สำคัญคุณสามาถนำเสนอดีลสุดพิเศษให้ลูกค้าได้ทันที</li>
              <li>2.4) ระบบจัดการ Order ช่วยตรวจสอบสถานะการสั่งซื้อ เก็บบันทึกออเดอร์ของลูกค้า พร้อมตรวจสอบการชำระและ อัพเดทสถานะออเดอร์ลูกค้าได้ตลอดเวลา </li>
              <li>2.5) ระบบจัดการ Stock ช่วยจัดการสินค้าภายในร้านค้าคุณ เพิ่มสินค้าใหม่ๆ สินค้าโปรโมชั่น และดีลพิเศษได้ด้วยตัวเอง มีระบบตรวจสอบสต็อกสินค้าอย่างแม่นยำ</li>
            </div>
          </div>
          <div className="faq__wrapper" id='faq_content_3'>
            <div
              className="faq__question-wrapper"
              onClick={() => {
                handleClick("faq3");
              }}

            >
              <h3>3) การสมัครใช้งานเซียนเฮงโดย Facebook</h3>
            </div>
            <div className={(faqList.faq3 ? "faq__answer-wrapper " : "faq__answer-wrapper hide")}>
              <iframe src='https://www.youtube.com/embed/pgQYFDHx4jc' style={{ width: '100%', height: '550px' }} />
            </div>
          </div>
          <div className="faq__wrapper" id='faq_content_4'>
            <div
              className="faq__question-wrapper"
              onClick={() => {
                handleClick("faq4");
              }}

            >
              <h3>4) การสมัครใช้งานเซียนเฮงโดย Line</h3>
            </div>
            <div className={(faqList.faq4 ? "faq__answer-wrapper " : "faq__answer-wrapper hide")}>
              <iframe src='https://www.youtube.com/embed/3ce15Afx56E' style={{ width: '100%', height: '550px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQContent;
