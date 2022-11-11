<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Kenny Tan -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store</title>
	<meta charset="utf-8">
	<meta name="author" content="Kenny Tan">	
	<meta name="description" content="Assignment">
	<meta name="keywords" content="ceronics, electronics, electrical appliances, home">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
    <link rel="icon" href="images/icon.png">
</head>

<body class="home">

<?php 

include "include/create_database.php";
include "include/create_tables.php"; 
include "include/header.php";
include "include/login_signup_tab.php";
include "include/add_cart_tab.php";
include "include/navigation.php";
include "include/feedback_tab.php";
include "include/calculator_tab.php";

?>

<div id="slideshowContainer" class="slideshowContainer">
    <div class="imageSlides visible">
        <img src="images/slide1.jpg" alt="Slide show image 1">
        <p class="imgtxt">Shop with us now</p>
    </div>
    <div class="imageSlides">
        <img src="images/slide2.jpg" alt="Slide show image 2">
        <p class="imgtxt">Best product</p>
    </div>
    <div class="imageSlides">
        <img src="images/slide3.jpg" alt="Slide show image 3">
        <p class="imgtxt">Our Company</p>
    </div>
    <div class="imageSlides">
        <img src="images/slide4.jpg" alt="Slide show image 4">
        <p class="imgtxt">Our Office</p>
    </div>
    <div class="slideshowArrow">
        <span id="leftArrow">‹</span>
        <span id="rightArrow">›</span>
    </div>
    <div class="slideshowCircles">
        <span class="circle"></span>
        <span class="circle dot"></span>
        <span class="circle"></span>
        <span class="circle"></span>
    </div>
</div>

<article class="home">
<div class="memberbenefits">
    <div>
    <h2>Ceronics' Membership</h2>
    <ul>
        <li>Benefits of joining member
            <ul>
                <li>5% off from the normal price of every item</li>
                <li>Able to enjoy promotion price</li>
                <li>Collect Cero Coins to enjoy next rebate</li>
                <li>Mystery free gift with minimum purchase of RM 1000</li>
            </ul>
        </li>
    </ul>
    <figure>
        <img src="images/member_card.png" alt="Member Card Image">
        <a><p id="signUpNowBtn">Sign Up Now</p></a>
    </figure>
    </div>

</div>

<div class="essentials">
<h2>Ceronics' Essentials</h2>

<div class="essentials_img">

<div class="essentialsub">
    <figure>
        <img src="images/essential_delivery.png" alt="Delivery icon">
        <figcaption>Free & Fast Delivery<span class="ess_discription">Deliver within 5 days</span></figcaption>
    </figure>
    <figure>
        <img src="images/essential_quality.png" alt="Quality icon">
        <figcaption>Quality Assurance<span class="ess_discription">Up to 3 years warranty</span></figcaption>
    </figure>
</div>

<div class="essentialsub">
    <figure>
        <img src="images/essential_expert.png" alt="Expert icon">
        <figcaption>Reliable agent<span class="ess_discription">Trustworthy products</span></figcaption>
    </figure>
    <figure>
        <img src="images/essential_price.png" alt="Price icon">
        <figcaption>Affordable price<span class="ess_discription">Promotions every week</span></figcaption>
    </figure>
</div>

</div>

</div>   

<div class="category">

<h2>Shop by Category</h2>

<div class="odd">
    <div class="container">
        <div class="pcontent">
            <p class="main">Mobiles</p>
            <p id="typeWriterMobile"></p>
        </div>
        <figure>
            <img src="images/allmobiles.png" alt="Mobiles Image">
            <a><p class="shopNowBtn">Shop Now</p></a>
        </figure>
    </div>
</div>

<div class="even">
    <div class="container">
        <div class="pcontent">
            <p class="main">Laptops</p>
            <p id="typeWriterLaptop"></p>
        </div>
        <figure>
            <img src="images/alllaptops.png" alt="Laptops Image">
            <a><p class="shopNowBtn">Shop Now</p></a>
        </figure>
    </div>
</div>

<div class="odd">
    <div class="container">
        <div class="pcontent">
            <p class="main">Wearables</p>
            <p id="typeWriterWearables"></p>
        </div>
        <figure>
            <img src="images/allwearables.png" alt="Wearables Image">
            <a><p class="shopNowBtn">Shop Now</p></a>
        </figure>
    </div> 
</div>

<div class="even">
    <div class="container">
        <div class="pcontent">
            <p class="main">Appliances</p>
            <p id="typeWriterAppliances"></p>
        </div>
        <figure>
            <img src="images/allappliances.png" alt="Appliances Image">
            <a><p class="shopNowBtn">Shop Now</p></a>
        </figure>
    </div>
</div>

</div>

<div class="youtubevideo">

<h2>Official Brands</h2>
<div class="description">
    <p>The YouTube videos below are from some of the official brands which Ceronics.Inc partnership with. The videos is about their latest released products. Get to know more of their products by visiting their official YouTube channel.</p>
    <div>Note: Kindly scroll horizontally to view the next video.<br>
    *The scroll bar is located below the videos*</div>
</div>


<div id="youtubevideo" class="scroll">
<div>
    <p>Mobiles</p>
    <iframe src="https://www.youtube.com/embed/K0VWwY6MR0k" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
    <p>Laptops</p>
    <iframe src="https://www.youtube.com/embed/SZ1PuNFHBvE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
    <p>Wearables</p>
    <iframe src="https://www.youtube.com/embed/5bvcyIV4yzo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
    <p>Appliances</p>
    <iframe src="https://www.youtube.com/embed/0QtjLr0Nx44" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

</div>

</article>

<?php include "include/footer.php"; ?>

<script type="text/javascript" src="script/script.js"></script>
<script type="text/javascript" src="script/enhancements.js"></script>
</body>
</html>
