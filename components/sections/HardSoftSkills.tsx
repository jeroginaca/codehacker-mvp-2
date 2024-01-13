import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HardSoftSkills = () => {
  return (
    <div className="contenedor">
      <div className="flex flex-col justify-center items-center mt-24">
              <p className="gradient-subtitle font-semibold ">Animate a dar un gran paso</p>
              <h2 className='mt-[10px] mb-[1rem] text-[28px] md:text-[36px] font-bold text-center'>Hard & Soft Skills, <br className="md:hidden flex"/> la alianza del éxito</h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div
          className=" w-full h-full flex flex-col items-start justify-center p-6 md:p-12 "
        >
          <Image
            src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694600890/CodeHacker/AdobeStock_358963916_unnxia.png"
            alt=""
            width={417}
            height={371}
          />
              
              <h2 className='mt-4 mb-[1rem] text-[28px] md:text-[36px] font-bold '>No todo es código</h2>
          <p
            className="font-light text-[16px] opacity-70 leading-[210%]"
          >
            También vamos a aprender a desarrollar las Soft Skills. Desarrollaremos la confianza para poder vender nuestras habilidades a futuros empleadores. Y hacer networking para conseguir ofertas de empleo que ni siquiera están publicadas.

          </p>
          <Link href="#contact"><p className="mt-8 gradient-subtitle font-semibold ">Más Info</p></Link>

        </div>
        
        <div
          className=" w-full h-full flex flex-col items-start justify-center p-6 md:p-12 "
        >
          <Image
            src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694600890/CodeHacker/Mask_group_vxnitz.png"
            alt=""
            width={417}
            height={371}
          />
              
              <h2 className='mt-4 mb-[1rem] text-[28px] md:text-[36px] font-bold '>Pero hay que prácticar</h2>
          <p
            className="font-light text-[16px] opacity-70 leading-[210%]"
          >
            Para convertirte en Full Stack Developer en 16 semanas deberás dedicar cuanto más tiempo puedas a desarrollar tus habilidades, ya que todo lo que aprenderemos en 4 meses, quizá podría llevarte 1 o 2 años de aprender por tu cuenta.

          </p>
          <Link href="#contact"><p className="mt-8 gradient-subtitle font-semibold ">Más Info</p></Link>
          

        </div>
      </div>
    </div>
  )
}

export default HardSoftSkills