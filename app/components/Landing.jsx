"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import "../styles/Landing.css";
import { gsap } from "gsap";

export default function Home() {
  const eyesRef = useRef([]);

  // below three will occur at same time smoothly
  const turnBgGreen = useRef(null);
  const smileRef = useRef(null);

  const rayBg = useRef(null); //this bg will go from top to bottom

  // Coin will appear after above
  const coinBg = useRef(null); //this bg will go from top to bottom

  // Create a GSAP timeline
  const tl = gsap.timeline();

  useEffect(() => {
    gsap.set(turnBgGreen.current, { backgroundColor: "#87D1EE" });
    tl.to(turnBgGreen.current, {
      backgroundColor: "green",
      duration: 0.85, 
      ease: "power2.out",
      delay: 0.3
    })
      .fromTo(smileRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "=-1") 
      .fromTo(rayBg.current, { y: -350 }, { y: 280, duration: 1.65 },"=-1")
      .fromTo(coinBg.current, { y: -300 }, { y: 280, duration: 1.65 }) 
      .fromTo(smileRef.current, { opacity: 1 }, { opacity: 0, duration: 0.5 }) 
      .to(turnBgGreen.current, {
        backgroundColor: "#87D1EE", 
        duration: 0.75, 
        ease: "power2.out", 
      },"=-0.5")
      .repeat(-1); 


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
        <h1 className="title">Decode the Language of &nbsp;Investing!!</h1>
        <div className={`avatar-container`} ref={turnBgGreen}>
          <img src="/Group8.png" alt="Avatar" className="avatar" />
          <div className="avatar-smile" ref={smileRef}>
            <img src="/avatar-smile.svg" alt="Avatar Smile" />
          </div>
          <div className="ray-background" ref={rayBg}>
            <img src="/raybg.png" alt="Bg One" />
          </div>
          <div className="ray-background" ref={coinBg}>
            <img src="/coinbg.jpeg" alt="Bg two" />
          </div>

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
