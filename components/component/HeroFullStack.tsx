import Image from 'next/image'
import Link from 'next/link'
import Example from './HorizontalScroll'

const HeroFullStack = () => {
  return (
    <div>
        <div className="hero-content contenedor pt-32 md:pt-14">
            <div className="flex flex-col md:flex-row h-[80vh] w-[100%]">              
                <div className="w-full md:w-1/2 lg:-mt-8 mt-0 pl-12 flex flex-col justify-center items-start">
                    <h1 className="title font-bold leading-[1.1]"><span className="text-[34px] md:text-[42px] lg:text-[64px]">Convertite en </span> <br /><span className="gradient-title text-[48px] md:text-[64px] lg:text-[96px]">Full Stack</span><br /> <span className="text-[48px] md:text-[64px] lg:text-[96px]">Developer</span> </h1>
                    <Link href="#contact">
                        <button className="cta text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">Reserva tu plaza</button>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center ">
                   
                    <Image 
                        src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697452271/TECHS_yfdcs0.png"
                        width={605}
                        height={605}
                        alt='img'
                    />
                    
                </div>
            </div>
        </div>
        <Example />
    </div>
  )
}

export default HeroFullStack