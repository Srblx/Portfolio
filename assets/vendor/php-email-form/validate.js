
// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');

//   forms.forEach( function(e) {
//     e.addEventListener('submit', function(event) {
//       event.preventDefault();

//       let thisForm = this;

//       let action = thisForm.getAttribute('action');
//       let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
//       if( ! action ) {
//         displayError(thisForm, 'The form action property is not set!');
//         return;
//       }
//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');

//       let formData = new FormData( thisForm );

//       if ( recaptcha ) {
//         if(typeof grecaptcha !== "undefined" ) {
//           grecaptcha.ready(function() {
//             try {
//               grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//               .then(token => {
//                 formData.set('recaptcha-response', token);
//                 php_email_form_submit(thisForm, action, formData);
//               })
//             } catch(error) {
//               displayError(thisForm, error);
//             }
//           });
//         } else {
//           displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//         }
//       } else {
//         php_email_form_submit(thisForm, action, formData);
//       }
//     });
//   });

//   function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: {'X-Requested-With': 'XMLHttpRequest'}
//     })
//     .then(response => {
//       if( response.ok ) {
//         return response.text();
//       } else {
//         throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
//       }
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       if (data.trim() == 'OK') {
//         thisForm.querySelector('.sent-message').classList.add('d-block');
//         thisForm.reset(); 
//       } else {
//         throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//       }
//     })
//     .catch((error) => {
//       displayError(thisForm, error);
//     });
//   }

//   function displayError(thisForm, error) {
//     thisForm.querySelector('.loading').classList.remove('d-block');
//     thisForm.querySelector('.error-message').innerHTML = error;
//     thisForm.querySelector('.error-message').classList.add('d-block');
//   }

// })();



document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('telephone');
  const subjectInput = document.getElementById('subject');
  const errorContainers = document.querySelectorAll('.error-message');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const subject = subjectInput.value.trim();
    let isValid = true;
    
    // Validation du nom
    if (name === '' || name.length < 2 || name.length > 30) {
      setError(nameInput, 'Le nom doit contenir entre 2 et 30 caractères.');
      isValid = false;
    } else {
      clearError(nameInput);
    }
    
    // Validation de l'email
    if (!isValidEmail(email)) {
      setError(emailInput, 'Veuillez entrer une adresse e-mail valide.');
      isValid = false;
    } else {
      clearError(emailInput);
    }
    
    // Validation de l'objet
    if (subject.length > 80) {
      setError(subjectInput, 'L\'objet doit contenir au maximum 80 caractères.');
      isValid = false;
    } else {
      clearError(subjectInput);
    }
    
    // Validation du téléphone (facultatif)
    if (phone !== '' && !isValidPhone(phone)) {
      setError(phoneInput, 'Veuillez entrer un numéro de téléphone valide.');
      isValid = false;
    } else {
      clearError(phoneInput);
    }
    
    // Envoi du formulaire s'il est valide
    if (isValid) {
      // Ici, vous pouvez envoyer le formulaire ou effectuer d'autres actions nécessaires
      // form.submit();
      
      // Exemple d'affichage d'un message de succès
      const successMessage = document.querySelector('.sent-message');
      successMessage.style.display = 'block';
    }
  });
  
  // Fonction de validation d'une adresse e-mail
  function isValidEmail(email) {
    // Vérifie si l'email correspond au format classique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Fonction de validation d'un numéro de téléphone
  function isValidPhone(phone) {
    // Vérifie si le téléphone correspond au format classique (chiffres uniquement)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  }
  
  // Fonction pour afficher un message d'erreur
  function setError(input, message) {
    const errorContainer = input.nextElementSibling;
    const errorMessage = errorContainer.querySelector('.error-message');
    errorMessage.textContent = message;
    errorContainer.style.display = 'block';
  }
  
  // Fonction pour supprimer un message d'erreur
  function clearError(input) {
    const errorContainer = input.nextElementSibling;
    errorContainer.style.display = 'none';
  }
});