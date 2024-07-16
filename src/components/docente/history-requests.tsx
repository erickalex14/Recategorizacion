import React, { useEffect, useState } from 'react';
import '../../assets/css/docente-history-requests.css';
import Swal from 'sweetalert2';

const HistoryRequests = () => {
  interface Request {
    title: string;
    type: string;
    date: string;
    subject: string;
    status: string;
  }
  
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setRequests(JSON.parse(storedEvents));
    }
  }, []);

  return (
    <>
      <header>
        <div>
          <a href="/docenteDash">Historial de solicitudes</a>
        </div>
        <nav>
          <ul>
            <li><a href="/docenteDash">Regresar</a></li>
            <li><button>Crear solicitud</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Historial de solicitudes</h2>
        <table>
          <thead>
            <tr>
              <th>nombre solicitud</th>
              <th>tipo solicitud</th>
              <th>Fecha emision</th>
              <th>Asunto solicitud</th>
              <th>Estado solicitud</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((request, index) => (
                <tr key={index}>
                  <td>{request.title}</td>
                  <td>{request.type}</td>
                  <td>{request.date}</td>
                  <td>{request.subject}</td>
                  <td><span className={request.status === 'Aprobado' ? 'cuadro' : 'cuadro-red'}>{request.status}</span></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>No hay solicitudes en el historial.</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default HistoryRequests;