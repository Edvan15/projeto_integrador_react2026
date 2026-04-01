import React, { useState } from 'react';

function CampoNomeDinamico() {
    const [nome, setNome] = useState('');

    const handleInputChange = (event) => {
        setNome(event.target.value);
    };

    return (
        <div>
            <h1>Digite seu nome:</h1>
            <input type="text" value={nome} onChange={handleInputChange} />
            <h2>Olá, {nome}!</h2>
        </div>
    );
}

export default CampoNomeDinamico;