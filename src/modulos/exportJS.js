// Forma de exportar modulos con ESM
export const error = "error algo salio mal";
export const datos = {
  nombre: "Daniel",
};

export const calculadora = (numero1, numero2) => {
  return numero1 * numero2;
};

export const bandera = true;

// Forma de exportar modulos con COMMONJS
const error = "error algo salio mal";
const datos = {
  nombre: "Daniel",
};
const calculadora = (numero1, numero2) => {
  return numero1 * numero2;
};
const bandera = true;

module.exports.error = error;
module.exports.calculadora = calculadora;
module.exports.datos = datos;
module.exports.bandera = true;
