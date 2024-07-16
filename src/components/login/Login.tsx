import React from 'react';
import '../../assets/css/login-screen.css';
import Swal from 'sweetalert2';

const LoginScreen = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      console.log(users); // Esto te ayudará a entender qué contiene `users`

      if (Array.isArray(users)) { // Verifica si `users` es un arreglo
        const user = users.find((user: { email: string; password: string; cargo: string }) => user.email === email && user.password === password);

        if (user) {
          Swal.fire('Inicio de sesión exitoso', `Bienvenido, ${user.email}`, 'success');
          // Redirigir según el cargo
          if (user.cargo === 'admin') {
            window.location.href = "/adminList";
          } else if (user.cargo === 'docente') {
            window.location.href = "/docenteDash";
          } else if (user.cargo === 'miembro') {
            window.location.href = "/miembroTable";
          }
        } else {
          Swal.fire('Error', 'Correo electrónico o contraseña incorrectos', 'error');
        }
      } else {
        Swal.fire('Error', 'No hay usuarios registrados', 'error');
      }
    } else {
      Swal.fire('Error', 'No hay usuarios registrados', 'error');
    }
  };

  return (
    <main>
      <div>
        <img src="./public/LOGO-ULEAM-HORIZONTAL.png" alt="Logo ULEAM" />
      </div>
      <h2 className="title">Iniciar Sesion</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" placeholder="Correo electronico" required name="email" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Contrasena</label>
            <input type="password" required name="password" id="password" placeholder="Contraseña" />
          </div>
          <div className="btn-container">
            <button type="submit">Iniciar Sesion</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginScreen;
