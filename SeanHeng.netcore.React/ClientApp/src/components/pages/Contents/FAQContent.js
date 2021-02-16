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
    let _falList = {...faqList};
    _falList[faqId] = !_falList[faqId]
    setFaqList(_falList)
    console.log(faqId, faqList);
  };

  return (
    <>
      <div className="faq-section">
        <div className="container">
          <div className="faq__wrapper">
            <div
              className="faq__question-wrapper"
              onClick={() => {
                handleClick("faq1");
              }}
            >
              <h3>1) เซียนเฮงทำงานอย่างไร</h3>
            </div>
              <div className={(faqList.faq1?"faq__answer-wrapper ":"faq__answer-wrapper hide")}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
          </div>
          <div className="faq__wrapper">
            <div
              className="faq__question-wrapper"
              onClick={() => {
                handleClick("faq2");
              }}
            >
              <h3>1) เซียนเฮงทำงานอย่างไร</h3>
            </div>
              <div className={(faqList.faq2?"faq__answer-wrapper ":"faq__answer-wrapper hide")}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
          </div>
          <div className="faq__wrapper">
            <div
              className="faq__question-wrapper"
              onClick={() => {
                handleClick("faq3");
              }}
            >
              <h3>1) เซียนเฮงทำงานอย่างไร</h3>
            </div>
              <div className={(faqList.faq3?"faq__answer-wrapper ":"faq__answer-wrapper hide")}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
          </div>
          <div className="faq__wrapper">
            <div
              className="faq__question-wrapper"
              onClick={() => {
                handleClick("faq4");
              }}
            >
              <h3>1) เซียนเฮงทำงานอย่างไร</h3>
            </div>
              <div className={(faqList.faq4?"faq__answer-wrapper ":"faq__answer-wrapper hide")}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQContent;
