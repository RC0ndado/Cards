// Importamos React
import React from 'react';

// Importamos el archivo de estilos para este componente
import '../styles/Contenido.css';

// Creamos el componente Contenido con los props recibidos
const Contenido = (props) => {
  return (
    // Renderizamos los elementos con los estilos del archivo CSS importado
    <Contenedor>
      <Titulo>{props.titulo}</Titulo>
      <Parrafo>
        {props.descripcion}
      </Parrafo>
      <Boton>
        {props.boton}
      </Boton>
    </Contenedor>
  );
};

// Exportamos el componente Contenido para poder utilizarlo en otros archivos
export default Contenido;
