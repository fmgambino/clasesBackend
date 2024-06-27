/*El método Math.random() genera un número pseudo-aleatorio 
entre 0 y 1, siendo el 0 límite inclusivo y el 1 exclusivo.
*/

console.log( Math.random() ) // 0.6609867980868442
console.log( Math.random() ) // 0.09291446900104305
console.log( Math.random() ) // 0.6597817047013095

// números entre 0 y 10
console.log( Math.random() * 10 )
// números entre 0 y 50
console.log( Math.random() * 50)
// números entre 20 y 50
console.log( Math.round (Math.random() * 30 + 40 ))

const generadorNumero = () => {
    return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() )