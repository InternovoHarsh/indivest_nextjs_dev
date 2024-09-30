import React, { useState } from "react";
import "../styles/Video.css";

export default function Video() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleVideoClick = (index) => {
    setActiveVideo(index);
    setClicked(true)
  };

  const handleDropdownChange = (event) => {
    setActiveVideo(Number(event.target.value)); 
  };
  const videoLinks = [
    {
        url:"/video1.mp4"
    },
    {
        url:"/video1.mp4"
    },
    {
        url:"/video1.mp4"
    },
    {
        url:"/video1.mp4"
    },
    {
        url:"/video1.mp4"
    },
    {
        url:"/video1.mp4"
    },

  ]

  return (
    <section>
      <h1 className="featureHeadText">About Us</h1>

      <div className={`videoBox ${clicked? "active" : ""}`}>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`video ${activeVideo === index ? "active" : ""}`}
            onClick={() => handleVideoClick(index)}
          >
            {activeVideo === index && (
              <div className="dropdown">
                <select value={activeVideo} onChange={handleDropdownChange}>
                  {[...Array(6)].map((_, optionIndex) => (
                    <option key={optionIndex} value={optionIndex}>
                      Video {optionIndex + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
