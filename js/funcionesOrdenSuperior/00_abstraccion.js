// let total = 0;

// function sumarRango(){
//     for (let i = 1; i <= 10; i++) {
//         total += i;
//     }
//     return total;
// }


// console.log(sumarRango(1,10));

//EEMPLO NUMERO 2

function calcularPromedio(numeros){
    let suma = 0;
    for (let numero of numeros){
        suma += numero;
    }
    return suma / numeros.length
}
let promedio = calcularPromedio([10, 5, 20]);
console.log("Promedio: ", promedio)