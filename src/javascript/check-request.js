document.getElementById("aprobar-btn").addEventListener("click", () => {
  Swal.fire({
    title: "Solicitud aprovada!",
    text: "Se ha aprovado la solicitud con extio",
    icon: "success"
  })
  setTimeout(() => {
    window.location.href = "./table-requests.html";
  }, 2000);
})

document.getElementById("rechazar-btn").addEventListener("click", () => {
  Swal.fire({
    title: "Eliminar la solicitud?",
    text: "La solicitud sera eliminada",
    icon: "warning"
  })
})

document.getElementById("salir-btn").addEventListener("click", () => {
  window.location.href = "./table-requests.html";
})
