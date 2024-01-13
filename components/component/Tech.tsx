"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Technology {
    name: string;
    src: string;
    link: string;
  }
  
  const Tech = ({ technology,  image }: { technology: Technology, image: string }) => {
    const [hovered, setHovered] = useState(false);
  
    const handleHover = () => {
      setHovered(true);
    };
  
    const handleUnhover = () => {
      setHovered(false);
    };

  
    return (
      <div 
        className="technology-container flex flex-col justify-center items-center" 
        onMouseEnter={handleHover} 
        onMouseLeave={handleUnhover}
      >
        <Link href={technology.link} target='_blank' key={technology.name}>
          <Image 
            src={image} 
            alt={technology.name} 
            width={60} 
            height={60}
            style={{ 
              transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
              transition: 'transform 0.3s ease' // Agrega la transición aquí
            }}
            className="icons" // Agrega la clase slow-hover si hovered es true
          />
        </Link>
        <Link href={technology.link} target='_blank' key={technology.name}>
        {hovered && <p className="text-white/60 hover:text-white/80">{technology.name}</p>}</Link>
      </div>
    );
  };
  

export default Tech;
