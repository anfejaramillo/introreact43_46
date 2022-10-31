import React from "react";

function Ruta2({ saludo }) {
    return (
        <div className="b-3">
            <h2>RUTA /ruta2</h2>
            {saludo}
        </div>
    );
}

{
    /* <div className="b-3">
    <h2>RUTA /ruta2</h2>
    {saludo}
</div>;

El JSX de arriba es traducido a JS con las siguientes lineas

let element = React.createElement(
    "div",
    {
        className: "b-3",
    },
    [
        React.createElement(
            "h2",
            {},
            "RUTA /ruta2"
        ), 
        {saludo}
    ]
); */
}

export default Ruta2;
