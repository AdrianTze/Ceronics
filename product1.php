<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Kenny Tan -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Mobiles</title>
	<meta charset="utf-8">
	<meta name="author" content="Kenny Tan">	
	<meta name="description" content="Assignment">
	<meta name="keywords" content="ceronics, electronics, electrical appliances, home, mobiles">
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

<article id="product1" class="products">

<header id="productBanner"></header>
<p class="notes">*Click the brand logo above to filter the lists below*</p>

<h2 class="brands">
    <span class="leftline"></span>
    <img src="images/apple_logo.png" alt="Apple Logo" id="apple">
    <span class="rightline"></span>
</h2>

<div class="pro_image_container"></div>


<h2 class="brands">
    <span class="leftline"></span>
    <img src="images/samsung_logo.png" alt="Samsung Logo" id="samsung">
    <span class="rightline"></span>
</h2>

<div class="pro_image_container"></div>


<h2 class="brands">
    <span class="leftline"></span>
    <img src="images/huawei_logo.png" alt="Huawei Logo" id="huawei">
    <span class="rightline"></span>
</h2>

<div class="pro_image_container"></div>


<h2 class="brands">
    <span class="leftline"></span>
    <img src="images/oppo_logo.png" alt="Oppo Logo" id="oppo">
    <span class="rightline"></span>
</h2>

<div class="pro_image_container"></div>


<div class="productdetails">
	<div>
	<h2>General Details for Mobiles</h2>
	<table>
		<tr>
			<th>Brands available:</th>
			<th>Other color options:</th>
		</tr>
		<tr>
			<td>
				<ul>
					<li>Apple</li>
					<li>Samsung</li>
					<li>Huawei</li>
					<li>Oppo</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Black</li>
					<li>White</li>
					<li>Red</li>
				</ul>
			</td>
		</tr>
		<tr>
			<th colspan="2">Cero coins conditions:</th>
		</tr>
		<tr>
			<td colspan="2">
				<table>
					<tr>
						<td>Total Cero coins collected for each RM 100 spent</td>
						<td>10 coins</td>
					</tr>
					<tr>
						<td>Maximum Cero coins collected for each item purchased</td>
						<td>300 coins</td>
					</tr>
					<tr>
						<td>Total rebate for each 10 Cero coins</td>
						<td>RM 1</td>
					</tr>
					<tr>
						<td>Maximum rebate per item purchased</td>
						<td>RM 100</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	</div>
</div>

</article>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>
