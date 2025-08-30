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
        <Routes>
          <Route path="/sobre-mi" element={<SobreMi />} />
        </Routes>
        <Pie />
      </main>
    </BrowserRouter>
  );
}

export default App
