import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Cabecera from './componentes/encabezado/Cabecera';
import SobreMi from './componentes/paginas/SobreMi';
import Proyectos from './componentes/paginas/Proyectos';
import Contacto from './componentes/paginas/Contacto';
import Pie from './componentes/pie/Pie'

function App() {

  return (
    <BrowserRouter>
      <Cabecera />
      <main className='contenido'>
        <h1>Bienvenido a mi portfolio</h1>
        <p>Este es un espacio para mostrar mis proyectos y habilidades.</p>
        <Link to="/inicio">Inicio</Link>
      </main>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Pie />
    </BrowserRouter>
  );
}

export default App
