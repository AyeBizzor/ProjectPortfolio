import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h4>
      ¡Hola! Soy Desarrolladora Web y ofrezco servicios en <strong> programacion y desarrollo</strong> en todo tipo de proyecto web.
      </h4>
      <h2>
      En mi enfoque de diseño, siempre priorizo la experiencia del usuario, buscando crear interfaces amigables, intuitivas y atractivas.
      <Link to="/contacto">Contacta conmigo.</Link>
      </h2>
      
    <section className='lasts-works' >
    <p>Estos son algunos de mis proyectos de desarrollo web</p>

    <div className='works' ></div>

    </section>
    



    </div>
  )
}
