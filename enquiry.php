<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Kenny Tan -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Enquiry</title>
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


$error_message = "";
if(isset($_POST['enquirySubmit'])){
	if (empty($_POST["fname"])) {
		$error_message .= "First name is required <br>";
	} elseif (strlen($_POST["fname"]) > 25) {
		$error_message .= "First name must not exceed 25 characters <br>";
	} elseif (preg_match('/[^a-zA-Z]/', (str_replace(' ','', $_POST["fname"])))) {
		$error_message .= "Invalid first name <br>";
	} else {
		$fname = test_input($_POST["fname"]);
	}

	if (empty($_POST["lname"])) {
		$error_message .= "Last name is required <br>";
	} elseif (strlen($_POST["lname"]) > 25) {
		$error_message .= "Last name must not exceed 25 characters <br>";
	} elseif (preg_match('/[^a-zA-Z]/', (str_replace(' ','', $_POST["lname"])))) {
		$error_message .= "Invalid last name <br>";
	} else {
		$lname = test_input($_POST["lname"]);
	}
	
	if (empty($_POST["email"])) {
		$error_message .= "Email is required <br>";
	} elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
		$error_message .= "Invalid email format <br>";
	} else {
		$email = test_input($_POST["email"]);	
	}

	if (empty($_POST["phone"])) {
		$error_message .= "Phone number is required <br>";
	} elseif (strlen($_POST["phone"])!=11) {
		$error_message .= "Phone number must be 10 digits <br>";
	} elseif (preg_match("/^[0-9]{3}-[0-9]{7}$/", ($_POST["phone"]))) {
		$phone = test_input($_POST["phone"]);
	} else {
		$error_message .= "Invalid phone number <br>";
	}

	if (empty($_POST["street"])) {
		$error_message .= "Address is required <br>";
	} elseif (strlen($_POST["street"])>40) {
		$error_message .= "Maximum characters is 40! <br>";
	} else {
		$street = test_input($_POST["street"]);
	}

	if (empty($_POST["city"])) {
		$error_message .= "City is required <br>";
	} elseif (strlen($_POST["city"])>12) {
		$error_message .= "Maximum characters of city is 12! <br>";
	} else {
		$city = test_input($_POST["city"]);
	}

	if (empty($_POST["state"])) {
		$error_message .= "State is required <br>";
	} else {
		$state = test_input($_POST["state"]);
	}

	if (empty($_POST["postcode"])) {
        $error_message .= "Postcode is required <br>";
    } elseif (!is_numeric($_POST["postcode"])) {
        $error_message .= "Postcode must be in numbers <br>";
    } elseif(strlen($_POST["postcode"])!=5) {
        $error_message .= "Postcode restricted to 5 digits <br>";
    }else{
        $postcode = $_POST["postcode"];
    }

	if(empty($_POST["productType"])||empty($_POST["productBrand"])||empty($_POST["productName"])){
		$error_message .= "Product subject is required <br>";
	}else{
		$subject = true;
	}

	if(isset($fname) && isset($lname) && isset($email) && isset($phone) && isset($street) && isset($city) && isset($state) && isset($postcode) && isset($subject)) {
		session_start();
		$_SESSION["fname"] = $_POST["fname"];
		$_SESSION["lname"] = $_POST["lname"];
		$_SESSION["email"] = $_POST["email"];
		$_SESSION["phone"] = $_POST["phone"];
		$_SESSION["street"] = $_POST["street"];
		$_SESSION["city"] = $_POST["city"];
		$_SESSION["state"] = $_POST["state"];
		$_SESSION["postcode"] = $_POST["postcode"];
		$_SESSION["productType"] = ucfirst($_POST["productType"]);
		$_SESSION["productBrand"] = $_POST["productBrand"];
		$_SESSION["productName"] = $_POST["productName"];
		$_SESSION["comments"] = $_POST["comments"];

		echo "<script>window.location.href = 'confirm.php' </script>";
	}else{
		phpErrorBox("'$error_message'");
		$phpFname = $_POST["fname"];
		$phpLname = $_POST["lname"];
		$phpEmail = $_POST["email"];
		$phpPhoneNum = $_POST["phone"];
		$phpStreet = $_POST["street"];
		$phpCity = $_POST["city"];
		if(isset($_POST["state"])){
			$phpState = $_POST["state"];
		}else{
			$phpState = "";
		}
		$phpPostcode = $_POST["postcode"];
		$phpComments = $_POST["comments"];
	}
}else{
	$phpFname = $phpLname = $phpEmail = $phpPhoneNum = $phpStreet = $phpCity = $phpState = $phpPostcode = $phpComments = "";
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

function phpErrorBox($msg){
    echo '<script>
        var messageTimer;
        window.clearTimeout(messageTimer);
        messageTimer = window.setTimeout(function(){
            document.getElementsByClassName("messageBox")[0].style.display = "none";
        }, 2000);
        document.getElementsByClassName("messageBoxContent")[0].innerHTML = ' . $msg . ';
        document.getElementsByClassName("messageBox")[0].style.display = "block";
    </script>';
} 
?>
<form class="enquiry" name="enquiry" method="post" onsubmit="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?> ">
<fieldset>
<legend class="enquiry">Customer's Enquiry</legend>
<table>

<tr>
	<td>First Name: <span class="formdot">*</span></td>
	<td>Last Name: <span class="formdot">*</span></td>
</tr>

<tr>
	<td class="notes">
        <input type="text" placeholder="Input your first name" name="fname" size="40" id="enqfname" title="Alphabetical characters only" value="<?php echo $phpFname ?>">
        <p>*Alphabetical characters only</p>
	</td>
	<td class="notes">
        <input type="text" placeholder="Input your last name" name="lname" size="40" id="enqlname" title="Alphabetical characters only" value="<?php echo $phpLname ?>">
        <p>*Alphabetical characters only</p>
	</td>
</tr>

<tr>
	<td>Email: <span class="formdot">*</span></td>
	<td>Phone No. <span class="formdot">*</span></td>
</tr>

<tr>
	<td>
		<input type="text" placeholder="youremail@example.com" name="email" size="40" id="enqemail" value="<?php echo $phpEmail ?>">
	</td>
	<td>
		<input type="tel" id="enqtel" name="phone" placeholder="###-#######" size="40" title="Digits only" value="<?php echo $phpPhoneNum ?>">
	</td>
</tr>

<tr>
	<td colspan="2">

	<fieldset class="address">
	<legend>Address</legend>
	<table>
	<tr>
		<td colspan="3">Street address: <span class="formdot">*</span></td>
	</tr>

	<tr>
		<td colspan="3">
			<input type="text" name="street" id="enqstreetadd" value="<?php echo $phpStreet ?>">
		</td>
	</tr>

	<tr>
		<td>City: <span class="formdot">*</span></td>
		<td>State: <span class="formdot">*</span></td>
		<td>Postcode: <span class="formdot">*</span></td>
	</tr>

	<tr>
		<td>
			<input type="text" name="city" id="enqcity" maxlength="20" value="<?php echo $phpCity ?>">
		</td>
		<td>
			<select id="enqstate" name="state" value="<?php echo $phpState ?>">
                <option disabled selected value=''>- Select -</option>
                <optgroup label="Federal Territories">
				<?php
				$placeArray = array("Kuala Lumpur","Labuan","Putrajaya","Sarawak", "Sabah", "Johor", "Kedah", "Kelantan", "Malacca", "Negeri Sembilan", "Pahang", "Penang", "Perak", "Perlis", "Selangor", "Terengganu");
				$placeValueArray = array("KUL","LBN","PJY",'SWK','SBH','JHR','KDH','KTN','MLK','NSN','PHG','PNG','PRK','PLS','SGR','TRG');

				for ($x = 0; $x < 3; $x++) {
					echo '<option ';
					if ($phpState == $placeValueArray[$x] ) echo 'selected';
					echo ' value=' . $placeValueArray[$x] . '>' . $placeArray[$x] . '</option>';
				}
				echo '</optgroup>
				<optgroup label="States">';
				for ($x = 3; $x < count($placeValueArray); $x++) {
					echo '<option ';
					if ($phpState == $placeValueArray[$x] ) echo 'selected';
					echo ' value=' . $placeValueArray[$x] . '>' . $placeArray[$x] . '</option>';
				}
				?>
                </optgroup>
			</select>		
		</td>
		<td>
			<input type="text" name="postcode" id="enqpostcode" title="Digits only" value="<?php echo $phpPostcode ?>">
		</td>
	</tr>
	</table>
	</fieldset>

	</td>
</tr>
<tr>
	<td colspan="2">
		Product Type: <span class="formdot">*</span>
		<select name="productType" class="product" id="product_type_selection" onchange="return enquirySelection()">
			<option disabled selected value=''>- Select -</option>
		</select>
	</td>
</tr>

<tr>
	<td colspan="2">
		<div id="product_brand_container"></div>
		<div id="product_name_container"></div>
	</td>
</tr>

<tr>
	<td colspan="2" id="subject">
		<p>Subject >> Enquiry on [<span id="subject_title">-Select the selection above-</span>]</p>
	</td>
</tr>

<tr>
	<td colspan="2" class="comments">Comments:</td>
</tr>

<tr>
	<td colspan="2">
		<textarea name="comments" id="enqcomments" rows="5" placeholder="Enter your comments here..."><?php echo $phpComments ?></textarea>
	</td>
</tr>

</table>	

</fieldset>

<div class="enquirybutton">
	<input type="submit" name="enquirySubmit" value="Submit">
	<input id="enqResetBtn" type="reset" value="Reset">
</div>

</form>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>
