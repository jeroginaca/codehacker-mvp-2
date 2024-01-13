import Link from 'next/link'
import React from 'react'
import { HeroHeading, Techs, VideoBackground } from '.'
import Image from 'next/image'
import TechsWebDesign from './TechsWebDesign'

const HeroCursoGratis = () => {
  return (
  
    <div>


        <div className="relative flex flex-col justify-center items-center pt-32 md:pt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh] w-[100%]">              
                <div className="hero-content contenedor lg:-mt-8 mt-0 pl-12 flex flex-col justify-center items-start">
                    <h1 className="title font-bold leading-[1.1] -ml-12 md:ml-0">
                        <span className="text-[34px] md:text-[42px] lg:text-[52px]">Curso Gratis de </span>
                        <br />
                        <span className="gradient-title-2 text-[48px] md:text-[64px] lg:text-[96px]">Web Design</span>
                        <br />
                        <span className="text-[34px] md:text-[42px] lg:text-[52px]">Para Principiantes</span>
                    </h1>
                    <Image 
                        src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697116864/Iconos_h1pqlb.png"
                        width={324}
                        height={75}
                        alt='img'
                        className='-ml-20 md:-ml-9 mt-2'
                    />
                </div>
                <div className="flex justify-center">
                   
                    <Image 
                        src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697115813/Portfolio_HTML_shapes_hbbwur.png"
                        width={660}
                        height={852}
                        alt='img'
                    />
                    
                </div>
            </div>

                <Image 
                    src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697116200/arrow_fjxbw2.png"
                    width={217}
                    height={82}
                    alt='img'
                    className='absolute bottom-4 z-40 hidden md:block'
                />


            {/* <Techs/> */}

           

        
        </div>

    </div>
  )
}

export default HeroCursoGratis