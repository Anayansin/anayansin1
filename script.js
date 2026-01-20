function alerta() {
  alert("Me quedo bien onichan");
}

const boton = document.getElementById("cambiarTitulo");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", function () {
  titulo.textContent = "Anayansin :D";
});
