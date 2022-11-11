<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Lai Yee Fung -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Promotions</title>
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

<article class="promocont">
<div class="countdown">
	<h1 class="header">New promotion will be launched in ...</h1>
	<div class="square">
		<div class="digits" id="cd-day">00</div>
		<div class="text">DAYS</div>
	</div>
	<div class="square">
		<div class="digits" id="cd-hr">00</div>
		<div class="text">HOURS</div>
	</div>
	<div class="square">
		<div class="digits" id="cd-min">00</div>
		<div class="text">MINUTES</div>
	</div>
	<div class="square">
		<div class="digits" id="cd-sec">00</div>
		<div class="text">SECONDS</div>
	</div>
</div>

	<h2>Promotions</h2>
	<img src="images/promo.png" alt="Promo" class="promoimg" usemap="#promo">
	<map name="promo">
		<area shape="rect" coords="850,184,1189,243" href="product2.html" alt="Laptops">
		<area shape="rect" coords="1109,256,1332,383" href="product1.html" alt="Mobiles">
		<area shape="rect" coords="686,842,998,924" href="product3.html" alt="Wearables">
		<area shape="rect" coords="160,1823,496,1922" href="product4.html" alt="Appliances">
	</map>
</article>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>
