import './MenuCabecera.scss'; 
import { Link } from 'react-router-dom';

function MenuCabecera() {
  return (
    <nav className="menu-cabecera">
      <a href="#inicio">Inicio</a>
      <Link to="/sobre-mi">Sobre mí</Link>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  );
}

export default MenuCabecera;
