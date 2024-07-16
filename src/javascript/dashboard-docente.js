

export function crearSolicitud() {
  return window.location.href = "./create-request.html";
}


 document.getElementById("notificaciones").addEventListener("click", () => {
  Swal.fire({
    title: "No hay notificaciones",
    icon: "success"
  })
})


 document.getElementById("crearsolicitud").addEventListener("click", () => {
  window.location.href = "create-request.html";
})
