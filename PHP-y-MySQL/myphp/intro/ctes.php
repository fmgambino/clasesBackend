<!-- <h1>CONSTANTES</h1> -->
<?php
//define("PI", 3.1416);
//const GRAVEDAD = 9.8;
//?>

<h3>CALCULAR EL PERIMETRO DE UNA CIRCUNFERENCIADE RADIO 5</h3>

<?php
//Definicion de constantes
define("PI", 3.1416);
const GRAVEDAD = 9.8;

// Radio de; Corculo
$radio = 5;

//Calculo del perimetro del circulo
$perimetro = 2 * PI * $radio;

// Imprimir el resultado
echo "El perimetro del Circulo de Radio $radio es: $perimetro";

?>


<h3>CALCULAR LA VELOCIDAD DE UN OBJETO DE MASA 1KG EN CAIDA LIBRE A LOS 15 SEGUNDOS</h3>
 
<?php
//Definicion de constantes

const  G = 9.8;

// Tiempo
$tiempo = 15;

//Calculo de la velocidad en caida Libre
$velocidad = G * $tiempo;

// Imprimir el resultado
echo "La velocidad del objeto en caida Libre a los $tiempo es: $velocidad m\s";

?>
