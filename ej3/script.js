document.addEventListener('DOMContentLoaded', function() {

    const lista = document.getElementById("lista");

    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            const tareasCompletadas = data.filter((tarea) => tarea.completed);

            tareasCompletadas.forEach((tarea) => {
                const li = document.createElement("li");
                li.textContent = tarea.title;
                lista.appendChild(li);
            });
        })
        .catch((error) => {
            console.error("Hubo un error al obtener o procesar las tareas:", error);
            const mensajeError = document.createElement('li');
            mensajeError.textContent = `Error al cargar las tareas: ${error.message}`;
            mensajeError.style.color = 'red';
            lista.appendChild(mensajeError);
        });

});
