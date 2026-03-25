import React, { useState } from 'react';

function Atividade() {

  // lista de nomes
  const [atividades, setAtividades] = useState(['João', 'Maria', 'Carlos']);

  // guarda o que está sendo digitado no input
  const [novoNome, setNovoNome] = useState('');
  // função para adicionar nome na lista
  const adicionarNome = () => {
    if (novoNome !== '') {
      setAtividades([...atividades, novoNome]);
      setNovoNome(''); // limpa o input depois de adicionar
    }
  };

  return (
    <div>
      <h3>Adicionar nome</h3>
      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        placeholder="Digite um nome"
      />
      <button onClick={adicionarNome}>Adicionar</button>

      <h3>Lista</h3>
      <ul>
        {atividades.map((atividade, index) => (
          <li key={index}>{atividade}</li>
        ))}
      </ul>
    </div>
  );
}

export default Atividade;



