<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


if(isset($_POST['submitContact']))
{
    $name = $_POST['name'];
    // $business_owns = $_POST['business-owns'];
    $business_type = $_POST['business-type'];
    $business_name = $_POST['business-name'];
    $business_type = $_POST['business-type'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];


    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->Username   = 'ketbusiness12@gmail.com';                     //SMTP username
        $mail->Password   = 'refn oxnq iglc wvte';                               //SMTP password

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //ENCRYPTION_SMTPS 465 - Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('ketbusiness12@gmail.com', 'Ket Shar');
        $mail->addAddress('ketbusiness12@gmail.com', 'Ket Shar');     //Add a recipient

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'New enquiry - Keten';

        $bodyContent = '<div>Hello, you got a new enquiry</div>
            <div>Name: '.$name.'</div>
            <div>Business-Type: '.$business_type.'</div>
            <div>Business-Name: '.$business_name.'</div>
            <div>Phone: '.$phone.'</div>
            <div>Email: '.$email.'</div>';
        
        $mail->Body = $bodyContent; 
        
        if($mail->send())
        {
            $_SESSION['status'] = "Thank you contact us - KetShar";
            header("Location: {$_SERVER["HTTP_REFERER"]}");
            echo '<script>alert("Message sent successfully. We will get back to you soon."); window.location = "../../index.html";</script>';
            exit(0);
        }
        else
        {
            $_SESSION['status'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"; 
            echo '<script>alert("Message not sent"); window.location = "../../index.html";</script>';
            header("Location: {$_SERVER["HTTP_REFERER"]}");
            exit(0);
        }
        
       
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
else
{
    header('Location: ../../index.html');
    exit(0);
}

?>