/*El método slice devuelve una copia de una parte del 
Array dentro de un nuevo Array, empezando por el inicio 
hasta fin (fin no incluído). El Array original no se 
modificará.
 */

const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
console.log(masculinos);
const femeninos = nombres.slice(3, 5); // Nuevo array desde la posición 1 a 3.
console.log(femeninos);
// masculinos contiene ['Pedro','Miguel']
