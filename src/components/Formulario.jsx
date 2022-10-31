function Formulario() {
    return (
        <div>
            <h2>RUTA /form</h2>
            <form>
                Nombre
                <input type={"text"} className={"m-3"} />
                Contrasena
                <input type={"password"} className={"m-3"} />
                <br />
                <input
                    type={"button"}
                    value={"Clikeame"}
                    className={"m-3"}
                    onClick={funcionOnClick}
                />
            </form>
        </div>
    );
}

function funcionOnClick() {
    alert("El boton se ha cliqueado");
}

export default Formulario;
