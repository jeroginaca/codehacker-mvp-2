import Link from 'next/link'
import React from 'react'

const Conviertete = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className=" w-4/5 md:w-[900px] conviertete my-24 p-6 md:p-12  flex md:flex-row flex-col justify-between items-center ">
        <div>
          <h3 className='text-[36px] font-bold text-white'>¡Conviertete en CodeHacker!</h3>
          <p className="text-white mt-6">No esperes más, con nuestro curso GRATUITO<br/> podras comenzar tu carrera hoy mismo.</p>
        </div>
        <Link href="https://codehackeracademy.notion.site/Web-Designer-8c169f62d5ec4e8b857a9271d1515503?pvs=4" target="_blank"><button className="cta-2 text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">
          Comenzar
        </button></Link>  
      </div>
    </div>
  )
}

export default Conviertete