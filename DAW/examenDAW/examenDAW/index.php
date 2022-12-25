<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <title>Examen DAW</title>
</head>

<body>
  <div class="container">
    <h1>Ingresa 2 números</h1>
    <br>
    <form action="operaciones.php" method="POST">
      <label for="num1">Número 1:</label>
      <input type="number" name="num1" id="num1" required>
      <br>
      <br>
      <label for="num2">Número 2:</label>
      <input type="number" name="num2" id="num2" required>
      <br>
      <br>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</body>

</html>