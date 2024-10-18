"use client"
import React from 'react'
import s from "../styles/Knowledge.module.css"
import Image from 'next/image'


const Knowledge = () => {
  return (
    <section className={s.knowledgeContainer}>
        <div className={s.knowlegdeHead}>
            Knowledge Partner
        </div>
        <div className = {s.knowledgeLogo}>
          <div className={s.imgContainer}>
          <Image
              src="/AxisMFLogo.svg"
              alt="Indivest Axis Mutual Fund Logo"
              fill={true}
              priority={true}
            />
          </div>
        </div>
    </section>
  )
}

export default Knowledge