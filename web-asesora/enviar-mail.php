<?php

// Validar que los datos existan
if (!isset($_POST['email']) || !isset($_POST['nombre']) || !isset($_POST['telefono']) || !isset($_POST['ciudad']) || !isset($_POST['mensaje'])) {
    die('Error: Faltan datos del formulario');
}

$correo1 = $_POST['email'];
$asunto = "Contacto sitio web";
$nombre = $_POST['nombre'];
$ciudad = $_POST['ciudad'];
$telefono = $_POST['telefono'];
$fecha = date('d/m/Y', time());
$destinatario = "francobessolo3@gmail.com";
$mensaje = $_POST['mensaje'];

$cuerpo = ' 
<html> 
<head> 
<title>' . $asunto . '</title> 
</head> 
<body> 
<h2>' . $asunto . '</h2>
<hr>
<b>Nombre:</b> ' . $nombre . '<br>
<b>Correo:</b> ' . $correo1 . '<br>
<b>Teléfono:</b> ' . $telefono . '<br>                    
<b>Ciudad:</b> ' . $ciudad . '<br>
<b>Fecha:</b> ' . $fecha . '<br>
<hr>
<p> 
' . $mensaje . '
</p> 
</body> 
</html> 
';

$headers = "MIME-Version: 1.0\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
$headers .= "From: $correo1 <$correo1>\r\n";
//dirección de respuesta, si queremos que sea distinta que la del remitente
$headers .= "Reply-To: $correo1\r\n";
//ruta del mensaje desde origen a destino 
$headers .= "Return-path: $correo1\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ============ ENVÍO DE MAIL ============
if (strlen($destinatario)) {
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "Correo enviado correctamente a $destinatario";
        //Cambia el formulario a un mensaje de éxito
        echo '<div class="mail-enviado">';
        echo '<span style="font-size: 30px;"><i class="bi bi-check-circle"></i></span>';
        echo '<p>¡Gracias, nos pondremos en contacto a la brevedad!</p>';
        echo '</div>';
    } else {
        echo "Error al enviar el correo.";
    }
}
?>