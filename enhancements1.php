<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Lai Yee Fung -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - Enhancements 1</title>
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

<article class="enhance">
    <h2>Enhancements 1</h2>
    <ol>
        <li>Embedding External Content
            <ul>
                <li>
                    Embedded YouTube video is used. The video describes some of the main products to let the visitor know more about the brands as the company, Ceronics is in collaboration with some official brands. For example, the HTML tag used is &lt;iframe&gt;.<br>
                    This information is taken from:<br>
                    (<a href="https://support.google.com/youtube/answer/171780?hl=en" target="_blank">https://support.google.com/youtube/answer/171780?hl=en</a>)
                </li>
                <li><a href="index.html#youtubevideo" target="_blank">Go to location</a></li>
            </ul>
        </li>
        <li>Additional CSS properties and selectors
            <ul>
                <li>
                    CSS pseudo-element is used. This technique is used in CSS codes to act as a selector easily without having to add too much HTML tag to select a particular element. For example, the code ‘::first-letter’ is used to select the first letter (first alphabet) of a paragraph without having to add a &lt;span&gt; tag in HTML just to select an alphabet.<br>
                    This information is taken from:<br>
                    (<a href="https://www.w3schools.com/cssref/sel_firstletter.asp" target="_blank">https://www.w3schools.com/cssref/sel_firstletter.asp</a>)
                </li>
                <li><a href="index.html#firstletter" target="_blank">Go to location</a></li>

                <li>
                    CSS Pseudo Class is used. The CSS code used is ‘:nth-child(n)’. This is to select the place of the child element. With this Pseudo class, the team can select the HTML easily and do not need to add too much class or id into the HTML tag to that make the code not that organized. For example, ‘table tr:nth-child(3) td’ is used in the CSS code to select the third row of the table to add some top padding to make the alignment looks neat. <br>
                    This information is taken from: <br>
                    (<a href="https://www.w3schools.com/cssref/sel_nth-child.asp" target="_blank">https://www.w3schools.com/cssref/sel_nth-child.asp</a>)
                </li>
                <li onclick="showSignUpPanel();"><span class="goToLocation">Go to location</span></li>

                <li>
                    CSS properties like transition is used. This is to show some interactivity when the user hovers to some of the parts of the website. Using these CSS properties can prevent the boringness of the website (like everything is just fixed while visiting the website). For example, the code in CSS ‘transition: all 0.3s linear;’ is used when the product image has hovered and the image size increases slowly (0.3s) and not just pop us in 0s which is not comfortable when using the website.  <br>
                    This information is taken from:<br>
                    (<a href="https://www.w3schools.com/cssref/css3_pr_transition.asp" target="_blank">https://www.w3schools.com/cssref/css3_pr_transition.asp</a>)
                </li>
                <li><a href="product1.html#apple" target="_blank">Go to location</a></li>

            </ul>
        </li>
    </ol>
</article>


<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>
