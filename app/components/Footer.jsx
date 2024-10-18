import React from "react";
import s from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <section className={s.footer}>
      <div className={s.footerHeadTitle}>Reach Us At</div>
      <div className={s.footerBox}>
        <div className={s.footerLeft}>
          <a className={s.footerAddress}>
            <span>
              {/* <Image src="/button/address.svg" alt="Instagram" width="30px" height="30px"/> */}
            </span>
            Unit No 521-522, 5th Floor, IJMIMA Complex, Off Link Road, Malad
            West, Mumbai 400064
          </a>
          <div className={s.footerEmail}>
            <a>
              <img src="/button/email.svg" alt="Instagram" />
            </a>
            contact@internovo.in
          </div>
          <div className={s.footerSocials}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="social/instagram.svg" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="social/linkedin.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="social/facebook.svg" alt="Facebook" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="social/youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>
        <div className={s.footerRight}>
          <form action="">
            <div className={s.inputWrapper}>
              <input type="text" placeholder="Name" className={s.inputField} />
            </div>
            <div className={s.inputWrapper}>
              <input
                type="email"
                placeholder="Email Id"
                className={s.inputField}
              />
            </div>
            <div className={s.inputWrapper}>
              <textarea
                placeholder="Messages"
                className={s.textAreaField}
              ></textarea>
            </div>
            <div className={s.submitWrapper}>
              <button className={s.submitButton}>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className={s.footerPrivacy}>
        <a href="/privacy-policy" className={s.privacyLink}>
          Our Privacy Policy
        </a>
      </div>
    </section>
  );
}
