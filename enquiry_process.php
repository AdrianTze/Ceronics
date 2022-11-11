<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Kenny Tan -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Enquiry Process</title>
	<meta charset="utf-8">
	<meta name="author" content="Kenny Tan">	
	<meta name="description" content="Assignment">
	<meta name="keywords" content="ceronics, electronics, electrical appliances, home">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<link rel="icon" href="images/icon.png">
</head>

<body class="enqProcess">

<?php 

include "include/header.php";
include "include/login_signup_tab.php";
include "include/add_cart_tab.php";
include "include/navigation.php";
include "include/feedback_tab.php";
include "include/calculator_tab.php";

?>

<?php
     if (isset($_POST['g-recaptcha-response']) && ($_POST['g-recaptcha-response'])){
        $secret = "6LfACKUZAAAAAJloAHVvWMYyDikXSK7Ut4_BePWN";
        $ip = $_SERVER["REMOTE_ADDR"];
        $captcha = $_POST['g-recaptcha-response'];
        $rsp = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip=$ip");
        $arr = json_decode($rsp,TRUE);
        if ($arr['success']){
            //User check the "re-captcha"
            $spamming = false;
        }else{
            //User does not check the "re-captcha"
            $spamming = true; //block the saving of data to database
        }

        $tableContent = array();
        for ($x = 0; $x < 12; $x++) {
            array_push($tableContent, $_POST["hiddenDataSave".$x]);
        }
        //get the value from confirm.php
        $fname = $tableContent[0];
        $lname = $tableContent[1];
        $email = $tableContent[2];
        $phone_no = $tableContent[3];
        $address = $tableContent[4];
        $city = $tableContent[5];
        $state = $tableContent[6];
        $postcode = $tableContent[7];
        $product_type = $tableContent[8];
        $product_brand = $tableContent[9];
        $product_name = $tableContent[10];
        $comment = $tableContent[11]; 
        
        //To check the user check the "re-captcha" or not
        if(!$spamming){
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "ceronics_DB";
            // Create connection
            $conn = mysqli_connect($servername, $username, $password, $dbname);
            
            //write the query to add the value into database
            $sql = "INSERT INTO enquiry (firstname, lastname, email, phone_no, street_address, city, states, postcode, product_type, product_brand, product_name, comment)
                    VALUES ('$fname', '$lname','$email', '$phone_no', '$address', '$city', '$state', '$postcode', '$product_type', '$product_brand', '$product_name', '$comment')";
            mysqli_query($conn, $sql);
        }
    }
?>
<div class="headtitle">
<h1 class="confirm">Enquiry Form Submitted Successfully</h1>
<h2 class="thankyou">Thank you</h2>
</div>

<table class="center" id="confirmFormTable">
<tr>
    <th>Descriptions</th>
    <th>Details</th>
</tr>

<?php

$titleArr = array("First name", "Last name", "Email address", "Contact Number", "Street Address", "City", "State", "Postcode", "Product Type", "Product Brand", "Product Name", "Comments");

$tableInnerHtml = "";
for($x=0;$x<count($tableContent);$x++){
    $tableInnerHtml .= "<tr>";
    $tableInnerHtml .= "<td>".$titleArr[$x]."</td>";
    $tableInnerHtml .= "<td>".$tableContent[$x]."</td>";
    $tableInnerHtml .= "</tr>";
}echo $tableInnerHtml;
?>

</table>
<form class="backhomeContainer" action="index.php" method="post">
    <input type="submit" class="backhome" name="returnhomepage" value="Back to Home"/>
</form>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>