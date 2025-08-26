import React from "react";

function ConfiguracionContraseña({ longitud, setLongitud, mayusculas, setMayusculas, minusculas, setMinusculas, numeros, setNumeros, simbolos, setSimbolos, error }) {
  return (
    <div className="configuracion">
      <label>
        Longitud: {longitud}
        <input
          type="range"
          min={8}
          max={32}
          value={longitud}
          onChange={e => setLongitud(Number(e.target.value))}
        />
      </label>
      <label>
        <input type="checkbox" checked={mayusculas} onChange={e => setMayusculas(e.target.checked)} /> Mayúsculas
      </label>
      <label>
        <input type="checkbox" checked={minusculas} onChange={e => setMinusculas(e.target.checked)} /> Minúsculas
      </label>
      <label>
        <input type="checkbox" checked={numeros} onChange={e => setNumeros(e.target.checked)} /> Números
      </label>
      <label>
        <input type="checkbox" checked={simbolos} onChange={e => setSimbolos(e.target.checked)} /> Símbolos
      </label>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default ConfiguracionContraseña;
