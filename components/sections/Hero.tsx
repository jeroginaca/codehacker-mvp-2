import Link from 'next/link'
import { HeroHeading, Techs, VideoBackground } from '../component'

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative h-[90vh] w-[100%]">
            <VideoBackground />
            <HeroHeading />
        </div>

        <Techs/>
        
        </div>
    </> 
  )
}

export default Hero