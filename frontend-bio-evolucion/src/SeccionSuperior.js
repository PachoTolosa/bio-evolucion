import './SeccionSuperior.css';
import logoBE from "./assets/logoSinFondo.png"

function SeccionSuperior() {
  return (
    <div className="SeccionSuperior">
        <label>
            <img src={logoBE} alt="Logo-de-bio-evolucion" />
            <p>Vive!</p>
        </label>
    </div>
  );
}

export { SeccionSuperior };