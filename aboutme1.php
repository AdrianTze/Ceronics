<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Kenny Tan -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Kenny Tan</title>
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
		<a href="aboutme1.php#about" class="active"><img src="images/aboutkenny.jpg" alt="Kenny Tan Image"></a>
		<a href="aboutme2.php#about"><img src="images/aboutjosh.jpg" alt="Josh Wong Image"></a>
		<a href="aboutme3.php#about"><img src="images/aboutlai.jpg" alt="Lai Yee Fung Image"></a>
		<a href="aboutme4.php#about"><img src="images/aboutadrian.jpg" alt="Adrian Sim Image"></a>
	</div>
	</div>
</article>

</div>

<section class="aboutme">
<h2 id="typeWriterName" class="name"></h2>
<p class="studentid">101223727</p>
<p class="course">COS10011 Creating Web Applications</p>

<figure>
	<img src="images/aboutkenny.jpg" alt="Kenny Tan Image">
</figure>

<table>
	<tr>
		<th rowspan="2" class="first">Individual Contribution</th>
		<th>Lists of pages</th>
		<td>
			<ul>
				<li>index.html</li>
				<li>enquiry.html</li>
				<li>signup.html</li>
				<li>product1.html</li>
				<li>aboutme1.html</li>
			</ul>
		</td>
	</tr>
	<tr>
		<th>Description</th>
		<td>
			<ul>
				<li>Assign tasks to members</li>
				<li>Design navigation bar and footer </li>
				<li>Design product page (template)</li>
				<li>Collect CSS file from team members</li>
                <li>Merge and finalize the CSS files into one big CSS file</li>
                <li>Involved in doing the assignment report</li>
                <li>Submit the assignment to the submission link</li>
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
		<td>SMK Sungai Maong</td>

	</tr>

	<tr>
		<th>Hobby</th>
		<td>Listening to music</td>
	</tr>

	<tr>
		<th>Ambition</th>
		<td>Software designer</td>
	</tr>
</table>
<p class="studentmail">
	<a href="mailto:101223727@students.swinburne.edu.my">101223727@students.swinburne.edu.my</a>
</p>
</section>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>