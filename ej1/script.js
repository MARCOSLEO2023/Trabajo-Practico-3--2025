const boton = document.getElementById ("boton")
const operacion = document.getElementById("operador")
const num1Input = document.getElementById("num1")
const num2Input = document.getElementById("num2")

const verificacion = () => {
    const operador = operacion.value
    const num2 = parseFloat(num2Input.value)

    if (operacion.value === "division" && num2 === 0) {
        boton.disabled = true
    }   else {
            boton.disabled = false
}}
        
boton.addEventListener("click", (e) => {
e.preventDefault()
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    let resultado

    switch(operador.value) {
        case "suma":
            resultado = num1 + num2
            break
        case "resta":
            resultado = num1 - num2
            break
        case "multiplicacion":
            resultado = num1 * num2
            break
        case "division":
            resultado = num1 / num2
    }
    document.getElementById("resultado").textContent = resultado
})
num2Input.addEventListener("keyup", verificacion)
operacion.addEventListener("change", verificacion)
