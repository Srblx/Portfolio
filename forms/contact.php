<?php
// Inclure le fichier de la bibliothèque PHP Email Form
if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
  include( $php_email_form );
} else {
  die( 'Unable to load the "PHP Email Form" Library!');
}

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

// Décommenter le code suivant si vous souhaitez utiliser SMTP pour envoyer des e-mails
/*
$contact->smtp = array(
  'host' => 'example.com',
  'username' => 'example',
  'password' => 'pass',
  'port' => '587'
);
*/

// Ajouter chaque champ de formulaire à l'e-mail à envoyer
$contact->add_message( $_POST['name'], 'Nom');
$contact->add_message( $_POST['email'], 'Adresse e-mail');
$contact->add_message( $_POST['subject'], 'Sujet');
$contact->add_message( $_POST['message'], 'Message', 10);

// Envoyer l'e-mail et renvoyer une réponse au format JSON
echo $contact->send();
?>
