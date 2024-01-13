import Link from 'next/link'
import React from 'react'

const HeroHeading = () => {
  return (
    <div className="hero-content top-[65%] md:top-[62%] lg:top-[25%] contenedor pl-12">
            <h1 className="title font-bold leading-[1.1]"><span className="text-[34px] md:text-[42px] lg:text-[64px]">Bootcamp </span> <br /><span className="gradient-title text-[48px] md:text-[64px] lg:text-[96px]">Full Stack</span><br /> <span className="text-[48px] md:text-[64px] lg:text-[96px]">Developer</span> </h1>
            <Link href="#contact">
                <button className="cta text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">Reserva tu plaza</button>
            </Link>
        </div>
  )
}

export default HeroHeading