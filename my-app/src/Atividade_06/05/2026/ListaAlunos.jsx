import "./ListaAlunos.css";

function ListaAlunos() {
  const listaAlunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Mariana", nota: 9 },
    { nome: "João", nota: 6 },
  ];

  return (
    <div>
      {listaAlunos.map((aluno, index) => (
        <p
          key={index}
          className={aluno.nota >= 7 ? "aprovado" : "reprovado"}
        >
          {aluno.nome} — Nota: {aluno.nota}
        </p>
      ))}
    </div>
  );
}

export default ListaAlunos;