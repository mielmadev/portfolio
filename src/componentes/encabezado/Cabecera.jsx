import './Cabecera.scss';
import './MenuCabecera';
import MenuCabecera from './MenuCabecera';

function Cabecera() {
  return (
    <header>
      <h1 className="titulo-cabecera">
        Elizabeth Marañón (mielmaDev)
      </h1>
      <MenuCabecera />

    </header>
  );
}

export default Cabecera;