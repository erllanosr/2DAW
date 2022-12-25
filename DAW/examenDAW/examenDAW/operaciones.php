<?php
$num1 = $_POST['num1'];
$num2 = $_POST['num2'];
$suma = $num1 + $num2;
$resta = $num1 - $num2;
$multiplicacion = $num1 * $num2;
$division = $num1 / $num2;
?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <title>Examen DAW | Resultados</title>
</head>

<body>
  <div class="container">
    <h1>Resultados</h1>
    <h3>Los números son: <?php echo $num1 ?> y <?php echo $num2 ?></h3>
    <p>La suma es: <?php echo $suma ?></p>
    <p>La resta es: <?php echo $resta ?></p>
    <p>La multiplicación es: <?php echo $multiplicacion ?> </p>
    <p>La división es: <?php echo $division ?></p>
  </div>

</body>

</html>