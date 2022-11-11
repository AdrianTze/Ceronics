<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Kenny Tan Chee Lun -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Enhancements 2</title>
	<meta charset="utf-8">
	<meta name="author" content="Lai Yee Fung">	
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

<article class="enhance3">
    <h2>PHP Enhancements</h2>
    <ol>
        <li>User Management Module
            <ul>
                <li>
                    The sign up and login form are included in all pages. When user click the sign up or login buttons from the header, these forms will pop out. The sign up form is also validated using Php codes to preserve the integrity of the server data. Validation like checking the password and the re-type password field are similar or not are done from Php codes also. After the user submitted the from, the system will check whether the username the user keyed in is used by others or not. If the username is used by others, the system will output a message that ask the user to input the username again as the username is used by others. If everything had pass through the server side validation, the data will then being saved into the database’s table named user_signup. 
                </li>
                <li>
                    After the user sign up using their respective username, they will be able to login with their username and password now. After they login, the header will change to a button where they can logout.
                </li>
                <li>
                    After that, if the admin wants to check the user’s information, the admin had to input the username ceroadmin and password Ceroadminpw12 in the login panel (login form) to get into the admin’s menu.
                </li>
                <li>
                    The team had used the looping method to generate the table row and column. The admin can even delete the account of user by clicking the delete button allocated on the respective row. All the admin’s php pages are stored in a folder named admin. After the admin click the log out button, the system will direct to the home page. 
                </li>
                <li>
                    Some part of the user management module is referenced and paraphrased form <a target="_blank" href="https://www.tutorialrepublic.com/php-tutorial/php-mysql-login-system.php">https://www.tutorialrepublic.com/php-tutorial/php-mysql-login-system.php.</a>
                </li>
            </ul>
        </li>
        <li>Product and Sales Tracking Module
            <ul>
                <li>
                    After the products are added to the cart, the user can now press the pay now button. After the cutomer click the pay now button, the system will save the total bills into the database’s table named total_sales. Besides, the system will also save the product name and product quantity to database. The code used here is the &lt;input type="hidden"&gt;. The pay now button is actually a form’s submit button. The values are DOM by JavaScript before submitting the form.
                </li>
                <li>
                     When the customer click the pay now button in the cart, the sales will be added in cumulatively and recorded in this table. To view the quantity of product, the admin had to press the “View Quantity Product” button. There is also a column in the Product Quantity table called “Updated At” to show the date and time the field is being updated.
                </li>
            </ul>
        </li>
        <li>Feedback Tracking Module
            <ul>
                <li>
                    After the client submit the feedback rating emoji and give comments(optional), the system will then add the quantity of that particular rating (rating from 1 to 5, red emoji to green emoji) and save it to the tables feedback_rating and feedback_comments in the database.
                </li>
                <li>
                    If the admin click the view feedback data from the admin’s main menu, the system will direct to this interface. The feedback rating table shows the quantity of user rate the company. The feedback comments tables shows the comments from user.
                </li>
            </ul>
        </li>
        <li>Anti-Spam Feature: Re-captcha
            <ul>
                <li>
                    For the anti-spam feature, the team implemented one of the most common and widely used feature called “Re-captcha” which is developed by Google. This feature is used to prevent malicious attack or to avoid any spam by hackers to enable the online business model to run smoothly and safely.
                </li>
                <li>
                    First and foremost the re-captcha feature is implemented in the confirm.php page when user is prompted to confirm their enquiry form information prior submit to the database enquiry table. Before the submission is executed, user must check the “re-captcha” feature just before they submit it. To check it, the user had to select some images related to the field generated. The “Re-captcha” has a time-limit to remain valid, once the time-limit is exceeded, it will be expired and the user will have to re-check the “re-captcha” in order to submit the form.  
                </li>
                <li>
                    When the “re-captcha” is successfully checked and the confirm button is clicked, it will validate and check for the validity of the “g-captcha-response” in the enquiry_process.php. The validity of the “g-captcha-response” is checked by using “isset($_POST[“g-captcha-response”])  and ($_POST[“g-captcha-response”])” to see whether the captcha box is entered correctly or not. If the user does not check the “re-captcha” no data will be saved to the database. This can avoid user to send many similar data and waste the storage of the database. 
                </li>
                <li>
                    This information is referenced from <a target="_blank" href="https://developers.google.com/recaptcha/docs/verify">https://developers.google.com/recaptcha/docs/verify</a> and <a target="_blank" href="https://developers.google.com/recaptcha/docs/display">https://developers.google.com/recaptcha/docs/display.</a>
                </li>
            </ul>
        </li>
    </ol>
</article>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>
