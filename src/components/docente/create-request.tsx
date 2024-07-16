import React from 'react';
import '../../assets/css/create-request.css';
import Swal from 'sweetalert2';

const CreateRequest = () => {
  const handleCancel = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/docenteDash";
      }
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const newEvent = {
      title: form['name-request'].value,
      type: form['request-type'].value,
      subject: form['asunto'].value,
      description: form['descipcion-solicitud'].value,
      experience: form['experiencia'].value,
      file: form['file-req'].files[0]?.name || ''
    };

    const storedEvents = localStorage.getItem('events');
    const events = storedEvents ? JSON.parse(storedEvents) : [];
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));

    Swal.fire({
      title: 'Solicitud creada',
      text: 'Tu solicitud ha sido creada exitosamente.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      window.location.href = "/docenteDash";
    });
  };

  return (
    <>
      <header>
        <div>
          <a href="/docenteCreate">Crear solicitud</a>
        </div>
        <nav>
          <ul>
            <li><a href="/docenteDash">Regresar</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="input-field">
                <label htmlFor="name-request">Nombre de la solicitud</label>
                <input required type="text" name="name-request" id="name-request" />
              </div>
              <div className="input-field">
                <label htmlFor="request-type">Tipo de solicitud</label>
                <select required name="request-type" id="request-type">
                  <option value="promotion">Promocion</option>
                  <option value="recatorize">Recategorizacion</option>
                </select>
              </div>
              <div className="input-field">
                <label htmlFor="asunto">Asunto de solicitud</label>
                <input required name="asunto" id="asunto" type="text" />
              </div>
              <div className="input-field">
                <label htmlFor="descipcion-solicitud">Descipcion solicitud</label>
                <textarea required name="descipcion-solicitud" id="descipcion-solicitud"></textarea>
              </div>
            </div>
            <div>
              <div className="input-field">
                <label htmlFor="experiencia">Experiencia, publicaciones, logros</label>
                <textarea required name="experiencia" id="experiencia"></textarea>
              </div>
              <div className="input-field">
                <label htmlFor="file-req">Cargar documentos referentes</label>
                <input type="file" required id="file-req" name="file-req" />
              </div>
            </div>
            <div className="btn-container">
              <button type="submit">Crear solicitud</button>
              <button className="button-red" id="cancelar" type="button" onClick={handleCancel}>Cancelar</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default CreateRequest;