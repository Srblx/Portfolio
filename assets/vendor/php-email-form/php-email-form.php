<?php
/**
 * PHP Email Form Library
 * https://github.com/bootstrapbay/php-email-form
 * Copyright 2021 BootstrapBay
 * 
 * Class PHP_Email_Form
 */
error_reporting(0);
class PHP_Email_Form {

  public $to;
  public $from_name;
  public $from_email;
  public $subject;
  public $message;
  public $headers;

  public $send_email_error_message = 'Erreur lors de l\'envoi de l\'e-mail, veuillez réessayer ultérieurement.';
  public $send_email_success_message = 'Merci pour votre message, nous vous répondrons dès que possible.';

  public $smtp = false;
  public $smtp_auth = true;
  public $smtp_secure = 'ssl';
  public $host = 'smtp.gmail.com';
  public $port = 465;
  public $username = 'your_username';
  public $password = 'your_password';

  public $debug = false;
  public $ajax = false;

  /**
   * PHP_Email_Form constructor.
   */
  function __construct() {
    $this->headers = "From: {$this->from_name} <{$this->from_email}>" . PHP_EOL;
    $this->headers .= "Reply-To: {$this->from_name} <{$this->from_email}>" . PHP_EOL;
    $this->headers .= "MIME-Version: 1.0" . PHP_EOL;
    $this->headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;
  }

  /**
   * Send email
   *
   * @return bool|string
   */
  function send() {
    if ($this->smtp) {
      $mail = new PHPMailer;
      $mail->isSMTP();
      $mail->SMTPAuth = $this->smtp_auth;
      $mail->Host = $this->host;
      $mail->Port = $this->port;
      $mail->SMTPSecure = $this->smtp_secure;
      $mail->Username = $this->username;
      $mail->Password = $this->password;
      $mail->setFrom($this->from_email, $this->from_name);
      $mail->addAddress($this->to);
      $mail->Subject = $this->subject;
      $mail->Body = $this->message;
      $mail->CharSet = 'UTF-8';
      if (!$mail->send()) {
        if ($this->debug) {
          return $mail->ErrorInfo;
        }
        return $this->ajax ? json_encode(array('success' => false, 'message' => $this->send_email_error_message)) : false;
      }
    } else {
      if (!mail($this->to, $this->subject, $this->message, $this->headers)) {
        if ($this->debug) {
          return error_get_last()['message'];
        }
        return $this->ajax ? json_encode(array('success' => false, 'message' => $this->send_email_error_message)) : false;
      }
    }
    return $this->ajax ? json_encode(array('success' => true, 'message' => $this->send_email_success_message)) : true;
  }
}