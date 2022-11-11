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

<article class="enhance enhance2">
    <h2>Enhancements 2</h2>
    <ol>
        <li>Slideshow dynamic effect function
            <ul>
                <li>
                    A few images are chosen to display in the slide show in index.html, the slideshow effect used will changes the slide by itself every 5 seconds. User can also press the left or right arrow button to view the next or previous slides. This effect is added so that user no need to scroll down to see the slide picture.<br>
                    This information is referenced from:<br>
                    (<a href="https://stackoverflow.com/questions/55955595/auto-manual-carousel-combination-html-css-js">https://stackoverflow.com/questions/55955595/auto-manual-carousel-combination-html-css-js</a>)
                </li>
                <li><span class="goToLocationEnhance2">Go to location</span></li>
            </ul>
        </li>
        <li>Add to cart function
            <ul>
                <li>
                    When user clicked the "Add to Cart" button in the product page, that particular product will be added to the cart. To let the user view the items added in the cart, a button is added in the element above the navigation bar of every page. When user scroll the web page downwards, another button will be displayed on fixed position at the upper-right corner of the web page. A calculation function is also added to calculate the total price for all the products selected in the cart. The user can increase, decrease and delete the quantity of product in the cart also.<br>
                    This information is referenced from:<br>
                    (<a href="https://www.youtube.com/watch?v=YeFzkC2awTM">https://www.youtube.com/watch?v=YeFzkC2awTM</a>)
                </li>
                <li><span class="goToLocationEnhance2">Go to location</span></li>
            </ul>
        </li>
        <li>Calculator function
            <ul>
                <li>
                    To access the calculator, a calculator button is placed at the bottom left corner of every web pages. The JavaScript code used is "setInterval" to show the drop-down calculator panel from the top of the web page. The calculator can do some simple maths calculation. Some error message will be displayed also when user clicked some invalid buttons.<br>
                    This information is referenced from:<br>
                    (<a href="https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/">https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/</a>)
                </li>
                <li><span class="goToLocationEnhance2">Go to location</span></li>
            </ul>
        </li>
        <li>Pop-up preview for enquiry form confirmation submission function
            <ul>
                <li>
                    To let the user to have a preview of the page after submitted their enquiry form, a confirm.html page is added and will be displayed after the user submitted the enquiry form. In the confirm.html page, it will show the details the user filled in in enquiry.html page in table form. The JavaScript code used is "sessionStorage" to transfer the data from enquiry.html to confirm.html.<br>
                    This information is referenced from:<br>
                    (The unit COS10011 Creating Web Applications | Lab 6 Activity: Document Object Model)
                </li>
                <li><span class="goToLocationEnhance2">Go to location</span></li>
            </ul>
        </li>
        <li>Typewriter effects function
            <ul>
                <li>
                    This effect is applied on the home page at the "Shop by Category" paragraph. This function will only run when user scroll to that paragraph area. It will create a typing effect to attract users' attention. The same effect had applied to the team member’s names in aboutme1.html, aboutme2.html, aboutme3.html and aboutme4.html page.<br>
                    This information is referenced from:<br>
                    (<a href="https://www.youtube.com/watch?v=RvL6YbYHroM">https://www.youtube.com/watch?v=RvL6YbYHroM</a>)
                </li>
                <li><span class="goToLocationEnhance2">Go to location (Home page)</span></li>
                <li><span class="goToLocationEnhance2">Go to location (About Me page)</span></li>
            </ul>
        </li>
    </ol>
</article>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>
