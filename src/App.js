import logo from "./logo.svg";
import "./css/App.css";
import { Link, Route, Switch } from "react-router-dom";

const RutaA = () => (
    <div>
        <h1>RUTA /a</h1>
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
        <div>
            <div>
                <Link to="/a">A</Link>
                <br />
                <Link to="/b">B</Link>
            </div>
            <Route path="/a">
                <RutaA />
            </Route>
            <Route path="/b">
                <RutaB />
            </Route>
        </div>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    );
}

export default App;
