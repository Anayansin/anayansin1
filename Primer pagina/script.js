 const botonSuma = document.querySelector("#botonSuma")
 if (botonSuma) {
  botonSuma.addEventListener("click", Suma)
 }

 function Suma(){
  let num1 = Number(document.querySelector("#num1").value)
  let num2 = Number(document.querySelector("#num2").value)
  let resultado = num1 + num2
  document.querySelector("#resultado").textContent = resultado
}
 
 function alerta() {
  alert("Me quedo bien onichan")
}
 function cambio(){
  alert("¿quieres cambiar de página?")
 }

const boton = document.querySelector("#cambiarTitulo");
const titulo = document.querySelector("#titulo");

if (boton) {
boton.addEventListener("click", TituloDiferente);
}

function TituloDiferente(){
  titulo.textContent = "Anayansin :D";
}