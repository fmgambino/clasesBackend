/* Decimos que estamos recorriendo un Array cuando empleamos un bucle para acceder a cada elemento por separado.
Los Array en JavaScript son objetos iterables, lo que permite usar distintas estructuras para iterar sobre ellos.*/

const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}
