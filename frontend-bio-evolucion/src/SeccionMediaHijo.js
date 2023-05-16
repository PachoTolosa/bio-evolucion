import "./SeccionMediaHijo.css"

function SeccionMediaHijo(props){
    return(
    <div className="lista-media">
      <button  id={`button-lista-media-${ props.text }`} className="button-lista-media">
        {props.text}
      </button>
      <label id={`lista-media-${props.text}`} className="lista-media" />
    </div>
    );
}

export { SeccionMediaHijo };
