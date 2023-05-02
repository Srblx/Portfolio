<?php
// Inclure le fichier de la bibliothèque PHP Email Form
require_once '../assets/vendor/php-email-form/php-email-form.php';

// Créer une nouvelle instance de la classe PHP_Email_Form
$contact = new PHP_Email_Form;

// Activer le mode Ajax pour le formulaire de contact
$contact->ajax = true;

// Définir l'adresse e-mail du destinataire
$receiving_email_address = 'serbelloni.a@outlook.fr'; // Remplacer par votre adresse e-mail personnelle
$contact->to = $receiving_email_address;

// Récupérer les valeurs du formulaire soumis via POST
$contact->from_name = $_POST['name'];
$contact->from_email = $_POST['email'];
$contact->subject = $_POST['subject'];
$contact->message = $_POST['message'];

// Envoyer l'e-mail et renvoyer une réponse au format JSON
echo json_encode($contact->send());

// Décommenter le code suivant si vous souhaitez utiliser SMTP pour envoyer des e-mails
/*
$contact->smtp = array(
  'host' => 'example.com',
  'username' => 'example',
  'password' => 'pass',
  'port' => '587'
);
*/

?>
