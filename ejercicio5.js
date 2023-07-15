// 5.	Escribe una función que reciba un número como parámetro y determine si es un número primo. Devuelve true si es primo y false si no lo es. 

function numeroPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
    return false;
  }
  else {
    return true
  }
}}

console.log(numeroPrimo(22));
