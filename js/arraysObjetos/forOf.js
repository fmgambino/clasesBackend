// Ejemplo de FOR...OF
//La sentencia for...of permite recorrer un array ejecutando un bloque de código por cada elemento del objeto.

const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}
