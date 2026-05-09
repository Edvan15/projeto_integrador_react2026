import "./ListaProdutos.css";

function ListaProdutos() {
  const listaProdutos = [
    { nome: "Notebook", preco: "R$ 3.500,00" },
    { nome: "Mouse", preco: "R$ 80,00" },
    { nome: "Teclado", preco: "R$ 150,00" },
  ];

  return (
    <div className="lista-produtos">
      {listaProdutos.map((produto, index) => (
        <div key={index} className={`produto produto-${index}`}>
          <h3>{produto.nome}</h3>
          <p>{produto.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaProdutos;