import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Techs } from '.'

const TechsWebDesign = () => {
  return (
    <div className='relative'>
        <h1 className="title  text-white text-center font-bold  mb-6">
                        <span className="text-[34px] md:text-[42px] lg:text-[48px]">    ¿Qué vas a aprender?</span>
                        
                    </h1>

            <div className="contenedor grid grid-cols-1 md:grid-cols-3 gap-4">
         
            <div className=" p-4">
                <Image 
                    src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697118130/Group_481927_aoej5v.png"
                    width={433}
                    height={392}
                    alt='img'
                    className=''
                />
            </div>
            
            
            <div className=" p-4">
                <Image 
                    src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697118130/Group_481928_a7pi7h.png"
                    width={433}
                    height={392}
                    alt='img'
                    className=''
                />
            </div>


            <div className=" p-4">
                <Image 
                    src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697118411/Group_481929_o8r1fh.png"
                    width={433}
                    height={392}
                    alt='img'
                    className=''
                />
            </div>
        </div>

        <h1 className="title  text-white text-center font-bold  mt-10">
            <span className="text-[34px] md:text-[42px] lg:text-[48px]">Aplica los conocimientos en tus<br/>proyectos y conviertete en Freelancer</span>
        </h1>
        <p className="text-white/70 text-center mt-6 text-[24px]">
        Comienza a crear Landing Pages para pequeños<br/>comercios o emprendimientos
        </p>
        <div className="flex justify-center items-center w-full">
        <Link href="https://codehackeracademy.notion.site/Web-Designer-8c169f62d5ec4e8b857a9271d1515503?pvs=4" target="_blank"><button className="cta-2 text-[20px] mt-10 py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">
          Comenzar
        </button></Link>  
        </div>
        
        <h1 className="title  text-white text-center font-bold  mt-24">
            <span className="text-[34px] md:text-[42px] lg:text-[48px]">👇<br/>Continua estudiando con nuestro<br/>Bootcamp Full Stack Developer</span>
        </h1>
        <div className="relative w-full flex justify-center items-center mt-52">

             <Techs/>
        </div>
    </div>
  )
}

export default TechsWebDesign