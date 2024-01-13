import React from 'react'
import FaqItem from './FAQItem'

const FAQs = () => {
  return (
    <div className='mt-24'>
     <h3 className='text-[36px] font-bold text-white px-6'>Consulta nuestras preguntas frecuentes</h3>

     <div className="mt-8 mx-auto w-[300px] md:w-[900px]">
      <FaqItem 
        question="¿Porqué es tan barato el Bootcamp comparado con otros?"
        answer="Somos una academia nueva que esta en proceso de desarrollo. Para ir empezando y juntando feedback decidimos poner el precio más bajo del mercado para que sea accesible para todos los que no pueden pagar lo que sale realmente un Bootcamp."
      />
      <FaqItem 
        question="¿Voy a aprender a programar y conseguir trabajo en 4 meses?"
        answer="Si prácticas si! Si solo vienes a las clases dudo que en 4 meses lo consigas. Pero eso no quiere decir que no vayas a hacerlo. Si sigues dedicandole tiempo luego de terminar la cursada en un par de meses estarás trabajando."
      />
      <FaqItem
        question="¿Que voy a aprender realmente?"
        answer="Aprenderas las tecnologías más demandas del mercado laboral, pero no profundizaremos tanto en cada una. Si que con cada una crearemos un proyecto para que practiques, pero no seras el experto máximo. Piensa que estamos metiendo una carrera de 3 o más años en solo 4 meses, así que iremos rápido, siguiendo una guia que nos enseñara todo lo que necesitamos saber para conocer la herramienta y sentirnos seguros para poder continuar aprendiendola."
      />
      <FaqItem
        question="¿Tengo que seguir estudiando después del Bootcamp?"
        answer="Claro que si, nunca aprenderas todo lo que hay, siempre podrás profundizar en algo. Además quizá consigas un trabajo donde utilizen algun lenguaje o herramienta que no hemos visto en el Bootcamp. Esto sería lo más normal del mundo ya que cada empresa se maneja a su forma, no hay solo un camino, y lo mejor es sentirse seguro que podremos aprender lo necesario para superar los obstaculos que se nos presenten."
      />
      <FaqItem
        question="Todavía no estoy seguro si es para mi o no..."
        answer="Si estas indeciso en si vale la pena o no piensa que en solo 4 meses aprenderas todo lo que necesitas para conseguirte un empleo. Y que un Bootcamp sale desde 5.000€ para arriba ¡Este esta solo 500!"
      />
      {/* Agrega más preguntas y respuestas según lo necesites */}
    </div>

    </div>
  )
}

export default FAQs