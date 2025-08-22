import React from 'react';
import './encabezado.scss';
import '@anim/_bordes-animados.scss';
import LogoMielmaDev from './LogoMielmaDev';



function Cabecera() {
  return (
    <header>
      <nav className="nav-encabezado">
        <ul>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default Cabecera;