<?php
$player1 = $_GET["jugador1"];
$player2 = $_GET["jugador2"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Estilos/normalize.css">
    <link rel="stylesheet" href="Estilos/styles1.css">
    <title>Batalla Naval</title>
</head>

<body>
    <div class="container">
        <div class="filter-blur"></div>
        <div id="div-titulo">
            <h1 id="titulo">Batalla Naval</h1>
        </div>
        <div id="tableros">
            <div id="div-texto-tblro">
                <h2 id="texto-tblro"></h2>
            </div>
            <div class="tablero" id="tablero-jugador1"></div>
            <div class="tablero" id="tablero-jugador2"></div>
            <div class="tablero" id="tablero-jugador1-ataca"></div>
            <div class="tablero" id="tablero-jugador2-ataca"></div>
        </div>
        
        <div id="btn-aceptar">
             <input type="submit" value="siguiente  ">
        </div>
        
        <div id="btn-siguiente">
             <input type="submit" value="siguiente turno">
        </div>
    </div>
    <script src="juego.js"></script>
    <script>
        let juego1 = new Juego(<?php echo json_encode($player1); ?>, <?php echo json_encode($player2); ?>);
        juego1.colocarBarcos();
        let btnAceptar = document.getElementById("btn-aceptar");
        btnAceptar.addEventListener("click", () => {
            btnAceptar.style.display = "none";
            juego1.colocarBarcos();
        });
    </script>
</body>

</html>