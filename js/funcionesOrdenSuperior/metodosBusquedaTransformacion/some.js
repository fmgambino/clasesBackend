/* 
El método some() funciona igual que el find() recibiendo una 
función de búsqueda. En vez de retornar el elemento encontrado, 
some() retorna true o false según el resultado de la iteración 
de búsqueda.
*/

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "JS")) 
// false

console.log(cursos.some((el) => el.nombre.includes('JS')));
