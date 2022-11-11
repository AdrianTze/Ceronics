<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Adrian Sim -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Trade In</title>
	<meta charset="utf-8">
	<meta name="author" content="Adrian Sim">	
	<meta name="description" content="Assignment">
	<meta name="keywords" content="ceronics, electronics, electrical appliances, home">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<link rel="icon" href="images/icon.png">
</head>

<body class="tradein">

<?php 

include "include/header.php";
include "include/login_signup_tab.php";
include "include/add_cart_tab.php";
include "include/navigation.php";
include "include/feedback_tab.php";
include "include/calculator_tab.php";

?>

<figure class="trade_in">
    <img src="images/trade_in.png" alt="Trade In">
</figure>

<section>
    <h2>
        How it works?
    </h2>
    <br/><br/>
    <table class="steps">
        <tbody>
            <tr>
                <td>1   Complete your new online purchase of new Ceronics device.</td>
                <td><img src="images/cart_logo.png" alt="cart logo" class="cart_logo"> <br/><br/></td>
            </tr>
            <tr>
                <td>2   Backup your old smartphone and download instaCash app. Complete your device diagnostic in the app.</td>
                <td><img src="images/backup_logo.png" alt="backup logo" class="backup_logo"><br/><br/></td>
            </tr>
            <tr>
                <td>3   Fill in your order number from your Ceronics purchase receipt sent to your email.(HINT:Order no. under order section)</td>
                <td><img src="images/fill_form_logo.png" alt="fill logo" class="fill_logo"><br/><br/></td>
            </tr>
            <tr>
                <td>4   Place your order with instaCash and we will retrieve your old device at your doorstep.</td>
                <td><img src="images/instaCash_logo.png" alt="instaCash logo" class="instaCash_logo"><br/><br/></td>
            </tr>
            <tr>
                <td>5   Get a cashback upon collection of your old smartphone.</td>
                <td><img src="images/cashback_logo.png" alt="cashback logo" class="cashback_logo"><br/><br/></td>
            </tr>
        </tbody>
    </table>
    <br/><br/>
    <p class="enquiry">
        For more enquiries, please do not hesitate to contact us: <br/>
        Telephone: +601002003004
        <br>
        Email:  <a href="mailtoceronics2020@gmail.com" >ceronics2020@gmail.com</a>
    </p>
</section>
<br/><br/><br/>
<article>
    <h2>Special Trade-in Program</h2>
    <h2><strong>Price from 1st March 2020. Price subject to change without further notice</strong></h2>
    <h3>Trade-in is available for more devices and appliances which are not listed here. Please contact us to find out more.</h3>
    <figure>
        <img src="images/iphone_trade_in.png" alt="iphone trade in" class="iphone_trade_in">
    </figure>
    <figure>
        <img src="images/mobile_trade_in.png" alt="mobile trade in" class="mobile_trade_in">
    </figure>
    <br/><br/><br/>
    <h3>Note:</h3>
    <ul class="trade_in_note">
        <li>All devices will undergo a thorough inspection before being accepted for trade-in.</li>
        <li>Price for “cracked-screen” devices will be provided on the crew has perform inspection.</li>
        <li><strong>Kindly take note that price may differ from the table above, depending on the extent of damage.</strong></li>
        <li>Trade-in device must be able to be powered on or well-functioned otherwise it will not be accepted.</li>
        <li>Customer may trade in their device to purchase any item from the Retail Outlet: iPhones, iPod, Samsung, Electrolux, Toshiba or Accessories.</li>
        <li>No multiple devices are allowed for trade-in to purchase one single item.</li>
        <li>Trade-in is stackable with in-store promotions.</li>
        <li>Ceronics reserves the right to amend the terms and condition at any time without prior notice.</li>
        <li>For more information, kindly seek the help of our Ceronics staff members.</li>
    </ul>
</article>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>