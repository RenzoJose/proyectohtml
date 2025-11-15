const bars     = document.querySelector(".barra"); //icono de barra de hamburgueza 
const dezlizar = document.querySelector(".slaiderbar");
const cerrar   = document.querySelector(".cierrex");

bars.addEventListener("click", () => {
  dezlizar.classList.toggle("show-slaiderbar");
});

cerrar.addEventListener("click", () => {
  dezlizar.classList.remove("show-slaiderbar");
});
