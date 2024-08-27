<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize input data
    function sanitizeInput($data) {
        $data = trim($data);                 // Remove extra spaces
        $data = stripslashes($data);         // Remove slashes
        $data = htmlspecialchars($data);     // Convert special characters to HTML entities
        return $data;
    }

    // Collect and sanitize input data
    $name = sanitizeInput($_POST['name']);
    $email = sanitizeInput($_POST['email']);
    $phone = sanitizeInput($_POST['phone']);
    $message = sanitizeInput($_POST['message']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Redirect to the homepage if the email is invalid
        header("Location: https://www.mitmol.com/");
        exit;
    }

    // Check for email injection in headers
    $pattern = "/(content-type|bcc:|cc:|to:)/i";
    if (preg_match($pattern, $email) || preg_match($pattern, $message)) {
        // Redirect to the homepage if an email injection is detected
        header("Location: https://www.mitmol.com/");
        exit;
    }

    // Validate phone number (basic validation to check if it's numeric and of reasonable length)
    if (!preg_match("/^[0-9]{10,15}$/", $phone)) {
        // Redirect to the homepage if the phone number is invalid
        header("Location: https://www.mitmol.com/");
        exit;
    }

    // Email details
    $to = "info@mitmol.com";
    $subject = "New Contact Form Submission";

    // Construct the email body
    $email_body = "You have received a new message from your website contact form.\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Attempt to send the email
    mail($to, $subject, $email_body, $headers);

    // Redirect to the homepage after form submission
    header("Location: https://www.mitmol.com/");
    exit;
}
?>
