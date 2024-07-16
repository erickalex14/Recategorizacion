import React, { useEffect, useState } from 'react';
import '../../assets/css/dashboard-docente.css';
import Swal from 'sweetalert2';

const DashboardDocente = () => {
  const [requests, setRequests] = useState<{ title: string; description: string; type: string; subject: string; experience: string; file: string; }[]>([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setRequests(JSON.parse(storedEvents));
    }
  }, []);

  const crearSolicitud = () => {
    window.location.href = "/docenteCreate";
  };


  return (
    <>
      <header>
        <div>
          <a href="../../html/docente/dashboard.html">Panel de control</a>
        </div>
        <nav>
          <ul>
            <li id="notificaciones">Notificaciones</li>
            <li><a href="/docenteHistory">Historial de solicitudes</a></li>
            <li><a href="/docenteCalendar">Calendario</a></li>
            <li><a href="/">Cerrar sesion</a></li>
            <li><button onClick={crearSolicitud} id="crearsolicitud">Crear solicitud</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="profile-container">
          <div className="info-docente">
            <div className="img-container">
              <img src="../../public/user.png" alt="profile" />
            </div>
            <div className="info">
              <div className="info-field">
                <p><strong>Nombre:</strong> Usuari_prueba</p>
                <p><strong>Apellidos:</strong> Prueba</p>
                <p><strong>Correo instit.:</strong> p1234567890@live.uleam.edu.ec</p>
                <p><strong>Correo Personal:</strong> test@test.com</p>
                <p><strong>Celular:</strong> 0912548563</p>
              </div>
            </div>
          </div>
          <div className="data-docente">
            <div className="card">
              <h2>Presentación</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex illum velit illo delectus, atque suscipit porro ullam magnam cum harum eum ea laudantium cumque deserunt enim officiis explicabo ipsum.</p>
            </div>
            <div className="card">
              <h2>Profesiones</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex illum velit illo delectus, atque suscipit porro ullam magnam cum harum eum ea laudantium cumque deserunt enim officiis explicabo ipsum.</p>
            </div>
          </div>
        </div>
        <div className="request-list-container">
          <h2>Solicitudes recientes</h2>
          <div className="list-container">
            {requests.length > 0 ? (
              requests.map((request, index) => (
                <div className="list-card" key={index}>
                  <strong>{request.title}</strong>
                  <p>{request.description}</p>
                  <p>Tipo: {request.type}</p>
                  <p>Asunto: {request.subject}</p>
                  <p>Experiencia: {request.experience}</p>
                  <p>Archivo: {request.file}</p>
                  <p><span className="cuadro">Estado: Enviado</span></p>
                </div>
              ))
            ) : (
              <p>No hay solicitudes recientes.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardDocente;