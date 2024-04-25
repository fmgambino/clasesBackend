//Ejemplo Aplicado: Objestos, Producto y Array
let totalIva = 0;
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase(); //Tipo Cacarter
        this.precio  = parseFloat(precio); //Tipo Numerico Flotante
        this.vendido = false; //Tipo Booleano
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    mostrarIva(){
        console.log(`Producto: ${this.nombre} - Precio con IVA: $${this.precio.toFixed(2)}`);
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){
    producto.sumaIva();
    totalIva += producto.precio; // Acumular el IVA de cada producto
    producto.mostrarIva();
}

//Calcular la suma total del IVA
   console.log(`Suma total del IVA:  $${totalIva.toFixed(2)}`);

// Visualizar e IVA de cada Producto