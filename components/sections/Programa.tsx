import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Programa = () => {
  return (
    <section id="programa" className="pt-nav">
        <div className="contenedor w-[90%] xl:w-full gradient-bg p-[5rem] rounded-[20px]">
            <div className="programa-title -ml-10 lg:ml-8 lg:mb-[1rem]">
                <h2 className="text-[36px] lg:text-[48px] uppercase font-bold">Programa</h2>
                <p className='text-[12px] lg:text-[16px] text-white/70'>Duración: 16 semanas - Lunes, Miercoles y Viernes de 18:30 a 21:30hs</p>
            </div>

            <div className="flex flex-col md:flex-row w-full flex-wrap items-start ml-0 md:ml-16">
                <div className="unidad-1 w-full md:w-[290px] flex flex-col justify-center items-start">
                    <div className="flex justify-center items-center -ml-12">
                    <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={50}
                      height={50}
                      alt="logo"
                    />
                        <h3 className='text-[36px] font-bold'>Unidad 1</h3>
                    </div>
                        <ul className='mt-2'>
                            <li><Link href="#">Figma</Link></li>
                            <li><Link href="#">HTML5</Link></li>
                            <li><Link href="#">CSS3</Link></li>
                            <li><Link href="#">Git / Github</Link></li>
                            <li><Link href="#">Chat GPT</Link></li>
                            <li><Link href="#">Linked In</Link></li>
                        </ul>
                </div>
                <div className="unidad-1 w-full md:w-[290px] flex flex-col justify-center items-start">
                    <div className="flex justify-center items-center -ml-12">
                        <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={50}
                      height={50}
                      alt="logo"
                    />
                        <h3 className='text-[36px] font-bold'>Unidad 2</h3>
                    </div>
                        <ul className='mt-2'>
                            <li><Link href="#">Flex Box y CSS Grid</Link></li>
                            <li><Link href="#">Tailwind CSS</Link></li>
                            <li><Link href="#">Terminal (Linea de comandos)</Link></li>
                            <li><Link href="#">Javascript</Link></li>
                            <li><Link href="#">The DOM</Link></li>
                        </ul>
                </div>
                <div className="unidad-1 w-full md:w-[290px] flex flex-col justify-center items-start">
                    <div className="flex justify-center items-center -ml-12">
                        <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={50}
                      height={50}
                      alt="logo"
                    />
                        <h3 className='text-[36px] font-bold'>Unidad 3</h3>
                    </div>
                        <ul className='mt-2'>
                            <li><Link href="#">React APPs:</Link></li>
                            <li><Link href="#">Movie APP</Link></li>
                            <li><Link href="#">Todo List</Link></li>
                            <li><Link href="#">Restaurant Landing Page</Link></li>
                            <li><Link href="#">Youtube Clone</Link></li>
                            <li><Link href="#">Spotify Clone</Link></li>
                            <li><Link href="#">Portfolio 3D</Link></li>
                        </ul>
                </div>
                <div className="unidad-1 w-full md:w-[290px] flex flex-col justify-center items-start">
                    <div className="flex justify-center items-center -ml-12">
                        <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={50}
                      height={50}
                      alt="logo"
                    />
                        <h3 className='text-[36px] font-bold'>Unidad 4</h3>
                    </div>
                        <ul className='mt-2'>
                            <li><Link href="#">NextJS Full Stack APPs:</Link></li>
                            <li><Link href="#">Prompt Sharing</Link></li>
                            <li><Link href="#">Car Hub</Link></li>
                            <li><Link href="#">Twitter Clone</Link></li>
                            <li><Link href="#">Blog</Link></li>
                        </ul>
                </div>              
            </div>
        </div>

        </section>
  )
}

export default Programa