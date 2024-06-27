/* El método Math.sqrt() retorna la raíz cuadrada de un número. 
Si se le envía un número negativo, el método retorna NaN.
*/

Math.sqrt(9) // 3
Math.sqrt(2) // 1.414213562373095
Math.sqrt(1)  // 1
Math.sqrt(-1) // NaN

let raiz2 = prompt ("Calcular Raiz Cuadrada de: ");

raiz2 = parseFloat(raiz2);
console.log("La Raiz cuadrada de: ", raiz2+" es = ", Math.sqrt(raiz2));