"use client"

import { navLinks } from '@/constants'
import { useState } from 'react';


const NavLinks = () => {
  const [active, setActive] = useState("");
    
    return (
    <ul className="hidden links md:flex">
    {navLinks.map((link) => (
      <li key={link.id} className={`${
        active === link.title ? "text-white" : "text-secondary"
      } hover:text-white text-[18px] font-medium cursor-pointer`}
        onClick={() => setActive(link.title)}
      >
        <a href={`${link.id}`}>
          {link.title}
        </a>
        </li>
    ))}
  </ul>

  )
}

export default NavLinks