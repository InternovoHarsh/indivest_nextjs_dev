import React, { useState } from 'react';
import "@/app/styles/FAQ.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <span>{title}</span>
        <span className={`accordion-icon ${isActive ? 'rotate' : ''}`}>▼</span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
