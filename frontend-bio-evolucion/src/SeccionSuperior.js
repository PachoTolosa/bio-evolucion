import './SeccionSuperior.css';
import logoBE from "./assets/logoSinFondo.png"

function SeccionSuperior() {
  return (
    <header className="SeccionSuperior">
        <div>
        <   img src={logoBE} alt="Logo-de-bio-evolucion" />
        <b>Vive!</b>
        </div>
        <b id='leyenda'>By: Frank & Meli</b>
        <div id='seccion-derecha'>
            <input
            placeholder="Buscar productos"
            className="buscador"
            />
            <button className='boton-menu'>+</button>
        </div>
    </header>
  );
}

export { SeccionSuperior };