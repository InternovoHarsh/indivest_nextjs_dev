"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import "../styles/Landing.css";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const eyesRef = useRef([]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    // const handleMouseMove = (event) => {
    //   eyesRef.current.forEach((eye) => {
    //     const rect = eye.getBoundingClientRect();
    //     const eyeX = rect.left + rect.width / 2;
    //     const eyeY = rect.top + rect.height / 2;
    //     const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
    //     const pupil = eye.querySelector('.pupil');
    //     const pupilX = 10 * Math.cos(angle);
    //     const pupilY = 10 * Math.sin(angle);
    //     pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    //   });
    // };
    const handleMouseMove = (event) => {
      const avatarContainer = document.querySelector(".avatar-container");
      const rect = avatarContainer.getBoundingClientRect();

      // Calculate mouse position relative to the document
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Calculate boundaries of the avatar container
      const containerLeft = rect.left;
      const containerRight = rect.right;
      const containerTop = rect.top;
      const containerBottom = rect.bottom;

      // Check if mouse pointer is outside the avatar container
      if (
        mouseX < containerLeft ||
        mouseX > containerRight ||
        mouseY < containerTop ||
        mouseY > containerBottom
      ) {
        eyesRef.current.forEach((eye) => {
          const rect = eye.getBoundingClientRect();
          const eyeX = rect.left + rect.width / 2;
          const eyeY = rect.top + rect.height / 2;
          const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
          const pupil = eye.querySelector(".pupil");
          const pupilX = 10 * Math.cos(angle);
          const pupilY = 10 * Math.sin(angle);
          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <main className="landing">
        <h1 className="title">
          Decode the Language of &nbsp;
          <button onClick={handleToggle} className="invest-title">
            Investing!!
          </button>
        </h1>
        <div className={`avatar-container ${toggle ? "active" : ""}`}>
          <img src="/Group8.png" alt="Avatar" className="avatar" />
          <div className="eye-container">
            <div className="eye" ref={(el) => (eyesRef.current[0] = el)}>
              <div className="pupil"></div>
            </div>
            <div className="eye" ref={(el) => (eyesRef.current[1] = el)}>
              <div className="pupil"></div>
            </div>
          </div>
        </div>
        <button className="button">Get Started</button>
      </main>
    </>
  );
}
