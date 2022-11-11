<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Josh Wong -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Laptops</title>
	<meta charset="utf-8">
	<meta name="author" content="Josh Wong">	
	<meta name="description" content="Assignment">
	<meta name="keywords" content="ceronics, electronics, electrical appliances, home, laptop">
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

<article class="products">

<header id="productBanner"></header>
<p class="notes">*Click the brand logo above to filter the lists below*</p>

<h2 class="brands">
    <span class="leftline"></span>
    <img src="images/asus_logo.png" alt="Asus Logo" id="asus">
    <span class="rightline"></span>
</h2>

<div class="pro_image_container"></div>


<h2 class="brands">
    <span class="leftline"></span>
    <img src="images/acer_logo.png" alt="Acer Logo" id="acer">
    <span class="rightline"></span>
</h2>

<div class="pro_image_container"></div>


<h2 class="brands">
    <span class="leftline"></span>
    <img src="images/msi_logo.png" alt="MSI Logo" id="msi">
    <span class="rightline"></span>
</h2>

<div class="pro_image_container"></div>


<h2 class="brands">
    <span class="leftline"></span>
    <img src="images/lenovo_logo.png" alt="Oppo Logo" id="lenovo">
    <span class="rightline"></span>
</h2>

<div class="pro_image_container"></div>

<div class="productdetails">
	<div>
	<h2>General Details for Laptops</h2>
	<table>
		<tr>
			<th>Brands available:</th>
			<th>Other color options:</th>
		</tr>
		<tr>
			<td>
				<ul>
					<li>Asus</li>
					<li>Acer</li>
					<li>MSi</li>
					<li>Lenovo</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Black</li>
					<li>White</li>
					<li>Silver</li>
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
						<td>500 coins</td>
					</tr>
					<tr>
						<td>Total rebate for each 10 Cero coins</td>
						<td>RM 5</td>
					</tr>
					<tr>
						<td>Maximum rebate per item purchased</td>
						<td>RM 300</td>
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
