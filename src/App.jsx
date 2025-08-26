
import React, { useState } from "react";
import ConfiguracionContraseña from "./componentes/ConfiguracionContraseña";
import MostrarContraseña from "./componentes/MostrarContraseña";
import ListadoContraseñas from "./componentes/ListadoContraseñas";
import { generarContraseña } from "./utilidades/generarContraseña";
import "./App.css";


function App() {
  const [longitud, setLongitud] = useState(12);
  const [mayusculas, setMayusculas] = useState(true);
  const [minusculas, setMinusculas] = useState(true);
  const [numeros, setNumeros] = useState(true);
  const [simbolos, setSimbolos] = useState(false);
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [contraseñas, setContraseñas] = useState([]);
  const [mensajeCopiado, setMensajeCopiado] = useState("");

  const generar = () => {
    const nueva = generarContraseña({ longitud, mayusculas, minusculas, numeros, simbolos });
    if (!nueva) {
      setError("Selecciona al menos un tipo de carácter.");
      setContraseña("");
      return;
    }
    setError("");
    setContraseña(nueva);
  };

  const copiarContraseña = () => {
    if (contraseña) {
      navigator.clipboard.writeText(contraseña);
      setMensajeCopiado("¡Contraseña copiada al portapapeles!");
      setTimeout(() => setMensajeCopiado(""), 2000);
    }
  };

  const copiarContraseñaGuardada = (contraseñaGuardada) => {
    navigator.clipboard.writeText(contraseñaGuardada);
    setMensajeCopiado("¡Contraseña copiada al portapapeles!");
    setTimeout(() => setMensajeCopiado(""), 2000);
  };

  const eliminarContraseña = (indice) => {
    setContraseñas(contraseñas.filter((_, i) => i !== indice));
  };

  const regenerarContraseña = () => {
    generar();
  };

  const guardarContraseña = () => {
    if (contraseña && !error) {
      setContraseñas([contraseña, ...contraseñas]);
    }
  };

  React.useEffect(() => {
    generar();
  }, [longitud, mayusculas, minusculas, numeros, simbolos]);

  return (
    <>
      <div className="contenedor-app">
        <h1>Generador de Contraseñas Seguras</h1>
        <MostrarContraseña
          contraseña={contraseña}
          copiarContraseña={copiarContraseña}
          regenerarContraseña={regenerarContraseña}
          guardarContraseña={guardarContraseña}
        />
        <div className="contenido-principal">
          <ConfiguracionContraseña
            longitud={longitud}
            setLongitud={setLongitud}
            mayusculas={mayusculas}
            setMayusculas={setMayusculas}
            minusculas={minusculas}
            setMinusculas={setMinusculas}
            numeros={numeros}
            setNumeros={setNumeros}
            simbolos={simbolos}
            setSimbolos={setSimbolos}
            error={error}
          />
          <ListadoContraseñas 
            contraseñas={contraseñas} 
            copiarContraseña={copiarContraseñaGuardada}
            eliminarContraseña={eliminarContraseña}
          />
        </div>
      </div>
      {mensajeCopiado && <div className="notificacion">{mensajeCopiado}</div>}
    </>
  );
}

export default App;
