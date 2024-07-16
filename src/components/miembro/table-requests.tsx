import React, { useEffect, useState } from 'react';
import '../../assets/css/table-requests.css';
import Swal from 'sweetalert2';

const TableRequests = () => {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    const storedRequests = localStorage.getItem('requests');
    if (storedRequests) {
      setRequests(JSON.parse(storedRequests));
    }
  }, []);

  const handleReview = (id: number) => {
    Swal.fire('Revisar solicitud', '', 'info');
  };

  const handleReject = (id: number) => {
    const updatedRequests = requests.map((req) => {
      if (req.id === id) {
        return { ...req, status: 'Rechazado' };
      }
      return req;
    });
    setRequests(updatedRequests);
    localStorage.setItem('requests', JSON.stringify(updatedRequests));
    Swal.fire('Solicitud rechazada', '', 'error');
  };

  return (
    <>
      <header>
        <div>
          <a href="/">Lista de solicitudes</a>
        </div>
        <nav>
          <ul>
            <li>Usuario Miembro Comite</li>
          {/* Obtencion del nombre del usuario iniciado sesion */}
            <li><a href="/">{localStorage.getItem('user.name')}</a></li>
            
            <li><a href="/">Cerrar Sesion</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Lista de solicitudes</h2>
        <table>
          <thead>
            <tr>
              <th>ID solicitud</th>
              <th>Nombre de solicitud</th>
              <th>Tipo de solicitud</th>
              <th>Remitente</th>
              <th>Email</th>
              <th>Fecha Emision</th>
              <th>Asunto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.name}</td>
                <td>{request.type}</td>
                <td>{request.sender}</td>
                <td>{request.email}</td>
                <td>{request.date}</td>
                <td>{request.subject}</td>
                <td>
                  <button onClick={() => handleReview(request.id)}>Revisar</button>
                  <button className="button-red" onClick={() => handleReject(request.id)}>Rechazar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default TableRequests;