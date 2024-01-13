import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Objetivos = () => {
  return (
    <div className="mt-12">
      <div className="contenedor w-[95%] xl:w-full gradient-bg px-[5rem] lg:py-[5rem] py-[3rem] rounded-[20px]">
            <div className="programa-title -ml-8 lg:ml-8 lg:mb-[1rem]">
                <h2 className="text-[36px] lg:text-[48px] uppercase font-bold">Objetivos</h2>
            </div>

            <div className="flex flex-col w-full md:w-[90%] md:ml-16 ml-0">
                <div className="unidad-1 w-full flex flex-col justify-center items-start">
                    <div className="flex md:flex-row flex-col justify-start items-start">
                    <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={50}
                      height={50}
                      alt="logo"
                      className="-ml-12 mr-6"
                    />
                        <p className="font-extralight md:text-[20px] -ml-8 md:ml-0 w-[300px] md:w-full">
                        En el camino de la programación no hay una sola forma de hacer las cosas. Nosotros aprenderemos una de las tantas que hay, y ese es el secreto, seleccionar algunas tecnologías y especializarnos en ellas. De esta manera nos será más sencillo concentrarnos en un tema puntual y no perdernos entre toda la información que podemos encontrar gratis por internet.
                        </p>
                    </div>
                </div>
                <div className="unidad-1 w-full flex flex-col justify-center items-start">
                    <div className="flex md:flex-row flex-col justify-start items-start">
                    <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={50}
                      height={50}
                      alt="logo"
                      className="-ml-12 mr-6"
                    />
                        <p className="font-extralight md:text-[20px] -ml-8 md:ml-0 w-[300px] md:w-full">
                        Tampoco desperdiciaras tu tiempo buscando videos de Youtube para entender lo que hablamos en la clase ya que estará todo explicado en los apuntes. Al finalizar cada proyecto tendrás una aplicación publicada en la web que podrás poner en tu portfolio y conseguir un trabajo.
                        </p>
                    </div>
                </div>
                <div className="unidad-1 w-full flex flex-col justify-center items-start">
                    <div className="flex md:flex-row flex-col justify-start items-start">
                    <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={50}
                      height={50}
                      alt="logo"
                      className="-ml-12 mr-6"
                    />
                        <p className="font-extralight md:text-[20px] -ml-8 md:ml-0 w-[300px] md:w-full">
                        Si bien puedes encontrar toda la info que necesitas para ser Full Stack Developer gratis por internet, es fácil perder el rumbo, desmotivarse cuando no te salga algo y así perder interés. 
Por eso nuestro objetivo es darte una guía que te va a llevar por todos los conceptos de forma clara, práctica y sencilla. Vas a poder leerla y releerla para conseguir un excelente nivel en las tecnologías que aprendas. 
Cuando termines tus 4 meses de Bootcamp te sentirás seguro y motivado tanto para salir a buscar un empleo como para seguir aprendiendo más y más.
                        </p>
                    </div>
                </div>
                
                
                       
            </div>
        </div>
      </div>
  )
}

export default Objetivos