"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleNavbar = () => setNavOpen(!navOpen);
  const closeNavbar = () => setNavOpen(false);

  const links = ["Home", "Features", "About Us", "Media", "Help & Support"];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navContainer ${scroll ? "scrolled" : ""}`}>
      <div className="nav">
      <nav className={`nav-links-pc `}>
        <Link href="/" onClick={closeNavbar}>
          <Image
            src="/Indivest Svg Logo.svg"
            alt="Internovo Ventures Logo"
            width={100}
            height={100}
            priority={true}
            className="logo"
          />
        </Link>
        {links.map((item) => (
          <Link
            key={item}
            href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
            onClick={closeNavbar}
            className="nav-link"
          >
            {item}
          </Link>
        ))}
        <Link href={`#`} className="nav-link-login">
          Login/SignUp
        </Link>
      </nav>

      <nav className="nav-mobile">
        <div className="mobile-logo">
          <Link href="/" onClick={closeNavbar}>
            <Image
              src="/Indivest Svg Logo.svg"
              alt="Internovo Ventures Logo"
              width={100}
              height={100}
              priority={true}
              className="logo"
            />
          </Link>
        </div>
        <div className="menu-bar" onClick={toggleNavbar}>
          <Image
            src="/menu.svg"
            alt="Menu"
            width={30}
            height={30}
            priority={true}
            className="logo"
          />
        </div>
        <nav className={`nav-mobile-opened-view ${navOpen ? "active" : ""}`}>
          <div className="cross-bar" onClick={closeNavbar}>
            <Image
              src="/x.svg"
              alt="Close Menu"
              width={30}
              height={30}
              priority={true}
              className="logo"
            />
          </div>
          <div className="nav-links-mobile">
            <Link href={`#`} onClick={closeNavbar} className="nav-link-login">
              Login/SignUp
            </Link>
            {links.map((item) => (
              <Link
                key={item}
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                onClick={closeNavbar}
                className="nav-link"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
