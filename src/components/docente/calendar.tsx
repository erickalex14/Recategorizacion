import React, { useEffect, useState } from 'react';
import '../../assets/css/calendar.css';
import Swal from 'sweetalert2';

const Calendar = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const crearSolicitud = () => {
    window.location.href = "/docenteCreate";
  };

  return (
    <>
      <header>
        <div>
          <a href="docenteDash">Calendario</a>
        </div>
        <nav>
          <ul>
            <li id="notificaciones">Notificaciones</li>
            <li><a href="/docenteHistory">Historial de solicitudes</a></li>
            <li><a href="/docenteCalendar">Calendario</a></li>
            <li><a href="/">Cerrar sesion</a></li>
            <li><button onClick={crearSolicitud}>Crear solicitud</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="first">
          <div className="cal-container">
            <h3>Enero 2023</h3>
            <ol>
              <li className="day-name">Lun</li>
              <li className="day-name">Mar</li>
              <li className="day-name">Mier</li>
              <li className="day-name">Jue</li>
              <li className="day-name">Vie</li>
              <li className="day-name">Sab</li>
              <li className="day-name">Dom</li>
              <li id="first-day">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
            </ol>
          </div>
        </div>
        <div className="event-list">
          <h3>Proximos eventos</h3>
          <div className="list-container">
            {events.length > 0 ? (
              events.map((event, index) => (
                <div className="card" key={index}>
                  <div>
                    <div className="cicle-container">
                      <div className="circle"></div>
                    </div>
                  </div>
                  <div>{event.title}</div>
                  <div>{event.description}</div>
                  <div>{event.date}, {event.location}</div>
                </div>
              ))
            ) : (
              <div>No hay eventos próximos</div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Calendar;