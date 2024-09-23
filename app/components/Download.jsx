"use client";
import React from "react";
import Image from "next/image";
import "../styles/Download.css";
import Link from "next/link";

const Download = () => {
  return (
    <section className="downloadSection">
      <h2 className="downloadHeadText">Mobile Application</h2>
      <div className="secondSection">
        <div className="leftBox">
          <img src="/Group.svg" alt="horizontal mockup" />
        </div>

        <div className="rightBox">
          <div className="statsBox">
            <div className="amcBox">
              <p>AMCs</p>
              <p className="highlight">+30</p>
            </div>
            <div className="statLine"></div>
            <div className="schemeBox">
              <p>Schemes</p>
              <p className="highlight">+3200</p>
            </div>
          </div>
          <div className="storeBox">
            <div className="singlePhone">
              <img src="/rightPhoneVertical.svg" alt="Phone mockup" />
            </div>
            <div className="storeButtons">
              <Link href="#">
                <img
                  src="/indivestPlayStoreBtn.svg"
                  alt="indivest play store button"
                />
              </Link>
              <Link href="#">
                <img
                  src="/indivestAppStoreBtn.svg"
                  alt="indivest app store button"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
