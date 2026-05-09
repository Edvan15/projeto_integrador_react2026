import { useState } from "react";
import "./ListaTarefas.css";

function ListaTarefas() {
  const [listaTarefas, setListaTarefas] = useState([
    { texto: "Estudar React", concluida: true },
    { texto: "Fazer exercícios", concluida: false },
    { texto: "Revisar CSS", concluida: true },
  ]);

  function removerTarefa(indexRemover) {
    const novaLista = listaTarefas.filter((_, index) => index !== indexRemover);
    setListaTarefas(novaLista);
  }

  return (
    <div className="tarefas-container">
      {listaTarefas.map((tarefa, index) => (
        <div
          key={index}
          className={`tarefa-card ${
            tarefa.concluida ? "tarefa-concluida" : "tarefa-pendente"
          }`}
        >
          <p>{tarefa.texto}</p>
          <button onClick={() => removerTarefa(index)}>Remover</button>
        </div>
      ))}
    </div>
  );
}

export default ListaTarefas;