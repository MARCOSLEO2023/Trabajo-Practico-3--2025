const { useState } = React;

const App = () => {
  const [izquierdoHabilitado, setIzquierdoHabilitado] = useState(false);
  const [derechoHabilitado, setDerechoHabilitado] = useState(true);

  const toggleIzquierdo = () => {
    setIzquierdoHabilitado(!izquierdoHabilitado);
    setDerechoHabilitado(!derechoHabilitado);
  };

  const toggleDerecho = () => {
    setIzquierdoHabilitado(!izquierdoHabilitado);
    setDerechoHabilitado(!derechoHabilitado);
  };

  return (
    <>
      <button disabled={izquierdoHabilitado} onClick={toggleIzquierdo}>
        Izquierdo
      </button>
      <button disabled={derechoHabilitado} onClick={toggleDerecho}>
        Derecho
      </button>
    </>
  );
};

const contenedor = document.getElementById("root");
const root = ReactDOM.createRoot(contenedor);
root.render(<App />);
