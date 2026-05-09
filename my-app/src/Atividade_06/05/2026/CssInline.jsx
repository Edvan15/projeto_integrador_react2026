function CssInline() {
  return (
    <div
      style={{
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h2
        style={{
          color: "#00c853",
          fontSize: "28px",
        }}
      >
        Título com CSS Inline
      </h2>

      <p
        style={{
          color: "#fff",
          fontSize: "18px",
        }}
      >
        Esse é um subtítulo estilizado usando CSS inline
      </p>
    </div>
  );
}

export default CssInline;