const { useState } = React;

const App = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();

    if (!peso || !altura || altura <= 0) {
      setResultado({ mensaje: "Ingrese valores válidos.", color: "gray" });
      return;
    }

    const pesoNum = Number(peso);
    const alturaNum = Number(altura);

    const imc = pesoNum / Math.pow(alturaNum, 2);

    let mensaje = "";
    let color = "";

    if (imc < 18.5) {
      mensaje = `IMC: ${imc.toFixed(2)} - Nivel bajo`;
      color = "yellow";
    } else if (imc >= 18.5 && imc < 25) {
      mensaje = `IMC: ${imc.toFixed(2)} - Nivel normal`;
      color = "green";
    } else if (imc >= 25 && imc < 30) {
      mensaje = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
      color = "orange";
    } else {
      mensaje = `IMC: ${imc.toFixed(2)} - Obesidad`;
      color = "red";
    }

    setResultado({ mensaje, color });
  };
 return (
    <>
      <h2>Calculadora de IMC</h2>
      <form className="formulario" onSubmit={calcularIMC}>
        <label>Peso en kg</label>
        <input
          type="number"
          placeholder="Peso en kg"
          value={peso}
          onChange={(e) => setPeso(Number(e.target.value))}
          min="0"
          step="any"
        />

        <label>Altura en metros (ej: 1.70)</label>
        <input
          type="number"
          placeholder="Altura en metros (ej: 1.70)"
          value={altura}
          onChange={(e) => setAltura(Number(e.target.value))}
          min="0"
          step="any"
        />

        <button type="submit">Calcular IMC</button>

        {resultado && (
          <div
            style={{
              marginTop: 20,
              color: resultado.color,
              fontWeight: "bold",
            }}
          >
            {resultado.mensaje}
          </div>
        )}
      </form>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);