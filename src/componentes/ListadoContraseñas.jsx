import React from "react";

function ListadoContraseñas({ contraseñas, copiarContraseña, eliminarContraseña }) {
  return (
    <div className="listado-contraseñas">
      <h3>Contraseñas generadas</h3>
      <ul>
        {contraseñas.map((c, i) => (
          <li key={i}>
            <input type="text" value={c} readOnly />
            <button onClick={() => copiarContraseña(c)} className="btn-contraseña">Copiar</button>
            <button onClick={() => eliminarContraseña(i)} className="btn-contraseña btn-eliminar">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListadoContraseñas;
