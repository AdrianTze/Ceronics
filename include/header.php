<?php

session_start();

if(isset($_SESSION["username"])){
    echoHeader("hiddenSignUp", "Log out");
}else{
    echoHeader("", "Log in");
}

function echoHeader($para1, $para2){
    echo '
    <header id="head">
        <div class="topcontent">
            <a href="index.php"><img src="images/logo.png" alt="Logo" class="mainlogo"></a>
            <div id="signupBtn" class="member ' . $para1 . '">
                <p class="image"><img src="images/member_icon.png" alt="Member Icon"></p>
                <p class="txt">Sign up</p>
            </div>
            <div id="loginBtn" class="login">
                <p class="image"><img src="images/login_icon.png" alt="Log In Icon"></p>
                <p class="txt" id="logintxtStatus">' . $para2 . '</p>
            </div>
            <div class="cartContain">
                <div class="cart">
                    <img id="cartBtn1"src="images/viewcart.png" alt="Cart Icon">
                </div>
            </div>
            <div class="fixcartContain">
                <div class="fixcart">
                    <img id="cartBtn2"src="images/viewcart.png" alt="Cart Icon">
                </div>
            </div>
            <div class="messageBox">
                <p id="mbContent" class="messageBoxContent"></p>
            </div>
            <div class="confirmDeleteBox">
                <p class="confirmDeleteBoxContent"></p>
                <button id="yesBtn">Yes</button>
                <button id="noBtn">No</button>
            </div>
        </div>
    </header>';

}

?>