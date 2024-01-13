import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogPosts = () => {
  return (
    <>
    <div className="contenedor">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
      <div className="md:col-span-3 w-full h-full flex flex-col items-start justify-center p-6 md:p-12 order-2 md:order-1">
        <p className="gradient-subtitle font-semibold ">Animate a dar un gran paso</p>
        <h2 className='mt-[10px] mb-[1rem] text-[28px] md:text-[36px] font-bold '>Comienza sin conocimientos, te guiamos desde el comienzo</h2>
        <p className="font-light text-[16px] opacity-70 leading-[210%]">
          En CodeHacker comenzamos <span className="font-bold">desde cero</span>, y te damos toda lo que necesitas para conseguir un empleo bien pagado y con proyección. Empieza tu carrera como <span className="font-bold">Full Stack Developer</span> hoy mismo.
        </p>
        <Link href="#contact">
          <button className="cta-2 text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">Consultar</button>
        </Link>
      </div>
      <div className="md:col-span-2 w-full h-full flex flex-col items-center justify-center p-0 px-6 md:px-0 md:p-12 order-1 md:order-2">
        <Image
          src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688123225/CodeHacker/remote-meeting-man-working-from-home-during-coronavirus-covid-19-quarantine-remote-office-concept_pxvvvp.png"
          alt=""
          width={417}
          height={371}
        />
      </div>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
        
        <div
          className="md:col-span-2  w-full h-full flex flex-col items-center justify-center p-0 px-6 md:px-0 md:p-12 "
        >
          <Image
            src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688123225/CodeHacker/woman-attending-online-class_w8iu2n.png"
            alt=""
            width={417}
            height={371}
          />
          
        </div>

        <div
          className="md:col-span-3 w-full h-full flex flex-col items-start justify-center p-6 md:p-12"
        >
          
              <p className="gradient-subtitle font-semibold ">Podes contar con nosotros siempre</p>
              <h2 className='mt-[10px] mb-[1rem] text-[28px] md:text-[36px] font-bold '>Mentorias personalizadas 1 a 1 de por vida</h2>
          <p
            className="font-light text-[16px] opacity-70 leading-[210%]"
          >
            Te acompañamos durante tus estudios y también <span className="font-bold"> después de graduarte</span>, ya que asesoramos tu búsqueda de empleo y siempre podrás necesitar una mano.
          </p>
           <Link href="#contact"><button className="cta-2 text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">Consultar</button></Link>
        </div>
      </div>
      
        
      
    </div>
  </>
  )
}

export default BlogPosts