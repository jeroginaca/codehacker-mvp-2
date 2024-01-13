"use client"

import { navLinks } from '@/constants';
import React, { useState } from 'react'

const NavLinksResp = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false)

    return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
    <img 
      src={toggle ? "https://res.cloudinary.com/dr3cvyonp/image/upload/v1688054831/CodeHacker/Menu_rrc9vh.png" : "https://res.cloudinary.com/dr3cvyonp/image/upload/v1688054831/CodeHacker/Menu_rrc9vh.png"} 
      alt="menu"
      className="w-[30px] cursor-pointer"
      onClick={() => setToggle(!toggle)}
    />
    <div className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-20 rounded-lg -right-8 mx-4 my-2 w-2/3 freebie z-10`}>
      <ul className="list-none flex justify-end items-start flex-col gap-4 py-2">
          {navLinks.map((link) => (
            <li key={link.id} className={`${
              active === link.title ? "text-white" : "text-white"
            } font-poppins font-medium cursor-pointer text-2xl my-4 ml-4 mr-12`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title)}}
            >
              <a href={`#${link.id}`}>
                {link.title} 
              </a>
            </li>
          ))}
        </ul>
    </div>
  </div>
  )
}

export default NavLinksResp