<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Josh Wong -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Josh Wong</title>
	<meta charset="utf-8">
	<meta name="author" content="Josh Wong">	
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
		<a href="aboutme2.php#about" class="active"><img src="images/aboutjosh.jpg" alt="Josh Wong Image"></a>
        <a href="aboutme3.php#about"><img src="images/aboutlai.jpg" alt="Lai Yee Fung Image"></a>
		<a href="aboutme4.php#about"><img src="images/aboutadrian.jpg" alt="Adrian Sim Image"></a>
	</div>
	</div>
</article>

</div>

<section class="aboutme">
<h2 id="typeWriterName" class="name"></h2>
<p class="studentid">101224610</p>
<p class="course">COS10011 Creating Web Applications</p>

<figure>
	<img src="images/aboutjosh.jpg" alt="Josh Wong Image">
</figure>

<table>
	<tr>
		<th rowspan="2" class="first">Individual Contribution</th>
		<th>Lists of pages</th>
		<td>
			<ul>
				<li>disclaimer.html</li>
				<li>faq.html</li>
				<li>privacy.html</li>
				<li>product2.html</li>
				<li>aboutme2.html</li>
			</ul>
		</td>
	</tr>
	<tr>
		<th>Description</th>
		<td>
			<ul>
				<li>Design about me page (template)</li>
				<li>Request teammates’ photograph and personal information to be used in about me page</li>
				<li>Research on other webpages about how they do FAQ page</li>
				<li>Search for product images</li>
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
		<td>Kuching, Sarawak</td>
	</tr>
	<tr>
		<th>No. of family Members</th>
		<td>4</td>
	</tr>
	<tr>
		<th>Secondary Schools</th>
		<td>SMK DPHA Gapor</td>

	</tr>

	<tr>
		<th>Hobby</th>
		<td>Playing piano, guitar</td>
	</tr>

	<tr>
		<th>Ambition</th>
		<td>Programmer</td>
	</tr>
</table>
<p class="studentmail">
	<a href="mailto:101224610@students.swinburne.edu.my">101224610@students.swinburne.edu.my</a>
</p>
</section>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>