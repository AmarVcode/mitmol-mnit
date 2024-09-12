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
    $email = sanitizeInput($_POST['email']);
    $product = sanitizeInput($_POST['product']); // Get the hidden field value

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Redirect to the homepage if the email is invalid
        header("Location: https://www.mitmol.com/");
        exit;
    }

    // Check for email injection in headers
    $pattern = "/(content-type|bcc:|cc:|to:)/i";
    if (preg_match($pattern, $email)) {
        // Redirect to the homepage if an email injection is detected
        header("Location: https://www.mitmol.com/");
        exit;
    }

    // Email details
    $to = "info@mitmol.com";
    $subject = "New Product Brochure Request";

    // Construct the email body
    $email_body = "You have received a new request for a product brochure.\n\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Product: $product\n";

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
