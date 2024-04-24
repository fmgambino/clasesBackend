//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log("El Resultado es:", mensaje);
}
//Llamamos primero a sumar y luego a mostrar
sumar(487, 78);            
mostrar(resultado); 