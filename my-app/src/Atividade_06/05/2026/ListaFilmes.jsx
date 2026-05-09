import "./ListaFilmes.css";

function ListaFilmes() {
  const listaFilmes = [
    { nome: "Interestelar", categoria: "Ficção Científica", nota: 9.5 },
    { nome: "Vingadores", categoria: "Ação", nota: 8.7 },
    { nome: "Toy Story", categoria: "Animação", nota: 9.0 },
  ];

  return (
    <div className="filmes-container">
      {listaFilmes.map((filme, index) => (
        <div key={index} className="filme-card">
          <h3>{filme.nome}</h3>
          <p>Categoria: {filme.categoria}</p>
          <p>Nota: {filme.nota}</p>
          <button>Assistir</button>
        </div>
      ))}
    </div>
  );
}

export default ListaFilmes;