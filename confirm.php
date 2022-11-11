<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Kenny Tan -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Confirmation Enquiry</title>
	<meta charset="utf-8">
	<meta name="author" content="Kenny Tan">	
	<meta name="description" content="Assignment">
	<meta name="keywords" content="ceronics, electronics, electrical appliances, home">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<link rel="icon" href="images/icon.png">
</head>

<body>

<?php 

include "include/header.php";
include "include/login_signup_tab.php";
include "include/add_cart_tab.php";
include "include/navigation.php";
include "include/feedback_tab.php";
include "include/calculator_tab.php";

?>

<form action="enquiry_process.php" id="confirmForm" name="confirm" method="post">
    <fieldset>
	<legend>Confirmation Enquiry Details</legend>
	<table id="confirmFormTable">
		<?php

		$sessionData = array($_SESSION["fname"], $_SESSION["lname"], $_SESSION["email"], $_SESSION["phone"], $_SESSION["street"], $_SESSION["city"], $_SESSION["state"], $_SESSION["postcode"],"", $_SESSION["comments"]);

		$tableContent = array("First Name","Last Name","Email","Phone No.","Street address","City","State","Postcode","","Comments");
		$dataToEcho = "";
        for ($x = 0; $x < count($tableContent); $x++) {
            if($x == 8){
                $dataToEcho .= '<tr>
                    <td rowspan="3">Enquiry on Product >></td>
                    <td class="secondRow">Type</td>
                    <td class="confirmField">' . $_SESSION["productType"] . '</td>
                </tr>
                <tr>
                    <td class="secondRow">Brands</td>
                    <td class="confirmField">' . $_SESSION["productBrand"] . '</td>
                </tr>
                <tr>
                    <td class="secondRow">Name</td>
                    <td class="confirmField">' . $_SESSION["productName"] . '</td>
                </tr>';             
            }else{
                $dataToEcho .= '<tr><td>' . $tableContent[$x] . ' </td><td colspan="2" class="confirmField">' . $sessionData[$x] . '</td></tr>';
            }
        }echo $dataToEcho;
		
		$hiddenData = array($_SESSION["fname"], $_SESSION["lname"], $_SESSION["email"], $_SESSION["phone"], $_SESSION["street"], $_SESSION["city"], $_SESSION["state"], $_SESSION["postcode"],$_SESSION["productType"],$_SESSION["productBrand"],$_SESSION["productName"], $_SESSION["comments"]);

        for ($x = 0; $x < count($hiddenData); $x++) {
			echo '<input type="hidden" name="hiddenDataSave' . $x . '" value="' . $hiddenData[$x] . '" >';
		}
		?>
	</table>
	</fieldset>
	<div class="buttonsContain">
		<div class="g-recaptcha" data-callback="recaptchaCallback" data-sitekey="6LfACKUZAAAAAJoQjwdQt4AZsGt2eXnaCX6dIba3"></div>
		<input type="submit" value="Confirm Submit" id ="Confirmbutton" onclick="doSubmitConfirm()" disabled = "disabled">
		<input type="button" value="Cancel" id="cancelButton" onclick="cancelSubmitConfirm()">
	</div>
</form>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

</body>
</html>
