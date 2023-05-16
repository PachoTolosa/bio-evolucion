import "./SeccionInferior.css"

function SeccionInferior({children}){
    return(
    <div className="seccion-inferior">
        <div className="seccion-inferior-interna">
            {children}
        </div>
    </div>
    )
}

export { SeccionInferior }