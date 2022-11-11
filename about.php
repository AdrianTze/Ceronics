<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Josh Wong -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - About</title>
	<meta charset="utf-8">
	<meta name="author" content="Josh Wong">	
	<meta name="description" content="Assignment">
	<meta name="keywords" content="ceronics, electronics, electrical appliances, home">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<link rel="icon" href="images/icon.png">
</head>

<body class="aboutteam">

<?php 

include "include/header.php";
include "include/login_signup_tab.php";
include "include/add_cart_tab.php";

?>

<div class="aboutbackground">

<?php 

include "include/navigation.php";
include "include/feedback_tab.php";
include "include/calculator_tab.php";

?>

<article>
	<div class="aboutteam">
    <h2>About the Team</h2>
    
	<div class="about_img">
		<a href="aboutme1.php#about"><img src="images/aboutkenny.jpg" alt="Kenny Tan Image"></a>
		<a href="aboutme2.php#about"><img src="images/aboutjosh.jpg" alt="Josh Wong Image"></a>
		<a href="aboutme3.php#about"><img src="images/aboutlai.jpg" alt="Lai Yee Fung Image"></a>
		<a href="aboutme4.php#about"><img src="images/aboutadrian.jpg" alt="Adrian Sim Image"></a>
    </div>
    
    <p>Click to view our information</p>
	</div>
</article>

</div>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>
