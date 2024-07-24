<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "damianqw@pro-fit.com.pl";
    $subject = "Nowa wiadomość od $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $mail_body = "Imię: $name\n";
    $mail_body .= "Email: $email\n";
    $mail_body .= "Wiadomość:\n$message";

    mail($to, $subject, $mail_body, $headers);

    header("Location: /index.html?message=success");
    exit();
}
?>