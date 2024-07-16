document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  Swal.fire({
    title: "Solicitud creada",
    icon: "success",
  });
  setTimeout(() => {
    window.location.href = "./dashboard.html";
  }, 2000);
});
document.getElementById("cancelar").addEventListener("click", () => {
  cancelarSolicitud();
})

function cancelarSolicitud() {
  window.location.href = "./dashboard.html";
}
