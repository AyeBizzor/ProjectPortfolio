import React from 'react'

export const Contacto = () => {
  return (
    <div>
      <form className='contact' action="mailto:vachier.ilustrator@gmail.com" >
    <input type='text' placeholder='Nombre'/>
    <input type='text' placeholder='Apellido'/>
    <input type='text' placeholder='Email'/>
    <textarea type='text' placeholder='Motivo de contacto'/>
    <input type='submit' value="Enviar"/>
      </form>


    </div>
  )
}
