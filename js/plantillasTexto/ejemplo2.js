/* PLANTILLAS LITERALES E innerHTML
La plantillas son un medio para incluir variables en la 
estructura HTML de nodos nuevos o existentes , modificando 
el innerHTML. */


let producto   = { id: 1,  nombre: "Arroz", precio: 125.45, Marca: "Arroz 53" };
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
                        <p>  Marca: ${producto.Marca}</p>
                        <b> $${producto.precio}</b>`;
//Agregamos el contenedor creado al body
document.body.appendChild(contenedor);