

document.getElementById("cancelbtn").addEventListener("click",() => {
  window.location.href = "./table-user-mngr.html";
} )

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  Swal.fire({
    title: "Usuairo creado",
    text: "El usuario a sido creado",
    icon: "success"
  })
  setTimeout(() => {
    window.location.href = "./table-user-mngr.html";
  }, 2000);
})