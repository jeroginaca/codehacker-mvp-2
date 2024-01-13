import { technologies } from '@/constants'
import { images } from '@/assets'
import { Tech } from '.'

const Techs = () => {
  return (
    <div className="hidden lg:flex showcase h-[150px]  flex-col justify-center items-center absolute  bottom-3 z-40 py-[1rem] px-[3rem] rounded-[20px]">
      <div className="absolute left-auto top-2">
          <h3 className="text-white  mb-12 text-[24px] tracking-[.10em]">Aprende usando las mejores tecnologias</h3>
      </div>
      <div className="flex flex-row -mb-4">    
        {technologies.map((technology) => (       
            <Tech technology={technology} image={images[technology.src]} key={technology.name}/> 
        ))}
      </div>
    </div>
  )
}


export default Techs