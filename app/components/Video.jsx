import React, { useRef, useState } from "react";
import "../styles/Video.css";
import { aboutVideoData } from "../data/videoData";

export default function Video() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // State to track selected language
  const tabContainerRef = useRef(null);

  const handleVideoClick = (index) => {
    setActiveVideo(index);
  };

  const handleScrollDown = () => {
    if (tabContainerRef.current) {
      const container = tabContainerRef.current;
      const itemHeight = 70;
      container.scrollBy({
        top: itemHeight,
        behavior: "smooth",
      });
    }
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <section className="videoSection">
      <h1 className="featureHeadText">About Us</h1>
      <div className="aboutContainer">
        <div className="div">
          <div className="tabContainer" ref={tabContainerRef}>
            {aboutVideoData.map((item, index) => (
              <div
                className={`tabBox ${activeVideo === index ? "active" : ""}`}
                key={index}
                onClick={() => handleVideoClick(index)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="tabThumbnail"
                />
                <div className="tabDetails">
                  <div className="tabTitle">{item.title}</div>
                  <div className="tabDuration">{item.duration}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="arrowDown" className="">
            <button onClick={handleScrollDown}>
              <img src="/down-arrow-svg.svg" alt="" width="25px" />
            </button>
          </div>
        </div>
        <div className="videoBox">
          <div className="languageBox">
            <select value={selectedLanguage} onChange={handleLanguageChange}>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          {activeVideo !== null && (
            <video
              src={
                selectedLanguage === "Hindi"
                  ? aboutVideoData[activeVideo]?.urlHindi
                  : aboutVideoData[activeVideo]?.urlEnglish
              }
              controls
              autoPlay
              className="videoPlayer"
              key={activeVideo}
            />
          )}
        </div>
      </div>
    </section>
  );
}
