import './Cabecera.scss';
import MenuCabecera from './MenuCabecera';

function Cabecera() {
  return (
    <header role="banner" className="cabecera">
      <h1 className="titulo-cabecera">
        Elizabeth Marañón (mielmaDev)
      </h1>
      <MenuCabecera />

    </header>
  );
}

export default Cabecera;