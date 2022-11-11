<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Lai Yee Fung -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Lai Yee Fung</title>
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

?>

<div class="aboutbackground">

<?php 

include "include/navigation.php";
include "include/feedback_tab.php";
include "include/calculator_tab.php";

?>

<article id="about">
	<div class="aboutteam">
	<h2>Our Team</h2>
        
	<div class="about_img">
		<a href="aboutme1.php#about"><img src="images/aboutkenny.jpg" alt="Kenny Tan Image"></a>
		<a href="aboutme2.php#about"><img src="images/aboutjosh.jpg" alt="Josh Wong Image"></a>
		<a href="aboutme3.php#about" class="active"><img src="images/aboutlai.jpg" alt="Lai Yee Fung Image"></a>
		<a href="aboutme4.php#about"><img src="images/aboutadrian.jpg" alt="Adrian Sim Image"></a>
	</div>
	</div>
</article>

</div>

<section class="aboutme">
<h2 id="typeWriterName" class="name"></h2>
<p class="studentid">101225312</p>
<p class="course">COS10011 Creating Web Applications</p>

<figure>
	<img src="images/aboutlai.jpg" alt="Lai Yee Fung Image">
</figure>

<table>
	<tr>
		<th rowspan="2" class="first">Individual Contribution</th>
		<th>Lists of pages</th>
		<td>
			<ul>
				<li>promo.html</li>
				<li>enhancements.html</li>
				<li>login.html</li>
				<li>product3.html</li>
				<li>aboutme3.html</li>
			</ul>
		</td>
	</tr>
	<tr>
		<th>Description</th>
		<td>
			<ul>
				<li>Sketch the wireframe of website </li>
				<li>Design promotion page</li>
				<li>Choose some of the images used by the teammate in their respective product to used in the promotion page</li>
				<li>Ask which enhancement had used by the team and place it in enhancement page</li>
				<li>Involved in doing the assignment report</li>
			</ul>
		</td>

	</tr>
	<tr>
		<th rowspan="9" class="first">Personal Information</th>
		<th>Nationalities</th>
		<td>Malaysian</td>
	</tr>
	<tr>
		<th>Age</th>
		<td>19</td>
	</tr>
	<tr>
		<th>Gender</th>
		<td>Male</td>
	</tr>

	<tr>
		<th>Race</th>
		<td>Chinese</td>
	</tr>
	<tr>
		<th>Hometown</th>
		<td>Kota Kinabalu , Sabah</td>
	</tr>
	<tr>
		<th>No. of family Members</th>
		<td>4</td>
	</tr>
	<tr>
		<th>Secondary Schools</th>
		<td>Tshung Tsin Secondary School</td>

	</tr>

	<tr>
		<th>Hobby</th>
		<td>Play games</td>
	</tr>

	<tr>
		<th>Ambition</th>
		<td>Games developer</td>
	</tr>
</table>
<p class="studentmail">
	<a href="mailto:101225312@students.swinburne.edu.my">101225312@students.swinburne.edu.my</a>
</p>
</section>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>