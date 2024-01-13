import Image from 'next/image'
import React from 'react'
import { PaymentCard } from '../component'
import Link from 'next/link'

const Payment = () => {
  return (
    <section id="planes" className="pt-nav">

    <div className="contenedor ">
      <div className="flex flex-col justify-center items-center mt-24">
          <p className="gradient-subtitle font-semibold ">Y ahora si la parte de</p>
          <h2 className='mt-[10px] mb-[12px] text-[28px] md:text-[36px] font-bold '>PLANES DE PAGOS</h2>
          <p>Elige el que más se adecue a tus necesidades.</p>
      </div>
      <div>

      <div
          className=" w-[95%] h-auto shadow-xl rounded-[33px] md:w-[700px] mx-auto mt-8 flex flex-col items-center justify-center p-6 md:p-12  text-white hover:bg-[#020F43] bg-[#06062B] mb-12"
        >
          <div className="flex flex-col justify-center items-center ">
            
              <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={90}
                      height={90}
                      alt="logo"
              />
            
              <h3 className='text-[36px] font-bold text-center'>Promo Lanzamiento</h3>
          </div>

          <p className='mt-[15px] text-center text-[20px] leading-[1.7]'>Pago único de <b>500€</b>
          <br/>
          👉 4 meses de clases. <br/>
          👉 + de 10 proyectos. <br/>
          👉 Te ayudamos a conseguir empleo <br/>
</p>
                        
          <Link href="#contact"><p className="mt-6 gradient-subtitle font-semibold ">Más Info</p></Link>
        </div>

        {/* <PaymentCard /> */}
        
      </div>
    </div>
    </section>

  )
}

export default Payment