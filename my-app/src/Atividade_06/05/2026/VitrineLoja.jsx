import "./VitrineLoja.css";

function VitrineLoja() {
  const listaProdutos = [
    {
      nome: "Tênis Esportivo",
      preco: "R$ 199,90",
      categoria: "Calçados",
    },
    {
      nome: "Camisa Preta",
      preco: "R$ 79,90",
      categoria: "Roupas",
    },
    {
      nome: "Relógio Digital",
      preco: "R$ 149,90",
      categoria: "Acessórios",
    },
    {
      nome: "Mochila",
      preco: "R$ 120,00",
      categoria: "Utilidades",
    },
  ];

  return (
    <div className="vitrine">
      {listaProdutos.map((produto, index) => (
        <div key={index} className="vitrine-card">
          <div className="imagem-ficticia"></div>

          <h3>{produto.nome}</h3>
          <p>{produto.categoria}</p>
          <strong>{produto.preco}</strong>

          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
}

export default VitrineLoja;