<h1>VARIABLES</h1>

<?php
echo "Uso y Declaracion de Variables en PHP";


// En PHP, se pueden declarar variables utilizando el signo $ seguido 
//del nombre de la variable. El nombnre de la variable debe comenzar con 
//una letra o un guion bajo (_), seguido de letras, numeros o guiones bajos. -->

$nombre = "Pepito"; //Tipo string
$edad = 30; // Tipo Entero
$altura = 1.75; // Tipo Flotante
$tiene_hijos = false; //Tipo Booleana


//Uso echo para imprimir un mensaje con variables.

echo "\n <br><br> Nombre: " . $nombre . "<br>";
echo "\n Edad: " . $edad . "<br>";
echo "\n Altura" . $altura . "<br>";
echo "\n Hijos: " . $tiene_hijos . "<br>";

?>