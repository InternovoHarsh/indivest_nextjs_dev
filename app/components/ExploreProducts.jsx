import Image from "next/image";
import React from "react";
import s from "../styles/Explore.module.css"

export default function ExploreProducts() {
  return (
    <section>
      <div className={s.exploreHeadText}>Explore Our Other Products</div>

      <div className={s.exploreImgContainer}>
        <Image
          src="/exploreProduct.svg"
          alt="Explore New Products"
          fill={true}
          priority={true}
        />
      </div>
    </section>
  );
}
