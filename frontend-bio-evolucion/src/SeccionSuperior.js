import './SeccionSuperior.css';
import logoBE from "./assets/logoSinFondo.png"

function SeccionSuperior() {
  return (
    <header className="SeccionSuperior">
        <img src={logoBE} alt="Logo-de-bio-evolucion" />
        <b>Vive!</b>
        <button className='boton-menu'>+</button>
    </header>
  );
}

export { SeccionSuperior };