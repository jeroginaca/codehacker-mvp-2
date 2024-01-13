"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // para el envio del formulario.


// service_bkcfrpq
// template_w0kswjk
// 0Qq55mWZtTS9srITI

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef();
   const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
   })

   const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

   const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_bkcfrpq",
      "template_w0kswjk",
      {
        from_name: form.name,
        to_name: "CodeHacker Academy",
        form_email: "gorelaxproductions@gmail.com",
        email: form.email,
        message: form.message,
      },
      "0Qq55mWZtTS9srITI"
    ) 
    .then(
      () => {
        setLoading(false);
        alert("Gracias, te responderemos cuanto antes");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Algo salio mal, prueba de nuevo");
      }
    );
   }

   return (
    <>
        
      <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-start">
      <div className="flex  flex-col md:flex-row">

          <form            
            onSubmit={handleSubmit}
            className='mt-10 flex flex-col gap-8 w-full'
            >
            <div className="flex mt-8 flex-col md:flex-row gap-8">
              <label className='flex flex-col'>
                <span className=' font-medium mb-4'>Nombre y Apellido</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="¿Cuál es tu nombre completo?"
                  className='bg-[#f8f8f8] w-[300px] md:w-[600px] py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium'
                  />
              </label>
              <label className='flex flex-col'>
                {/* <span className=' font-medium mb-4'>Email</span>
                <input
                  type='text'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="¿Cuál es tu email?"
                  className='bg-[#f8f8f8] md:w-[300px] py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium'
                /> */}
              {/* <textarea
                rows={1}
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="¿Cuál es tu email?"
                className='bg-[#f8f8f8] py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium'
              /> */}
              </label>
            </div>
            <label className='flex flex-col'>
              <span className=' font-medium mb-4'>Medio de Contacto</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Dejanos tu email o tu teléfono, lo que te sea más comodo para que te contactemos.'
                className='bg-[#f8f8f8] py-4 px-6 placeholder:text-secondary  rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='cta-2 text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]'
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div> 

        
      </div>
      </div>
      
    </>
    )
}

export default ContactForm

// "use client"
// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser"; 

// const ContactForm = () => {
//   const [loading, setLoading] = useState(false)
//   const formRef = useRef();
//    const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//    })

//    const handleChange = (e: any) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//    const handleSubmit = (e: any) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs.send(
//       "service_bkcfrpq",
//       "template_w0kswjk",
//       {
//         from_name: form.name,
//         to_name: "CodeHacker Academy",
//         form_email: "gorelaxproductions@gmail.com",
//         message: form.message,
//       },
//       "0Qq55mWZtTS9srITI"
//     ) 
//     .then(
//       () => {
//         setLoading(false);
//         alert("Gracias, te respondere cuanto antes");

//         setForm({
//           name: "",
//           email: "",
//           message: "",
//         });
//       },
//       (error) => {
//         setLoading(false);
//         console.error(error);

//         alert("Algo salio mal, prueba de nuevo");
//       }
//     );
//    }
//   return (
//     <form 
//     onSubmit={handleSubmit}
//     className="flex flex-col justify-center items-center">
//       <div className="flex flex-col items-start">
//       <div className="flex mt-8 flex-col md:flex-row">
//         <div>
//           <label htmlFor="" className="w-full">
//             Nombre:
//             <input
//               type="text"
//               name="name"
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label className="w-full">
//             Teléfono:
//             <input
//               type="tel"
//               name="phone"
//               onChange={handleChange}
//             />
//           </label>
//         </div>
//       </div>
//       <div className="mt-6">
//         <label htmlFor="" className="w-full">
//           Email:
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       </div>
//       <button type="submit" className=" bg-[#1E6FFF]  py-4 px-24 rounded-[15px] font-semibold mt-8">Enviar</button>
//     </form>
//   )
// }

// export default ContactForm