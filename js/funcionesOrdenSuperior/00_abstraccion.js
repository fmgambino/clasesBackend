// let total = 0;

// function sumarRango(){
//     for (let i = 1; i <= 10; i++) {
//         total += i;
//     }
//     return total;
// }


// console.log(sumarRango(1,10));

//EJEMPLO NUMERO 2

// function calcularPromedio(numeros){
//     let suma = 0;
//     for (let numero of numeros){
//         suma += numero;
//     }
//     return suma / numeros.length
// }
// let promedio = calcularPromedio([10, 5, 20]);
// console.log("Promedio: ", promedio)

//RETORNAR FUNCIONES
// function asignarOperacion(op) {
//     if (op == "sumar") {
//         return (a, b) => a + b
//     } else if (op == "restar") {
//         return (a, b) => a - b
//     }
// }

// ASI HACIAMOS ANTES
function sumatoria(a, b) {
   let suma = a + b;
   return suma;
}

    function restatoria(a, b) {
        let resta = a - b;
        return resta;
}
     
    console.log( sumatoria(3, 61) )
    console.log( restatoria(3, 61) )  //  10

// AHORA LO HACEMOS USANDO RETORNAR FUNCIONES DE ORDEN SUPERIOR

function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2