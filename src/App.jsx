import { useState } from 'react'
import './App.scss'
import Cabecera from './componentes/encabezado/Cabecera'

function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera />
      <main className='contenido'>
        <h1>Bienvenido a mi portfolio</h1>
        <p>Este es un espacio para mostrar mis proyectos y habilidades.</p>
      </main>
    </>
  )
}

export default App
