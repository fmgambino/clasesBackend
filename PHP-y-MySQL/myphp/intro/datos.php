<h1>TIPO DE DATOS</h1>
<?php

//Tipos de Datos Escalares
// 1. Enteros (Integer)

$integerVar = 123;

// 2. Como Flotante (Float)

$floatCar = 3.1416;

// 3. Cadenas de Texto (String)

$stringVar = "Hola, Mundo !";
$stringVar2 = 'Hola, Mundo !';

// 4. Booleanos (Boolean)

$boolVar = true; // Devuelve Verdadero
$boolVar2 = false; // Devuelve Falso

//Tipos de Datos Compuestos
// 1. Tipo Arrays
$arrayVar = array(1, 2, 3, 4);
$assocArrayVar = array("Clave1" => "valor1. ", "Clave2" => "valor2. ");


// 2. Tipo Objetos (Objects)
// Instancias de clases que pueden contener propiedads y metodos

class MiClase {
    public $propiedad = "Valor";
}
$objeto = new MiClase();

//Tipos de Datos Especiales
// 1. NULL (Nulo)
//Representa una variable sin valor

$nullVar = null;

// 2. Recursos (Resource)
// Referencias a recursos externos (bases de datos, archivos, etc)
$file = fopen("archivo.txt", "r");

//MANIPULACION Y CONVERSION DE TIPOS DE DATOS
// 1. Casting Explicito
// Conversion de un tipo de dato a otro de manera explicita.

$floatVar= 123.321;

$intVar = (int) $floatVar;
$stringVar = (string) $intVar;

echo ("Convertido a entero: "); 

$floatVar1 = 9.80;
$intVar1 = (int) $floatVar1;

echo $intVar1;

$stringVar3 = (string) $intVar1;
echo ("<br> Convertido a String: ". $stringVar3);

// 2. Funciones de Conversion
// PHP proporciona funciones especificas para convertir tipos de datos

$floatVar4 = floatval("123.45");
echo $floatVar4;

$intVar4 = intval("123");
echo ("<br>$intVar4");
$boolVar4 = boolval(1)

?>
