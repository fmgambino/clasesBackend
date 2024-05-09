/* 
El método reduce() nos permite obtener un único valor tras 
iterar sobre el array. Funciona como un método que resume el 
array a un único valor de retorno. 

*/

const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21