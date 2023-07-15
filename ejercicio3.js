// Escribe una función que reciba una cadena de texto con varias palabras separadas por espacios y devuelva la cadena de texto con las palabras ordenadas alfabéticamente. 

function ordenarPalabras(string) {
  let transformar = string.split(' ');
  transformar.sort();
  let stringOrdenado = transformar.join(' ');
  return stringOrdenado

}

console.log(ordenarPalabras('Pablo Antonio Carlos Katherine Daniel Axel'));

