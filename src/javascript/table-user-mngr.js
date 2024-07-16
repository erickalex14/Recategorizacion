document.getElementById("eliminar").addEventListener("click", () => {
  Swal.fire({
    title: "¿Seguro que deseas eliminar al usuario?",
    text: "El {usuario/id } será eliminado.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí puedes agregar la lógica para eliminar al usuario, si es necesario.
      
      Swal.fire({
        title: "Eliminado",
        text: "El usuario ha sido eliminado exitosamente.",
        icon: "success"
      });
    }
  });
});


document.getElementById("crearusuario").addEventListener("click", () => {
  window.location.href = "./create-user.html";
});

document.getElementById("editar").addEventListener("click", () => {
  const { value: formValues } = Swal.fire({
    title: "Ingresa los datos",
    html:
      `<input id="swal-name" class="swal2-input" placeholder="Nombres">` +
      `<input id="swal-lastname" class="swal2-input" placeholder="Apellidos">` +
      `<input id="swal-email-inst" class="swal2-input" type="email" placeholder="Correo Instutucional">` +
      `<input id="swal-email" class="swal2-input" type="email" placeholder="Correo personal">` +
      `<input id="swal-cargo" class="swal2-input" placeholder="Cargo">`,
    focusConfirm: false,
    preConfirm: () => {
      return Swal.fire({
        title: "Cambios realizados",
        icon: "success",
      });
    },
  });
});
