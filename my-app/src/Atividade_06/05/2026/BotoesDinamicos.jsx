import "./BotoesDinamicos.css";

function BotoesDinamicos() {
  const listaBotoes = [
    { texto: "Sucesso", tipo: "sucesso" },
    { texto: "Erro", tipo: "erro" },
    { texto: "Aviso", tipo: "aviso" },
  ];

  return (
    <div className="botoes-container">
      {listaBotoes.map((botao, index) => (
        <button key={index} className={`botao ${botao.tipo}`}>
          {botao.texto}
        </button>
      ))}
    </div>
  );
}

export default BotoesDinamicos;