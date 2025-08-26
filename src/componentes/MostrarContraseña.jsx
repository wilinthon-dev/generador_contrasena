import React from "react";


function MostrarContraseña({ contraseña, copiarContraseña, regenerarContraseña, guardarContraseña }) {
  return (
    <div className="mostrar-contraseña">
      <input type="text" value={contraseña} readOnly className="campo-contraseña" />
      <button onClick={copiarContraseña}>Copiar</button>
      <button onClick={regenerarContraseña}>Regenerar</button>
      <button onClick={guardarContraseña}>Guardar</button>
    </div>
  );
}

export default MostrarContraseña;
