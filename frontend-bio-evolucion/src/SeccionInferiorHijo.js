import "./SeccionInferiorHijo.css";

function SeccionInferiorHijo() {
    return(
        <>
        <div>
            <h2>Resumen del sitio</h2>
            <ul>
                <li className="lista-servicios" id="servicio-1" onClick={() => console.log("Holalola")}>Asesorias</li>
                <li className="lista-servicios" id="servicio-2" onClick={() => console.log("Holalola")}>Market</li>
                <li className="lista-servicios" id="servicio-3" onClick={() => console.log("Holalola")}>Cursos</li>
                <li className="lista-servicios" id="servicio-4" onClick={() => console.log("Holalola")}>Blog</li>
            </ul>
        </div>
        <div>
            <h2>Información de contacto</h2>
            <ul>
                <li>Teléfono: 555-555-5555</li>
                <li>Correo electrónico: ejemplo@ejemplo.com</li>
                <li>Dirección: 123 Calle Ejemplo, Ciudad Ejemplo, Estado Ejemplo</li>
            </ul>
        </div>
        </>
    );
}

export { SeccionInferiorHijo };
