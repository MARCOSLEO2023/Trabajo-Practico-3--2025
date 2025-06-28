const { useState } = React;

const App = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [operacion, setOperacion] = useState("suma");
  const [resultado, setResultado] = useState(0);
  const [error, setError] = useState("");

  const calcular = (e) => {
    e.preventDefault();
    let resultado = 0;
    setError("");

    if (operacion === "suma") {
      resultado = numero1 + numero2;
    } else if (operacion === "resta") {
      resultado = numero1 - numero2;
    } else if (operacion === "multiplicacion") {
      resultado = numero1 * numero2;
    } else if (operacion === "division") {
      resultado = numero1 / numero2;
    }

    setResultado(resultado);
  };

  return (
    <>
    <h2>Calculadora</h2>
      <form className="formulario" onSubmit={calcular}>
        <label>Número 1</label>
        <input
          type="number"
          value={numero1}
          onChange={(e) => setNumero1(Number(e.target.value))}
          placeholder="Número 1"
        />

        <label>Número 2</label>
        <input
          type="number"
          value={numero2}
          onChange={(e) => setNumero2(Number(e.target.value))}
          placeholder="Número 2"
        />

        <label>Operación</label>
        <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicación</option>
          <option value="division">División</option>
        </select>

        <button
          type="submit"
          disabled={operacion === "division" && numero2 === 0}
        >
          Calcular
        </button>

        <div>Resultado: {resultado}</div>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </>
  );
};
const contenedor = document.getElementById("root");
const root = ReactDOM.createRoot(contenedor);
root.render(<App />);