document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email == "pruebadocente@hotmail.com" && password == "docente123") {
    return (window.location.href = "./html/docente/dashboard.html");
  }

  if (email == "pruebaadmin@hotmail.com" && password == "admin123") {
    return (window.location.href = "./html/admin/table-user-mngr.html");
  }

  if (email == "pruebamiembro@hotmail.com" && password == "miembro123") {
    return (window.location.href = "./html/miembro/table-requests.html");
  }

  alert("Correo electronico o contraseña incorrectos");
});
