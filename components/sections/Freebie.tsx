import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Freebie = () => {
  return (
    <section id="freebie" className="pt-nav">
      <div className="w-full py-12 mt-10 freebie">
        <div className="contenedor">
          <div className="flex flex-col justify-center items-center">
                  <h2 className='text-center mb-[1rem] text-[38px] md:text-[36px] font-bold text-white mt-4'>
                    ¿Quieres una <br className="flex md:hidden" /> <span className="gradient-title">prueba gratis?</span>
                  </h2>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div
              className=" w-full h-full flex flex-col items-start justify-center p-6 md:p-12 "
            >
                <p className="gradient-subtitle font-semibold ">Comienza hoy mismo</p>

                <h2 className='mt-[10px] mb-[1rem] text-[28px] md:text-[36px] font-bold text-white'>Curso Gratuito de Web Designer</h2>

                <p className="font-light text-[16px] leading-[210%] text-white">
                  Comienza desde cero construiremos tu primer Portfolio profesional.
                </p>

                <p className="font-bold pt-4 pb-2 text-white">
                  Aprenderás sobre: 
                </p>

                <ul className="list-style-none text-white font-extralight">
                  <li> 👉 Como armar la estructura de una web </li>
                  <li>👉 Diseñarla en Figma   </li>
                  <li>👉 Maquetearla en HTML y CSS    </li>
                  <li>👉 Crear un repositorio con Git y Github   </li>
                  <li>👉 Publicarla gratis en Github Pages </li>
                </ul>
                
                <p className="font-bold pt-4 pb-2 text-white">
                  Incluye: 
                </p>
                
                <ul className="list-style-none text-white font-extralight">
                  {/* <li> 👉 4 Videos </li> */}
                  <li>👉 Guía paso a paso   </li>
                </ul>

                <Link href="https://codehackeracademy.notion.site/Web-Designer-8c169f62d5ec4e8b857a9271d1515503?pvs=4" target="_blank">
                  <button className="cta-2 text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">Comenzar</button>
                </Link>
            </div>
            
            <div
              className="w-[90%] md:w-full h-full flex flex-col items-center justify-center mt-8 lg:mt-0 mb-2 lg:mb-0 pt-0 md:pt-12"
            >
              <Image
                src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1696444215/TapaCursoGratis2_rzehja.png"
                alt=""
                width={417}
                height={371}
              />

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Freebie