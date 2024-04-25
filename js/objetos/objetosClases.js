class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre+ " mi edad es:"+ this.edad+" y vivo en: "+ this.calle);
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
const persona3 = new Persona("Bart", 8, "Av. Siempreviva 742");

persona1.hablar();
persona2.hablar();
persona3.hablar();