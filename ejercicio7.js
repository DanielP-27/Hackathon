// 7.	Escribe una función que reciba una cadena de texto como parámetro y devuelva la palabra más larga encontrada en la cadena. 

function encontrarPalabraLarga(palabra) {
  let separar = palabra.split(' ');
  let palabraMasLarga = '';
  for (let i = 0; i < separar.length; i++) {
    if (separar[i].length > palabraMasLarga.length) {
      palabraMasLarga = separar[i];
    } 
  }
  return palabraMasLarga
}

console.log(encontrarPalabraLarga('seguir y creer hasta el final'));

