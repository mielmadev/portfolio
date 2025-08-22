import React from 'react';
import './encabezado.scss';
import '@anim/_bordes-animados.scss'
import MielmaDevAlas from '@img/mielmadev/MielmaDevAlas.webp';

function Encabezado() {
  return (
    <header>
      <div className="logo-mielmadev bordes-animados"><img src={MielmaDevAlas} alt="MielmaDevAlas" /></div>
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

export default Encabezado;