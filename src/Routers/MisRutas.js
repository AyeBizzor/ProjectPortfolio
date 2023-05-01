import React from 'react'
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Servicios } from '../components/Servicios'
import { Portfolio } from '../components/Portfolio'
import { Curriculum } from '../components/Curriculum'
import { Contacto } from '../components/Contacto'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'


export const MisRutas = () => {
  return (
    <div>

<BrowserRouter>
{/* Header y navegacion */}
<HeaderNav/>

{/* contenido central */}

<section className='content' >
  <Routes>
  
          <Route path='/' element={<Navigate to= "/inicio"/>}/>
          <Route path='/inicio' element= {<Inicio/>}/>
         
          <Route path='/portfolio' element=  {<Portfolio/>}/>
          <Route path='/servicios' element= {<Servicios/>}/>
          <Route path='/contacto' element=  {<Contacto/>}/>
          <Route path='/curriculum' element= {<Curriculum/>}/>
          

  </Routes>

</section>




{/* footter */}
<Footer/>

</BrowserRouter>


    </div>
  )
}
