// Escribe una función que reciba un número como parámetro y devuelva el factorial de ese número. El factorial de un número se obtiene multiplicando todos los números enteros desde 1 hasta el número dado. 
// No se pueden usar operaciones del lenguaje que realicen esta tarea directamente. 

function factorizar(num) {
  let result = num

  if (num === 0 || num === 1) {
    return 1;
  }

  while (num > 1) {
    num --;
    result *= num;
  }

  return result
}

console.log(factorizar(8));




