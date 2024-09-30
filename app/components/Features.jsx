"use client";
import React from "react";
import "../styles/Features.css";
import Image from "next/image";

const featureData = [
  {
    fNo: "01",
    fTitle: "Indiplay",
    fDesc:
      "Experience the thrill of investing without real financial risk, using Indivest coins.",
    fImg: "/featureOne.svg",
  },
  {
    fNo: "02",
    fTitle: "Large Reach",
    fDesc:
      "Access various suitable investment options customised as per your profile.",
    fImg: "/featureTwo.svg",
  },
  {
    fNo: "03",
    fTitle: "Personalised Service",
    fDesc:
      "A dedicated Indivest Executive will support you through the investment journey to help you make informed financial decisions.",
    fImg: "/featureThree.svg",
  },
  {
    fNo: "04",
    fTitle: "Simplicity",
    fDesc:
      "Enjoy our simple and intuitive user interface to make your investment decisions quickly and without confusion.",
    fImg: "/featureFour.svg",
  },
  {
    fNo: "05",
    fTitle: "Educative",
    fDesc:
      "Enjoy our simple and intuitive user interface to make your investment decisions quickly and without confusion.",
    fImg: "/featureFive.svg",
  },
];

export default function Features() {
  return (
    <section className="featureContainer">
      <h1 className="featureHeadText">Key Features</h1>
      <div className="allFeature">
        {featureData.map((item, index) => {
          // Determine if the index is even or odd
          const isOdd = index % 2 !== 0;
          return (
            <div className={`feature ${isOdd ? 'reverse' : ''}`} key={index}>
              <div className="content">
                <div className="up">
                  <div className="featureNo">{item.fNo}</div>
                  <div className="featureTitle">{item.fTitle}</div>
                </div>
                <div className="down">
                  <div className="nothing"></div>
                  <div className="featureDesc">{item.fDesc}</div>
                </div>
              </div>
              <div className="featureImgContainer">
                <div className="imgContainer">
                  <Image
                    src={item.fImg}
                    alt={`Feature Image for ${item.fTitle}`}
                    fill={true}
                    priority={true}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
