const numeros= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const duplicado = []

let tableMultplicar = prompt("Ingrese el numero de la tabla: ");

tableMultplicar = parseInt(tableMultplicar);

function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

porCadaUno(numeros, (el)=> {
    duplicado.push(el * tableMultplicar);
})

console.log(duplicado) // [2, 4, 6, 8]
alert("El resultado es: " + duplicado);