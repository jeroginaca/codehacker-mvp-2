import Link from 'next/link'
import React from 'react'

const ProximasFechas = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center my-10  lg:my-[130px] ">
            <p className="gradient-subtitle font-extrabold mb-[0.7rem]">V</p>
            <p className="gradient-subtitle font-semibold ">No te quedes sin tu plaza</p>
            <h2 className='mt-[10px] mb-[2.5rem] text-[28px] md:text-[36px] font-bold text-center'>Próximas fechas para el Bootcamp</h2>
            
            <div className="contenedor flex flex-col justify-center  w-[80%] rounded-[15px] proxima-fecha py-8 px-2 md:py-[2rem] md:px-[2rem]">
                <div className="flex flex-col md:flex-row w-full justify-between items-center">
                    <div className="flex items-center justify-start -ml-16 md:-ml-0 mb-4 md:mb-0" >
                        <img src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688110066/CodeHacker/Exclamacio%CC%81n_dyeywa.png" alt="" className="w-[48px] md:mr-[10px] "/>
                        <p className="">6 de Noviembre 2023</p>
                    </div>
                    <div className="flex items-center">
                        <p className="ml-4 md:ml-0 my-4 md:my-0 mr-[5rem] md:mr-[3rem] tracking-wider ">ONLINE</p>
                        <p className="tracking-wider text-center">ÚLTIMAS PLAZAS</p>
                    </div>
                </div>
                <h2 className="text-[36px] font-bold ml-2 mt-6 mb-8 md:mb-6 lg:mb-10 tracking-wide leading-[1] md:leading-normal text-center md:text-left">Full Stack Developer</h2>
                
                <div className="hidden lg:flex justify-between items-center px-8 flex-col md:flex-row">

                    <div className="flex flex-col pr-0 lg:pr-16 ">
                        <h4 className="text-[24px] font-bold my-3 lg:my-[2.3rem] tracking-wide">Part Time</h4>
                        <p className="mb-[2.3rem] tracking-wide">Jornada Media</p>
                    </div>

                    <div className="h-[190px] rounded-full w-[4px] bg-[#06062B]"></div>

                    <div className="flex flex-col pr-0 lg:pr-16 ">
                        <h4 className="text-[24px] font-bold my-3 lg:my-[2.3rem] tracking-wide">16</h4>
                        <p className="mb-[2.3rem] tracking-wide">Semanas</p>
                    </div>

                    <div className="h-[190px] rounded-full w-[4px] bg-[#06062B]"></div>

                    <div className="flex flex-col pr-0 lg:pr-16 ">
                        <h4 className="text-[24px] font-bold mb-[1rem]  tracking-wide">Lunes, Miercoles y Viernes</h4>
                        <p className="mb-[2.3rem] mt- tracking-wide">De 18:30 a 21:30hs</p>
                        <Link href="#contact" className="proxima-fecha rounded-[10px] -mt-2 py-3 text-center text-[18px] font-[500] tracking-wider">Solicitar Información</Link>
                    </div>
                </div>

                <div className="flex lg:hidden justify-between items-center px-4 flex-col">

                    <div className="flex flex-row justify-between w-[100%]">
                        <div className="flex flex-col  ">
                            <h4 className="text-[24px] font-bold my-3 lg:my-[2.3rem] tracking-wide">Part Time</h4>
                            <p className="mb-[2.3rem] tracking-wide">Jornada Media</p>
                        </div>


                        <div className="flex flex-col  ">
                            <h4 className="text-[24px] font-bold my-3 lg:my-[2.3rem] tracking-wide">16</h4>
                            <p className="mb-[2.3rem] tracking-wide">Semanas</p>
                        </div>
                    </div>
                    
                    <div className="w-[100%] rounded-full h-[4px] bg-[#06062B]"></div>

                    <div className="flex flex-col md:flex-row mt-3 md:mt-10 mb-3 justify-between">
                        <div className="flex flex-col pr-0 lg:pr-16">
                            <h4 className="text-[24px] font-bold my-3 lg:my-[2.3rem] tracking-wide">Lunes, Miercoles y Viernes</h4>
                            <p className="mb-[2.3rem] tracking-wide">De 18:30 a 21:30hs</p>
                        </div>
                        <Link href="#contact" className="proxima-fecha rounded-[10px] text-center text-[18px] font-[500] tracking-wider flex justify-center items-center py-3">Solicitar Información</Link>
                    </div>
                </div>


            </div>

           <Link href="#contact"> <p className=" mt-[3rem] gradient-subtitle font-semibold ">Más info</p></Link>

        </div>
        </>
  )
}

export default ProximasFechas