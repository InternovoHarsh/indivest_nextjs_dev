import React from "react";
import s from "../styles/Documents.module.css";

export default function Documents() {
  return (
    <section className={s.document}>
      <div className={s.docLeft}>
        <p>Don’t have your documents yet?</p>
        <button>Apply now</button>
      </div>
      <div className={s.docRight}>
        <img src="/documentStockImage.svg" alt="" />
      </div>
    </section>
  );
}
