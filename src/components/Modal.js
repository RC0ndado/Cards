import React, { Fragment } from 'react';
import '../styles/Modal.css'; // Importamos el archivo de estilos para este componente

const Modal = ({ state, cambiarEstado, titulo, contenido }) => {
  return (
    <Fragment>
      {/* Si el estado del modal es verdadero, se muestra el overlay y el contenido del modal */}
      {state && (
        <div className="overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>{titulo}</h3> {/* Mostramos el título pasado como propiedad */}
            </div>
            <button className="close-button" onClick={() => cambiarEstado(false)}> {/* Botón para cerrar el modal */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            {contenido} {/* Mostramos el contenido del modal pasado como propiedad */}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal; // Exportamos el componente por defecto