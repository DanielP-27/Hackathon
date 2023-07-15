// 4.	Escribe una función que reciba una cadena de texto como parámetro y devuelva la cantidad de vocales que contiene. 

function vocalesContenidas(cadenaTexto) {
  let contarVocales = 0
  const vocales = ['a', 'e', 'i', 'o', 'u']
  for (let sumar of cadenaTexto) {
    if (vocales.includes(sumar)) {
      contarVocales++
    }
  }
  return contarVocales
}

console.log(vocalesContenidas('la fortuna sonrie a los valientes'));
