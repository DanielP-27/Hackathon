// Escribe una función que reciba una cadena de texto como parámetro y determine si es un palíndromo. Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha y de derecha a izquierda, ignorando los espacios y las mayúsculas/minúsculas. 

function palindromo(str) {
  let revisar = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(revisar, '');
  // console.log(str);
  let comparacion = str.length;
  // console.log(comparacion);
  for (let i = 0; i < comparacion/2; i++) {
    if (str[i] !== str[comparacion - 1 - i]) {
      return false;
    } 
  }
  return true;
}

console.log(palindromo("¿son robos o sobornos?"));
console.log(palindromo("¿son robos  tal vez son sobornos?"));
console.log(palindromo("no es palindromo") );
console.log(palindromo("arriba la birra"));
