import React from "react"

function Contacto(){
    return(

        <div className="contacto">
            <h1>Cuéntanos, en qué te podemos ayudar?</h1>
            <div className="correo">
                <p>Correo:</p>
                <input type="email" id="email" size="100" placeholder="email@ejemplo.com"/>
            </div>
            <div className="descripcion">
                <p>Descripción:</p>
                <input type="text" id="email" size="100"/>
            </div>
            <div className="btn">
                <button>Enviar</button>
            </div>
        </div>

    )
}

export default Contacto;