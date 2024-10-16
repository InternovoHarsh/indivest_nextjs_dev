import React, { useState } from "react";
import "../styles/FAQ.css";
import { accordionDataOne, accordionDataTwo } from "../data/faqData";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexTwo, setActiveIndexTwo] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleToggleTwo = (index) => {
    setActiveIndexTwo(activeIndexTwo === index ? null : index);
  };

  return (
    <div className="accordion flex justify-around">
      <div>
      {accordionDataOne.map((item, index) => (
        <div key={index} className="accordionItem">
          <div
            className={`accordionTitle ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
          </div>
          {activeIndex === index && (
            <div className="accordionContent">{item.content}</div>
          )}
        </div>
      ))}
      </div>
<div>
{accordionDataTwo.map((item, index) => (
        <div key={index} className="accordionItem">
          <div
            className={`accordionTitle ${activeIndexTwo === index ? "active" : ""}`}
            onClick={() => handleToggleTwo(index)}
          >
            {item.title}
            <span className="arrow">{activeIndexTwo === index ? "▲" : "▼"}</span>
          </div>
          {activeIndexTwo === index && (
            <div className="accordionContent">{item.content}</div>
          )}
        </div>
      ))}
</div>
    </div>
  );
};

export default FAQ;
