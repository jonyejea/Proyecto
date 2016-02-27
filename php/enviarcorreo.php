
<?php
// El mensaje
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];
$mensaje = "Nombre: $nombre\r\nCorreo Electronico: $correo\r\nMensaje:\r\n$mensaje";
/*
// Si cualquier línea es más larga de 70 caracteres, se debería usar wordwrap()
$mensaje = wordwrap($mensaje, 70, "\r\n");

// Enviarlo
mail('jonatanlaborda@gmail.com', "D.D. Contacto: $asunto", $mensaje);*/
echo "$nombre";
?>
