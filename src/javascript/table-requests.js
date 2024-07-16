
document.getElementById("rechazar").addEventListener("click", () => {
  Swal.fire({
    title: "Seguro quieres rechazar esta solicitud?",
    text: "La solicitud sera recahzada.",
    icon: "warning"
  });
});

document.getElementById("revisar").addEventListener("click", () => {
  window.location.href = "./check-request.html";
});