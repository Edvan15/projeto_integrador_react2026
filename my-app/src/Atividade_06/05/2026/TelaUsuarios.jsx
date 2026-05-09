import "./TelaUsuarios.css";

function TelaUsuarios() {
  const listaUsuarios = [
    {
      nome: "Ramon",
      email: "ramon@email.com",
      telefone: "(11) 99999-9999",
    },
    {
      nome: "Edvan",
      email: "edvan@email.com",
      telefone: "(11) 98888-8888",
    },
    {
      nome: "Lucas",
      email: "lucas@email.com",
      telefone: "(11) 97777-7777",
    },
  ];

  return (
    <div className="usuarios-container">
      {listaUsuarios.map((usuario, index) => (
        <div key={index} className="usuario-card">
          <h3>{usuario.nome}</h3>
          <p>Email: {usuario.email}</p>
          <p>Telefone: {usuario.telefone}</p>
        </div>
      ))}
    </div>
  );
}

export default TelaUsuarios;