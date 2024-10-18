"use client";
import React from "react";
import s from "../styles/Features.module.css";
import Image from "next/image";
import { featureData } from "../data/featureData";

export default function Features() {
  return (
    <section className={s.featureContainer}>
      <h1 className={s.featureHeadText}>Key Features</h1>
      <div className={s.allFeature}>
        {featureData.map((item, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <div
              className={`${s.feature} ${isOdd ? s.reverse : ""}`}
              key={index}
            >
              <div className={s.content}>
                <div className={s.up}>
                  <div className={s.featureNo}>{item.fNo}</div>
                  <div className={s.featureTitle}>{item.fTitle}</div>
                </div>
                <div className={s.down}>
                  <div className={s.nothing}></div>
                  <div className={s.featureDesc}>{item.fDesc}</div>
                </div>
              </div>
              <div className={s.featureImgContainer}>
                <div className={s.imgContainer}>
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
