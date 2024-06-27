/* 
El método map() crea un nuevo array con todos los elementos del 
original transformados según las operaciones de la función 
enviada por parámetro. Tiene la misma cantidad de elementos 
pero los almacenados son el return de la función:
*/

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
const precios = cursos.map((el) => el.precio)
console.log(precios)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]
