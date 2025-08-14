import { useState } from 'react'
import './App.scss'
import Encabezado from './componentes/encabezado/encabezado.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Encabezado />
    </>
  )
}

export default App
