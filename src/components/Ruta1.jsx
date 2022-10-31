function Ruta1(props) {
    return (
        <header className="App-header">
            <img src={props.logoPar} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
                <h2>RUTA /ruta1</h2>
                {props.message}
            </div>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
}

export default Ruta1;
