import React from 'react'

const IcoNHeading = () => {
  return (
    <div>IcoNHeading</div>
  )
}

export default IcoNHeading



// "use client"

// import Image from 'next/image'
// import Link from 'next/link'
// import { NavLinks, NavLinksResp } from '.'
// import { useEffect, useState } from 'react';

// const Navbar = () => {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 750) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className={`navbar flex justify-between items-center  text-white fixed w-full pl-[0.5rem] pr-[1.7rem] md:px-[3rem]  z-[10000] ${scrolling ? 'gradient-bg' : ''}`}>
//         <Link href="/">
//           <Image 
//             src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
//             width={95}
//             height={95}
//             alt="logo"
//           />
//         </Link>

//         <NavLinks />

//         <Link href="#contact"><button className="hidden md:flex text-[20px]  py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px] bg-transparent">Recursos Gratis</button></Link> 
         
//         <NavLinksResp />
//       </div>

//     </>
//   )
// }

// export default Navbar