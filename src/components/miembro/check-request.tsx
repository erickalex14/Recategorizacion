import React, { useEffect, useState } from 'react';
import '../../assets/css/check-request.css';
import Swal from 'sweetalert2';

const CheckRequest = () => {
  const [request, setRequest] = useState<any>(null);

  useEffect(() => {
    const storedRequests = localStorage.getItem('requests');
    if (storedRequests) {
      const requests = JSON.parse(storedRequests);
      const currentRequest = requests.find((req: any) => req.id === 1); // Asumiendo que estamos viendo la solicitud con id 1
      setRequest(currentRequest);
    }
  }, []);

  const handleApprove = () => {
    updateRequestStatus('Aprobado');
    Swal.fire('Solicitud aprobada', '', 'success');
  };

  const handleReject = () => {
    updateRequestStatus('Rechazado');
    Swal.fire('Solicitud rechazada', '', 'error');
  };

  const updateRequestStatus = (status: string) => {
    const storedRequests = localStorage.getItem('requests');
    if (storedRequests) {
      const requests = JSON.parse(storedRequests);
      const updatedRequests = requests.map((req: any) => {
        if (req.id === 1) { // Asumiendo que estamos viendo la solicitud con id 1
          return { ...req, status };
        }
        return req;
      });
      localStorage.setItem('requests', JSON.stringify(updatedRequests));
    }
  };

  const handleExit = () => {
    window.location.href = "../../html/docente/dashboard.html";
  };

  if (!request) {
    return <p>Cargando...</p>;
  }

  return (
    <main>
      <div className="top">
        <div>
          <h2>{request.title}</h2>
          <p>{request.type}</p>
        </div>
        <div>
          <button className="button-blue" onClick={handleApprove}>Aprobar</button>
          <button className="button-red" onClick={handleReject}>Rechazar</button>
          <button className="button-yellow" onClick={handleExit}>Salir</button>
        </div>
      </div>
      <div className="mid">
        <div className="descipcion-container">
          {request.description}
        </div>
        <div className="doc-container">
          <p>documentos anclados</p>
        </div>
      </div>
      <div className="bottom">
        <div className="text-area-cont">
          <h2>Mensaje de retroalimentacion</h2>
          <textarea name="" id=""></textarea>
          <p>El mensaje de retroalimentacion se enviara cuando se rechaze o se acepte la solicitud.</p>
        </div>
      </div>
    </main>
  );
};

export default CheckRequest;