const listaPalabras = [
    "manzana",
    "banana",
    "pera",
    "durazno",
    "frutilla",
    "mango",
];

const entrada = document.getElementById("entrada");
const boton = document.getElementById("btnFiltrar");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", (e) => {
    e.preventDefault();

    const texto = entrada.value.trim().toLowerCase();

    resultado.innerHTML = "";
    mensaje.textContent = "";

    if (texto === "") {
        mensaje.textContent = "Por favor, ingresa un texto para filtrar.";
        return;
    }

    const filtradas = listaPalabras.filter((palabra) =>
        palabra.toLowerCase().includes(texto)
    );

    if (filtradas.length === 0) {
        mensaje.textContent = "No se encontraron coincidencias.";
    } else {
        filtradas.forEach((palabra) => {
            const li = document.createElement("li");
            li.textContent = palabra;
            resultado.appendChild(li);
        });
    }
});
