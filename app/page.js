"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Landing from "./components/Landing";
import Download from "./components/Download";
import Navbar from "./components/Navbar";
import Knowledge from "./components/Knowledge";
import Features from "./components/Features";
import Video from "./components/Video";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
        <Navbar />
      <div className="container">
        <Landing />
        <Download />
        <Knowledge />
        <Features />
        <Video/>
        <FAQ/>
      </div>
    </>
  );
}
