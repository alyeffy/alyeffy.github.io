<?php

// grab recaptcha library
require_once "assets/php/recaptchalib.php";

// your secret key
$secret = "6LdFolAUAAAAAAA6_G2N9FQLEDgBnvX8LXpcQvIm";
 
// empty response
$response = null;
 
// check secret key
$reCaptcha = new ReCaptcha($secret);

// if submitted check response
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}

if(isset($_POST['message']) && $response != null && $response->success){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$sub = $_POST['subject'];
	$message = $_POST['message'];
    
	
	$to      = 'alyssa.f2406@gmail.com';
	$subject = 'New Message from Site Contact Form: '. $sub .

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Form Submission Successful. Thank you and I will get back to you as soon as I can!';
    }
	else{
		$res['message'] = 'Failed to send mail. Please email me directly at alyssafegen [at] alumni.ubc.ca';
	}
	
	
	echo json_encode($res);
}

?>