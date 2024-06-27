<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primer Hola Mundo en PHP</title>
</head>
<body>
    <h3>Mi Primer Proyecto PHP</h3>
    <h4>Constructores de Lenguaje PHP echo y print</h4>

    <!-- Mi Primer Hola Mundo c/echo -->
    <?php echo ("Hola Mundo \n"); ?>
    <br>
    <?php 
    echo "Mensaje de salida S/PARENTESIS <br> \n";
    echo ("Mensaje de salida C/PARENTESIS <br> \n");
    echo "Parametro 1\n", "Parametro 2\n", "Parametro 3 \n";
    ?>
    <br>
    <br>
    <!-- Mi Primer Hola Mundo c/print -->
    <?php 
    print "Hola, mundo s/Parentesis <br> \n"; //Sin Parentesis
    print ("\n Hola, mundo s/Parentesis \n"); //Con Parentesis
    ?>

    <!-- Ejecutando desde un Scripts de JS -->
    <script>
        console.log( "<?php echo "Hola Mundo por consola"; ?>  ");
    </script>
</body>
</html>