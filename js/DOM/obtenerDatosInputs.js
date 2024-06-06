document.getElementById("enviarButton").addEventListener("click", function() {
    obtenerDatos();
});

function obtenerDatos(){
    let nombreInput = document.getElementById('nombre');
    let edadInput = document.getElementById('edad');
    
    let nombre = nombreInput.value;
    let edad = edadInput.value;
    
    console.log('Nombre: ', nombre);
    console.log('Edad: ', edad);
}
