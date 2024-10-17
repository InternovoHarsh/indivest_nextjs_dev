import React, { useState } from "react";
import "../styles/FAQ.css";
import { accordionDataOne, accordionDataTwo } from "../data/faqData";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexTwo, setActiveIndexTwo] = useState(null);

  const handleToggle = (index, activeSetter, currentActiveIndex) => {
    activeSetter(currentActiveIndex === index ? null : index);
  };

  const renderAccordionItems = (data, activeIndex, setActiveIndex) =>
    data.map((item, index) => (
      <div key={index} className="accordionItem">
        <div
          className={`accordionTitle ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleToggle(index, setActiveIndex, activeIndex)}
        >
          <p>{item.title}</p>
          <span className="arrow">
            <img
              src={activeIndex === index ? "/up-arrow.svg" : "/down-arrow-svg.svg"}
              alt={activeIndex === index ? "Up Arrow" : "Down Arrow"}
              width="15px"
            />
          </span>
        </div>
        {activeIndex === index && <div className="accordionContent">{item.content}</div>}
      </div>
    ));

  return (
    <div className="accordion">
      <div className="faq-header">FAQ</div>
      <div className="faq-container flex justify-around">
        <div>{renderAccordionItems(accordionDataOne, activeIndex, setActiveIndex)}</div>
        <div>{renderAccordionItems(accordionDataTwo, activeIndexTwo, setActiveIndexTwo)}</div>
      </div>
    </div>
  );
};

export default FAQ;
