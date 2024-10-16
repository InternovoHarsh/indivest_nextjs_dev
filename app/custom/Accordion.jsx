import React, { useState } from 'react';
import "@/app/styles/FAQ.css";

const Accordion = ({ title, content, isActive, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onToggle}>
        <span>{title}</span>
        <span className={`accordion-icon ${isActive ? 'rotate' : ''}`}>▼</span>
      </div>
      {<div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
