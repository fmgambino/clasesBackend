/* EJEMPLO APLICADO
CREANDO ELEMENTOS DESDE OBJETOS
*/

const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
    {  id: 2,  nombre: "Fideo", precio: 70 },
    {  id: 3,  nombre: "Pan"  , precio: 50},
    {  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
              <p>  Producto: ${producto.nombre}</p>
              <b> $ ${producto.precio}</b>`;
document.body.appendChild(contenedor);
}
