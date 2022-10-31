import logo from "./logo.svg";
import "./css/App.css";
import { Link, Route } from "react-router-dom";
import { Ruta1, Ruta2, Formulario } from "./components/Components";

const RutaA = () => (
    <div>
        <h1>RUTA /a</h1>
        <Ruta1 />
    </div>
);

function RutaB() {
    return (
        <div>
            <h1>RUTA /b</h1>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header>
                <ul>
                    <li>
                        <Link to={"/"}> Ir a Home </Link>
                    </li>
                    <li>
                        <Link to={"/formulario"}> Ir a Formulario </Link>
                    </li>
                    <li>
                        <Link to={"/ruta1"}>Ir a Ruta 1 </Link>
                    </li>
                    <li>
                        <Link to={"/ruta2"}>Ir a Ruta 2 </Link>
                    </li>
                </ul>
            </header>

            <Route path={"/"} exact={true}>
                <div style={{ border: "3px solid red" }}>
                    <h2>Ruta de Home</h2>
                </div>
            </Route>

            <Route path={"/ruta1"}>
                <Ruta1 logoPar={logo} message={"Hola este es un saludo"} />
            </Route>

            <Route path={"/ruta2"}>
                <Ruta2 saludo={"Este es el saludo RUTA 2"} />
            </Route>

            <Route path={"/formulario"}>
                <Formulario />
            </Route>
        </div>
    );
}

export default App;
