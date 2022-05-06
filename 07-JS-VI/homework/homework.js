// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código: recordar que: m(0) a(1) r(2) i(3) o(4) // con el + se concatena la letra Mayus y el resto del string
  var resultado = nombre[0].toUpperCase() + nombre.slice(1)
  return resultado
} // también se puede hacer solo el return nombre[0].toUpperCase() + nombre.slice(1) ya solo hay una variable


function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb (n1, n2)
} // un callback sería: function callBack(numero1, numero2){
  //                          return numero1 * numero2;
  //                     operacionMatematica (5 , 6 , callBack) ojo, el cb sin ()

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = 0
  for (var numero of numeros){
    suma = suma + numero; // suma += numero
  }
  cb (suma)
} // var numero = [2,4,6,8,10]

  // tambien lo podríamos hacer con un .reduce así:
  // var suma = numeros.reduce(function(acumulador, numeroActual){
  //   return acumulador + numeroActual
  // })
  // cb (suma);
  // }

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código: 
  array.forEach(function(elemento, index){
    cb (elemento)
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  // Nota: mientras hagamos un map y no excluyamos nada del array con un If o demás, la longitud siempre deberia ser igual
  var nuevoArray = []
  array.map(function (elemento){  // el argumento "elemento" hace referencia a cada uno de los elementos que ira
                                  // iterando sobre los elementos de array
    nuevoArray.push(cb(elemento));
  })
  return nuevoArray
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //Nota: Se podría hacer como el anterior, creando un nuevo array, filtrando y metiendo los elementos en el nuevo
  // array y devolviendo el nuevo array, o de una manera simplificada:
  return array.filter(function (elemento){
    return elemento[0] === "a"
  })
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
