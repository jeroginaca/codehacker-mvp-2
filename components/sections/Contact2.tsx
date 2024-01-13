import Image from 'next/image'
import { ContactForm } from '../component'

const Contact2 = () => {
  
  return (
    <section id="contact" className="pt-nav">

    <div className="contact-image-2 w-full mt-24 flex flex-col items-center justify-center">
        <div className=" shadow-lg rounded-lg p-6 md:p-12 bg-white flex flex-col justify-center items-center">
          <div className="flex justify-center items-center ">
                <Image 
                        src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                        width={50}
                        height={50}
                        alt="logo"
                />
                <h3 className='ml-4 md:ml-3 text-[36px] font-bold'>PONETE EN CONTACTO</h3>
            </div>
                <p className="text-center mt-2">
                Dejanos tus datos y te contactaremos <br/> para concretar una reunión
                </p>
            <div className="w-full">
                <ContactForm />
            </div>
        </div>
    </div>
    </section>

  )
}

export default Contact2