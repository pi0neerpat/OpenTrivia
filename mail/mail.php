<?php

 /*----------------------------------------------------------------------------*\
|*  Email settings for sending all emails from your website forms.              *|
 \*============================================================================*/

// Choose here whether to use php mail() function or your SMTP server (recommended) to send the email.
// Use 'smtp' for better reliability, or use 'phpmail' for quick + easy setup with lower reliability.
$emailMethod                = 'smtp'; // REQUIRED value. Options: 'smtp' , 'phpmail'

// Outgoing Server Settings - replace values on the right of the = sign with your own.
// These 3 settings are only required if you choose 'smtp' for emailMethod above.
$outgoingServerAddress      = 'mail.gandi.net'; // Consult your hosting provider.
$outgoingServerPort         = '25';                  // Options: '587' , '25' - Consult your hosting provider.
$outgoingServerSecurity     = 'tls';                 // Options: 'ssl' , 'tls' , null - Consult your hosting provider.

// Sending Account Settings - replace these details with an email account held on the SMTP server entered above.
// These 2 settings are only required if you choose 'smtp' for emailMethod above.
$sendingAccountUsername     = 'Patrick@FDARescue.com';
$sendingAccountPassword     = '1475Fda!';

// Recipient (To:) Details  - Change this to the email details of who will receive all the emails from the website.
$recipientEmail             = 'Patrick@FDARescue.com'; // REQUIRED value.
$recipientName              = 'Patrick';             // REQUIRED value.

// Email details            - Change these to suit your website needs
$emailSubject               = 'Interest in FDARescue (form submission) '; // REQUIRED value. Subject of the email that the recipient will see
$websiteName                = 'FDARescue';                // REQUIRED value. This is used when a name or email is not collected from the website form

$timeZone                   = 'America/New_York';         // OPTIONAL, but some servers require this to be set. 
                                                             // See a list of all supported timezones at: http://php.net/manual/en/timezones.php

// Google reCAPTCHA
$recaptchaSecretKey         = '18cb38cwucb73vo708r6vgshjcbwbfbcvueucbwg';
$recaptchaErrorMessage      = 'There was a problem verifying the Google reCaptcha.  Please try again.';

// Confirmation Message
$sendConfirmationToUser     = false; // leave false to disable confirmation, or use path to an html email template.
$confirmationSubject        = "Thanks for Contacting Company Name"; // The subject of the confirmation email
$confirmationFromName       = "Company Name"; // Used in the "from" field of the email.
$userEmailField             = "email";
$defaultUserName            = "User"; // Used if the form does not include a "name" field.

// CSV
$saveToCSV                  = "email_form.csv";

 /*----------------------------------------------------------------------------*\
|*  You do not need to edit anything below this line, the rest is automatic.    *|
 \*============================================================================*/
include('lib/mail_sender.php');

?>