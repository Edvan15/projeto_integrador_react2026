import "./GridProdutos.css";

function GridProdutos() {
  const listaProdutos = [
    "Celular",
    "Monitor",
    "Headset",
    "Cadeira Gamer",
    "Impressora",
    "Tablet",
  ];

  return (
    <div className="grid-produtos">
      {listaProdutos.map((produto, index) => (
        <div key={index} className="grid-card">
          {produto}
        </div>
      ))}
    </div>
  );
}

export default GridProdutos;