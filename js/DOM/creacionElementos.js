// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
let boton = document.createElement("button");
let parrafoBorrar = document.getElementById("parrafo1")

// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Mundo!</h2>"; 
boton.innerHTML = "<h3> ENVIAR </h3> ";
// Añadir el nodo Element como hijo de body
document.body.append(parrafo);
document.body.append(boton);


//Eliminar Elementos
parrafoBorrar.remove();