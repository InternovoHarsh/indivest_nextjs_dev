"use client";
import React, { useEffect, useRef, useState } from "react";
import Animation from "../custom/Animation";
import "../styles/Landing.css";

export default function Home() {
  return (
    <>
      <main className="landing">
        <h1 className="title">Decode the Language of &nbsp;Investing!!</h1>
        <Animation />
        <button className="button">Get Started</button>
      </main>
    </>
  );
}
