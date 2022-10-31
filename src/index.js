import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const rootHtml = document.getElementById("root");
const root = ReactDOM.createRoot(rootHtml);

let objJSX = (
    <div style={{ border: "5px solid red" }} miAtributo={"ejemplo"}>
        <h2>Titulo</h2>
        <div>Cuerpo del mensaje</div>
        <div>
            <h4>Footer</h4>
            <button
                onClick={() => {
                    alert("Boton Clikeado");
                }}
            >
                Clikeame
            </button>
        </div>
    </div>
);

let h2Element = React.createElement("h2", {}, "Titulo");
let div2Element = React.createElement("div", {}, "Cuerpo del mensaje");
let divFinalElement = React.createElement("div", {}, [
    React.createElement("h4", {}, "Footer"),
    React.createElement(
        "button",
        {
            onClick: () => {
                alert("Boton Clikeado");
            },
        },
        "Clikeame"
    ),
]);

let objByJAVASCRIPT = React.createElement(
    "div",
    {
        style: {
            border: "5px solid blue",
        },
        miAtributo: "ejemplo",
    },
    [h2Element, div2Element, divFinalElement]
);

function MainComponent() {
    return (
        <div>
            {objJSX}
            {objByJAVASCRIPT}
        </div>
    );
}

root.render(
    <BrowserRouter>
        <MainComponent />
        <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
