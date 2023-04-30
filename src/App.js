import React, { useState } from 'react';
import Modal from './components/Modal'; // importamos el componente Modal
import './App.css'; // importamos el archivo CSS de nuestra App

const App = () => {
  // definimos nuestro estado inicial de modal en falso
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="contenedor-botones">
        <button onClick={() => setModal(!modal)}>Modal 1</button> {/* al hacer clic en este botón, cambiamos el estado de nuestra variable modal */}
      </div>

      {/* aquí usamos nuestro componente Modal, pasándole como propiedades nuestro estado modal y el método para cambiar su valor, además del título y contenido que queremos mostrar */}
      <Modal
        state={modal}
        cambiarEstado={setModal}
        titulo="Financiamiento"
        contenido={
          <>
            <h1>Seguro simple</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
            <button>Aceptar</button>
            <h1>Seguro 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
            <button>Aceptar</button>
            <h1>Seguro simple</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
            <button>Aceptar</button>
          </>
        }
      />

    </div>
  );
};

export default App;