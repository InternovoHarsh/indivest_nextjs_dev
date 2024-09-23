"use client";
import React from "react";
import "../styles/Features.css";
import Image from "next/image";

export default function Features() {
  return (
    <section className="featureContainer">
      <h1 className="featureHeadText">Key Features</h1>
      <div className="allFeature">
        <div className="feature">
          <div className="featureNo">01</div>
          <div className="featureContent">
            <div className="featureTitle">Indiplay</div>
            <div className="featureDesc">
            Experience the thrill of investing without real financial risk, using Indivest coins.
            </div>
          </div>
          <div className="featureImgContainer">
            <div className="imgContainer">
              <Image
                src="/featureOne.svg"
                alt="Indivest Axis Mutual Fund Logo"
                fill={true}
                priority={true}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
