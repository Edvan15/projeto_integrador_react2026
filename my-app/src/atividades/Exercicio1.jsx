import React, { useState } from 'react';

function Titulo() {
    return(
        <div>
           <header>
            
            <h1>Curso de React</h1>
           </header>
        </div>
    )
}

function NumerExibidoTela() {
    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1);
    };
    const decrementar = () => {
        setNumero(numero - 1);
    };

    return (
        <div>
            <Titulo />
            <h2>Número: {numero}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

export default NumerExibidoTela;