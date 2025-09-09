export function generarContraseña({ longitud, mayusculas, minusculas, numeros, simbolos }) {
  const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
  const caracteresNumeros = "0123456789";
  const caracteresSimbolos = "!@#$%^&*()-_=+[]{};:,.<>?/";

  let conjunto = "";
  if (mayusculas) conjunto += caracteresMayusculas;
  if (minusculas) conjunto += caracteresMinusculas;
  if (numeros) conjunto += caracteresNumeros;
  if (simbolos) conjunto += caracteresSimbolos;

  if (!conjunto) return null;

  let contraseña = "";
  let obligatorios = [];
  if (mayusculas) obligatorios.push(caracteresMayusculas[Math.floor(Math.random() * caracteresMayusculas.length)]);
  if (minusculas) obligatorios.push(caracteresMinusculas[Math.floor(Math.random() * caracteresMinusculas.length)]);
  if (numeros) obligatorios.push(caracteresNumeros[Math.floor(Math.random() * caracteresNumeros.length)]);
  if (simbolos) obligatorios.push(caracteresSimbolos[Math.floor(Math.random() * caracteresSimbolos.length)]);

  for (let i = 0; i < longitud - obligatorios.length; i++) {
    contraseña += conjunto[Math.floor(Math.random() * conjunto.length)];
  }
  contraseña += obligatorios.join("");
  return contraseña.split("").sort(() => Math.random() - 0.5).join("");
}
