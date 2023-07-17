// Escribe una función que reciba una cadena de texto como parámetro y verifique si cumple con los siguientes criterios: debe tener al menos 8 caracteres, contener al menos una letra mayúscula, una letra minúscula y un número. 
// No está permitido usar expresiones regulares 

function verificarTexto(texto) {

  if (texto.length < 8) {
    return false;
  }

  let mayuscula = false;
  let minuscula = false;
  let numero = false;

  for (let i = 0; i < texto.length; i++) {
    const verificar = texto.charAt(i);
    if (verificar >= 'A' && verificar <= 'Z') {
      mayuscula = true;
    } 
    else if (verificar >= 'a' && verificar <= 'z') {
      minuscula = true;
    } 
    else if (verificar >= '0' && verificar <= '9') {
      numero = true;
    }
  }

  return mayuscula && minuscula && numero

}

console.log(verificarTexto('hola'));
console.log(verificarTexto('hola a toda la banda'));
console.log(verificarTexto('Hola a toda la banda'));
console.log(verificarTexto('Hola a toda la banda 1992'));












