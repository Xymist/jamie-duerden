<?php

if(isset($_POST['email'])) {

    $email_to = "jamie@jamieduerden.co.uk";

    $email_subject = "New Contact Form Message";

    $name = $_POST['name'];
    $email_from = $_POST['email'];
    $main_input = $_POST['main-input'];

    $email_message = "Form details below.\n\n";

    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }

    $email_message .= "Name: ".clean_string($name)."\n";

    $email_message .= "Email: ".clean_string($email_from)."\n";

    $email_message .= "".clean_string($main_input)."\n";

$headers = 'From: '.$email_from."\r\n".

'Reply-To: '.$email_from."\r\n" .

'X-Mailer: PHP/' . phpversion();

@mail($email_to, $email_subject, $email_message, $headers);

?>