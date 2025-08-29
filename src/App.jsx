import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Cabecera from './componentes/encabezado/Cabecera';
import SobreMi from './componentes/paginas/SobreMi';
import Pie from './componentes/pie/Pie'

function App() {

  return (
    <BrowserRouter>
      <Cabecera />
      <main className='contenido'>
        <h1>Bienvenido a mi portfolio</h1>
        <p>Este es un espacio para mostrar mis proyectos y habilidades.</p>
      </main>
      <Routes>
        <Route path="/sobre-mi" element={<SobreMi />} />
      </Routes>
      <Pie />
    </BrowserRouter>
  );
}

export default App
