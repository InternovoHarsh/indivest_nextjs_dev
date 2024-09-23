"use client"
import React from 'react'
import "../styles/Knowledge.css"
import Image from 'next/image'

const Knowledge = () => {
  return (
    <section>
        <div className="knowlegdeHead">
            Knowledge Partner
        </div>
        <div className="knowledgeLogo">
          <div className="imgContainer">
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