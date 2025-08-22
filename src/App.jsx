import { useState } from 'react'
import './App.scss'
import Cabecera from './componentes/encabezado/Cabecera'

function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera />
    </>
  )
}

export default App
