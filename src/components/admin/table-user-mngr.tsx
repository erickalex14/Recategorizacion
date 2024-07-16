import React, { useEffect, useState } from 'react';
import '../../assets/css/table-user-mngr.css';
import Swal from 'sweetalert2';

const UserTable = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUsers([JSON.parse(storedUser)]);
    }
  }, []);

  const deleteUser = (index: number) => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'El usuario sera eliminado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        const newUsers = users.filter((user, i) => i !== index);
        localStorage.setItem('user', JSON.stringify(newUsers));
        setUsers(newUsers);
        Swal.fire('Usuario eliminado', 'El usuario ha sido eliminado correctamente', 'success');
      }
    });
  };

  const editUser = (index: number) => {
    const user = users[index];
    Swal.fire({
      title: 'Editar usuario',
      html: `
        <input type="text" id="names" value="${user.names}" required>
        <input type="text" id="lastnames" value="${user.lastnames}" required>
        <input type="text" id="cedula" value="${user.cedula}" required>
        <input type="email" id="email" value="${user.email}" required>
        <input type="email" id="correoinstitucional" value="${user.correoinstitucional}" required>
        <input type="text" id="cargo" value="${user.cargo}" required>
      `,
      showCancelButton: true,
      confirmButtonText: 'Guardar cambios',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const names = (document.getElementById('names') as HTMLInputElement).value;
        const lastnames = (document.getElementById('lastnames') as HTMLInputElement).value;
        const cedula = (document.getElementById('cedula') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const correoinstitucional = (document.getElementById('correoinstitucional') as HTMLInputElement).value;
        const cargo = (document.getElementById('cargo') as HTMLInputElement).value;
        const newUsers = users.map((u, i) => (i === index ? { names, lastnames, cedula, email, correoinstitucional, cargo } : u));
        localStorage.setItem('user', JSON.stringify(newUsers));
        setUsers(newUsers);
      },
    });
  };

  const createUser = () => {
    window.location.href = '/register-admin';
  };

  return (
    <>
      <header>
        <div>
          <a href="/adminList">Lista de usuarios</a>
        </div>
        <nav>
          <ul>
            <li>Usuario Administrador</li>
            <li><a href="/">Cerrar Sesion</a></li>
            <li><button id="crearusuario" onClick={createUser}>Crear usuario</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Lista de usuarios</h2>
        <table>
          <thead>
            <tr>
              <th>ID usuario</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Tipo de usuario</th>
              <th>Correo institucional</th>
              <th>Correo personal</th>
              <th>Fecha creacion(DD-MM-AAAA)</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.names}</td>
                  <td>{user.lastnames}</td>
                  <td></td>
                  <td>{user.correoinstitucional}</td>
                  <td>{user.email}</td>
                  <td>{new Date().toLocaleDateString()}</td>
                  <td>
                    <button id="editar" onClick={() => editUser(index)}>Editar</button>
                    <button className="button-red" id="eliminar" onClick={() => deleteUser(index)}>Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8}>No hay usuarios registrados</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default UserTable;