import Navbar from '@/components/component/Navbar'
import { Footer } from '@/components/sections'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className='bg-primary'>
        <Navbar /> 
        {children}
       <Footer />
    </div>
  )
}

export default layout