import React from 'react';
import './Cabecera.scss';



function Cabecera() {
  return (
    <header>
      <h1 className="titulo-cabecera">
        Elizabeth Marañón (mielmaDev)
      </h1>
      <nav className="nav-cabecera">
        <ul className='menu-cabecera'>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default Cabecera;