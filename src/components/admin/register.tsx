import React, { useCallback, useState } from 'react';
import '../../assets/css/create-user.css';
import Swal from 'sweetalert2';

const CreateUser = () => {
  const [nameError, setNameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [cedulaError, setCedulaError] = useState('');

  const handleCancel = useCallback(() => {
    window.location.href = '/adminList';
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.target as HTMLFormElement);
    const user = {
      names: formData.get('names') as string,
      lastnames: formData.get('lastnames') as string,
      cedula: formData.get('cedula') as string,
      email: formData.get('email') as string,
      correoinstitucional: formData.get('correoinstitucional') as string,
      cargo: formData.get('cargo') as string,
      password: formData.get('password') as string,
    };

    if (!user.correoinstitucional.endsWith('@live.uleam.edu.ec')) {
      Swal.fire('Error', 'El correo institucional debe terminar con @live.uleam.edu.ec', 'error');
      return;
    }

    if (!validateCedula(user.cedula)) {
      Swal.fire('Error', 'La cédula ingresada no es válida.', 'error');
      return;
    }

    try {
      const storedUsers = localStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      Swal.fire('Usuario creado', 'Los datos del usuario han sido guardados en localStorage', 'success');
    } catch (error) {
      Swal.fire('Error', 'Hubo un problema al guardar los datos del usuario', 'error');
    }
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/[0-9]/.test(value)) {
      setNameError('El campo nombres no puede contener números.');
      Swal.fire('Error', 'El campo nombres no puede contener números.', 'error');
    } else {
      setNameError('');
    }
    event.target.value = value.replace(/[0-9]/g, '');
  };

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/[0-9]/.test(value)) {
      setLastnameError('El campo apellidos no puede contener números.');
      Swal.fire('Error', 'El campo apellidos no puede contener números.', 'error');
    } else {
      setLastnameError('');
    }
    event.target.value = value.replace(/[0-9]/g, '');
  };

  const handleCedulaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!validateCedula(value)) {
      setCedulaError('La cédula ingresada no es válida.');
    } else {
      setCedulaError('');
    }
  };

  const validateCedula = (cedula: string): boolean => {
    if (cedula.length !== 10) return false;
    const digits = cedula.split('').map(Number);
    const provinceCode = parseInt(cedula.substring(0, 2), 10);
    if (provinceCode < 1 || provinceCode > 24) return false;
    const thirdDigit = digits[2];
    if (thirdDigit >= 6) return false;
    const verifier = digits.pop();
    const sum = digits.reduce((acc, digit, index) => {
      if (index % 2 === 0) {
        const product = digit * 2;
        return acc + (product > 9 ? product - 9 : product);
      } else {
        return acc + digit;
      }
    }, 0);
    const calculatedVerifier = sum % 10 === 0 ? 0 : 10 - (sum % 10);
    return verifier === calculatedVerifier;
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="top">
          <div>
            <h2>Creacion de usuario</h2>
          </div>
          <div className="btn-container">
            <button className="button-green" type="submit">Crear usuario</button>
            <button className="button-red" type="button" id="cancelbtn" onClick={handleCancel}>Cancelar y volver</button>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="input-field">
              <label htmlFor="names">Nombres</label>
              <input type="text" name="names" id="names" required onChange={handleNameChange} />
              {nameError && <p className="error-message">{nameError}</p>}
            </div>
            <div className="input-field">
              <label htmlFor="lastnames">Apellidos</label>
              <input type="text" name="lastnames" id="lastnames" required onChange={handleLastnameChange} />
              {lastnameError && <p className="error-message">{lastnameError}</p>}
            </div>
            <div className="input-field">
              <label htmlFor="cedula">Cedula</label>
              <input type="text" name="cedula" id="cedula" required onChange={handleCedulaChange} />
              {cedulaError && <p className="error-message">{cedulaError}</p>}
            </div>
            <div className="input-field">
              <label htmlFor="email">Correo electronico Personal</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="input-field">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" required />
            </div>
          </div>
          <div className="right">
            <div className="input-field">
              <label htmlFor="correoinstitucional">Correo Institucional</label>
              <input type="email" name="correoinstitucional" id="correoinstitucional" required />
            </div>
            <div className="input-field">
              <label htmlFor="cargo">Cargo en la universidad</label>
              <select name="cargo" id="cargo" required>
                <option value="admin">Admin</option>
                <option value="miembro">Miembro</option>
                <option value="docente">Docente</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default CreateUser;
