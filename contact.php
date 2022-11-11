<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Adrian Sim -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->

<head>
	<title>Ceronics Online Store - Contact Us</title>
	<meta charset="utf-8">
	<meta name="author" content="Adrian Sim">	
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

<div class="contactus">
<br/><br/>
<figure>
    <img src="images/contact_us.png" alt="contact" class="imgcontact" id="imgcontact"/>
</figure>
<!--section is used to generate the enquiry form for customer to inform us-->
<section >
    <h2 class="getintouch">
        We look forward to serve you better, let's <br/> <strong>Get In Touch</strong> !
    </h2>
    <br/>
    <h2 class="msg">
        Drop a message 
    </h2>
    <form id="survey" method="post" action="process.php">
        <fieldset>
            <legend>Contact Form:</legend>
            <label for="name">Name:</label>
            <input type="text" id="name" name="pname" placeholder="Enter your name" pattern="[a-zA-Z]+$" required="required" class="name" > 
            <br/><br/>
            <label for="email">Email:</label>
            <input type="text" id="email" name="pemail" placeholder="name@domain.com" required="required" class="email" >
            <br/><br/>
            <label for="contact">Contact:</label>
			<input type="tel" id="contact" name="contact" placeholder="###-#######" pattern="\d{3}-\d{7}" size="40" maxlength="11" title="Digits only" required="required" class="contact">
            <br/><br/>
            <label>Your message: <br/>
                <textarea name="comments" rows="10" cols="40" required="required">
                    Leave your message here, thanks! 
                </textarea>

            </label>
            <br/><br/>
            <!--button that prompt user to submit and reset enquiry form-->
            <input type="submit" value="Submit Form" class="submit" />
            <input type="reset" value="Reset" class="reset"/>
            <br/><br/>
        </fieldset>
    </form>
</section>
<!--aside serves as a purpose to show the contact details of our company and crew-->
<br/><br/><br/><br/> 
<aside>
    <h2 class="asidetop">Contact Us</h2>
    <br/>
    <p>
        You can reach us via online, visit or drop a line and get support from us. Learn more about our business!
    </p>
    <br/>
    <h3 class="location">We are here   </h3>
    <!--Used to embbed google location map here-->
    <nav id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.1958336313257!2d110.35638895901762!3d1.5322625998366153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba70b11e02ce7%3A0x69cbf290cfd24bb7!2sSwinburne%20University%20of%20Technology%20Sarawak%20Campus!5e0!3m2!1sen!2smy!4v1586612541640!5m2!1sen!2smy" width="400" height="350"  allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
    </nav>
    <h3 class="asidetop">Address</h3>
    <br/>
    <p>
       Ceronics, Q5A, Jalan Simpang Tiga ,93350 Kuching, Sarawak Malaysia
    </p>
    <br/>
    <h3 class="asidetop">Drop a line!</h3>
    <br/>
    <p>
        Telephone : +601002003004   
    </p> 
    <br/>
    Email :<a href="mailto:ceronics2020@gmail.com">ceronics2020@gmail.com</a>
    <br/><br/>
    <h3 class="asidetop"> Customer Care</h3>
    <br/>
    <p>Still have a lot of questions? Please do not hesitate to contact our crew</p>
    <br/>
    <table>
        <tbody>
            <tr>
                <td>
                    <figure>
                        <figcaption><img src="images/aboutadrian.jpg" alt="Adrian" class="adrian" id="adrian"/>Adrian Sim</figcaption>
                    </figure>
                </td>
                <td>
                    <p class="manager">Assistant Manager <br/> Tel:   012-345-6789 <br/> Email: <a href="mailto:adriantze@gmail.com">adriantze@gmail.com</a></p>
                </td>
            </tr>
            <tr>
                <td>
                    <figure>
                        <figcaption><img src="images/aboutkenny.jpg" alt="Kenny" class="kenny" id="kenny"/>Kenny Tan</figcaption>
                    </figure>
                </td>
                <td>
                    <p class="director">Director <br/> Tel:019-876-5432 <br/> Email: <a href="mailto:kennytancl@gmail.com">kennytancl@gmail.com</a></p>
                </td>
            </tr>
        </tbody>
    </table>
        
</aside>
<br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>

</div>

<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>
