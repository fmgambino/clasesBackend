/**
 * El método find() recibe una función de comparación por 
 * parámetro. Captura el elemento que se está recorriendo y 
 * retorna true o false según la comparación ejecutada. 
 * El método retorna el primer elemento que cumpla con esa 
 * condición:

 */

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.precio === 22000)
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined