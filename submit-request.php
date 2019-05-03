<?php
// require the functions file
require_once '../functions.php';

// convert date in POST array to proper format
$_POST['date'] = convertDate($_POST['date']);

// convert phone number to just 10 digits
$_POST['phone'] = preg_replace('/[^0-9]/', '', $_POST['phone']);

// sanitize first name field
$_POST['f_name'] = sanitizeString($_POST['f_name']);

// sanitize last name field
$_POST['l_name'] = sanitizeString($_POST['l_name']);

// sanitize notes field
$_POST['notes'] = sanitizeString($_POST['notes']);

// convert POST array into JSON encoded string
$req_obj = json_encode($_POST);

$req_obj = addslashes($req_obj);

$query = "INSERT INTO requests (JSON_request) VALUES ('$req_obj')";

queryMysql($query);

$conn->close();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/materialize.min.css">
        <link rel="stylesheet" href="css/styles.css">
        <style>
            .centered-box {
                position: absolute;
                top: 50%;
                left: 50%;
                padding: 1rem;
                width: 100%;
                max-width: 330px;
                transform: translate(-50%, -50%);
                overflow-x: auto;
                display: flex;
                flex-direction: column;
            }
            .centered-box img {
                max-width: 100px;
                margin-bottom: 1rem;
            }
            .centered-box div {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="centered-box">
            <div>
                <img src="img/bistrobistro-logo.jpg" alt="Bistro! Bistro!">
            </div>
            <h6 class="bb-form-header--blue">
                Thank you!
            </h6>
            <p>
                Your request has been submitted.<br>
                We will contact you within the next 24 hours.
            </p>
            <a href="./" class="bttn bttn--full-width" title="return to Bistro! Bistro!" style="padding: 0.3rem 0.3rem">
                return to Bistro! Bistro!
            </a>
        </div>
    </body>
</html>