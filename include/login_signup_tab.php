<?php

if(isset($_POST['signUpSubmit'])){
    if(phpValidateSignUp()){
        if(save_checkSignUpData()){
            $signUpUsername = $signUpFullname = $signUpPwd1 = $signUpStreetadd = $signUpCity = "";
            $signUpState = $signUpPostcode = $signUpEmail = $signUpPhone = $signUpBirthdate = $signUpGender = "";
        }else{
            $signUpUsername = "";
            $signUpFullname = $_POST['suFullname'];
            $signUpPwd1 = "";
            $signUpStreetadd = $_POST['suStreetadd'];
            $signUpCity = $_POST['suCity'];
            $signUpState = $_POST['suState'];
            $signUpPostcode = $_POST['suPostcode'];
            $signUpEmail = $_POST['suEmail'];
            $signUpPhone = $_POST['suPhone'];
            $signUpBirthdate = $_POST['suBirthdate'];
            $signUpGender = $_POST['suGender'];
        }
    }else{
        $signUpUsername = $_POST['suUsername'];
        $signUpFullname = $_POST['suFullname'];
        $signUpPwd1 = $_POST['suPwd1'];
        $signUpPwd2 = $_POST['suPwd2'];
        $signUpStreetadd = $_POST['suStreetadd'];
        $signUpCity = $_POST['suCity'];
        if(isset($_POST['suState'])){
            $signUpState = $_POST['suState'];
        }else{
            $signUpState = "";
        }
        $signUpPostcode = $_POST['suPostcode'];
        $signUpEmail = $_POST['suEmail'];
        $signUpPhone = $_POST['suPhone'];
        $signUpBirthdate = $_POST['suBirthdate'];
        if(isset($_POST['suGender'])){
            $signUpGender = $_POST['suGender'];
        }else{
            $signUpGender = "";
        }
    }
}else{
    $signUpUsername = $signUpFullname = $signUpPwd1 = $signUpStreetadd = $signUpCity = "";
    $signUpState = $signUpPostcode = $signUpEmail = $signUpPhone = $signUpBirthdate = $signUpGender = "";
}

function save_checkSignUpData(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ceronics_db";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    $signUpUsername = str_replace(' ','',$_POST['suUsername']);
    $signUpFullname = $_POST['suFullname'];
    $signUpPwd1 = $_POST['suPwd1'];
    $signUpStreetadd = $_POST['suStreetadd'];
    $signUpCity = $_POST['suCity'];
    $signUpState = $_POST['suState'];
    $signUpPostcode = $_POST['suPostcode'];
    $signUpEmail = $_POST['suEmail'];
    $signUpPhone = $_POST['suPhone'];
    $signUpBirthdate = $_POST['suBirthdate'];
    $signUpGender = ucfirst($_POST['suGender']);
    
    $sql = "SELECT username FROM user_signup";
    $result = mysqli_query($conn, $sql);
    $similiarUsername = false;
    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)){
            if($row["username"] == $signUpUsername){
                $similiarUsername = true;
                break;
            }
        }
    } 
    if($similiarUsername){
        phpErrorBox("'Sign up failed!<br>Username had been used by others!'");
        mysqli_close($conn);
        return false;
    }else{
        $sql = "INSERT INTO user_signup (username, fullname, password, streetaddress, city, states, postcode, email, phonenum, birthdate, gender)
        VALUES ('$signUpUsername', '$signUpFullname', '$signUpPwd1', '$signUpStreetadd', '$signUpCity', '$signUpState', '$signUpPostcode', '$signUpEmail', '$signUpPhone', '$signUpBirthdate', '$signUpGender')";

        if (mysqli_query($conn, $sql)){
            phpMessageBox("'Sign up successfully!<br>Log in now! <img src=\"images/green_tick.png\" alt=\"Green Tick Icon\">'");
        }
    }
    mysqli_close($conn);
    return true;
}

function phpValidateSignUp(){
    $error_message = "";

    if (empty($_POST["suUsername"])) {
        $error_message .= "Username is required <br>";
    } elseif (!ctype_lower($_POST["suUsername"])) {
        $error_message .= "Username must include lower case only <br>";
    }elseif (strlen($_POST["suUsername"]) > 25) {
        $error_message .= "Username must not exceed 25 characters <br>";
    } else {
        $su_name = $_POST["suUsername"];
    }
    if (empty($_POST["suFullname"])) {
    $error_message .= "Name is required <br>";
    } elseif (strlen($_POST["suFullname"]) > 25) {
    $error_message .= "Name must not exceed 25 characters <br>";
    } else {
    $su_fname = $_POST["suFullname"];
    }

    if (empty($_POST["suPwd1"])) {
    $error_message .= "Password is required <br>";
    } elseif (strlen($_POST["suPwd1"]) < 6) {
    $error_message .= "Password must contain more than 6 characters <br>";
    } elseif(!preg_match("#[0-9]+#",($_POST["suPwd1"]))) {
    $error_message .= "Password must contain number <br>";
    } elseif(!preg_match("#[A-Z]+#",($_POST["suPwd1"]))) {
    $error_message .= "Password must contain uppercase <br>";
    } elseif(!preg_match("#[a-z]+#",($_POST["suPwd1"]))) {
    $error_message .= "Password must contain lowercase <br>";
    } elseif (($_POST["suPwd1"]) != $_POST["suPwd2"]) {
        $error_message .= "Password does not match <br>";
    } else {
        $su_Pwd1 = $_POST["suPwd1"];
        $su_Pwd2 = $_POST["suPwd2"];
    }

    if (empty($_POST["suStreetadd"])) {
        $error_message .= "Address is required <br>";
    } elseif (strlen($_POST["suStreetadd"])>40) {
        $error_message .= "Maximum characters is 40 <br>";
    } else {
        $su_street = $_POST["suStreetadd"];
    }

    if (empty($_POST["suCity"])) {
        $error_message .= "City is required <br>";
    } elseif (strlen($_POST["suCity"])>12) {
        $error_message .= "Maximum characters of city is 12 <br>";
    } else {
        $su_city = $_POST["suCity"];
    }

    if (empty($_POST["suState"])) {
        $error_message .= "State is required <br>";
    } else {
        $su_state = $_POST["suState"];
    }

    if (empty($_POST["suPostcode"])) {
        $error_message .= "Postcode is required <br>";
    } elseif (!is_numeric($_POST["suPostcode"])) {
        $error_message .= "Postcode must be in numbers <br>";
    } elseif(strlen($_POST["suPostcode"])!=5) {
        $error_message .= "Postcode restricted to 5 digits <br>";
    }else{
        $su_postcode = $_POST["suPostcode"];
    }

    if (empty($_POST["suEmail"])) {
    $error_message .= "Email is required <br>";
    } elseif (!filter_var($_POST["suEmail"], FILTER_VALIDATE_EMAIL)) {
    $error_message .= "Invalid email format <br>";
    } else {
    $su_email = $_POST["suEmail"];	
    }

    if (empty($_POST["suPhone"])) {
    $error_message .= "Phone number is required <br>";
    } elseif (preg_match("/^[0-9]{3}-[0-9]{7}$/", ($_POST["suPhone"]))) {
    $su_phone = $_POST["suPhone"];
    } else {
    $error_message .= "Phone number must contain 10 digits <br>";
    }

    if (empty($_POST['suBirthdate'])) {
        $error_message .= "Birthdate cannot be empty <br>";
    } else {
        $su_bithdate = $_POST["suBirthdate"];
    }

    if (empty($_POST['suGender'])) {
        $error_message .= "Select a gender";
    } else {
        $su_gender = $_POST["suGender"];
    }

    if(isset($su_fname) && isset($su_Pwd1) && isset($su_Pwd2) && isset($su_street) && isset($su_city) && isset($su_state) && isset($su_postcode) && isset($su_email) && isset($su_phone) && isset($su_bithdate) && isset($su_gender)) {
        return true;
    } else {
        phpSignUpErrorBox("'$error_message'");
        return false;
    }
}


//Sign up tab
$placeArray = array("Kuala Lumpur","Labuan","Putrajaya","Sarawak", "Sabah", "Johor", "Kedah", "Kelantan", "Malacca", "Negeri Sembilan", "Pahang", "Penang", "Perak", "Perlis", "Selangor", "Terengganu");
$placeValueArray = array("KUL","LBN","PJY",'SWK','SBH','JHR','KDH','KTN','MLK','NSN','PHG','PNG','PRK','PLS','SGR','TRG');

echo '
<div id="signupWindow">
    <form action="' . htmlspecialchars($_SERVER["PHP_SELF"]) . '" id="signUpForm" class="signUp" name="member_resgistration" method="post">
        <fieldset id="signUpContainer">
            <legend>Cero Member Sign Up</legend>
            <div id="closeSignUp">&times;</div>
            <table>
                <tr>
                    <td>Username: <span class="formdot">*</span></td>
                    <td>Full Name: <span class="formdot">*</span></td>
                </tr>
                <tr>
                    <td class="notes" id="nthchild">
                        <input type="text" placeholder="Input your username" name="suUsername" size="40" id="signUpUsername" title="Alphabetical characters only" value="' . $signUpUsername . '">
                        <p>*Include lower case only</p>
                    </td>
                    <td class="notes">
                        <input type="text" placeholder="Input your full name" name="suFullname" size="40" id="signUpFullname" title="Alphabetical characters only" value="' . $signUpFullname . '">
                        <p>*Alphabetical characters only</p>
                    </td>
                </tr>
                <tr>
                    <td>Password <span class="formdot">*</span></td>
                    <td>Retype Password <span class="formdot">*</span></td>
                </tr>
                <tr>
                    <td class="notes">
                        <input type="password" placeholder="Input your password" name="suPwd1" size="40" id="signUpPwd1" value="' . $signUpPwd1 . '">
                        <p>
                            *Contain minimum 6 characters<br>
                            *Includes number, uppercase and lowercase
                        </p>
                    </td>
                    <td class="notes">
                        <input type="password" placeholder="Retype your password" name="suPwd2" size="40" id="signUpPwd2" value="';
                        if(isset($signUpPwd2)){
                            echo $signUpPwd2;} 
                        echo '">
                        <p>
                            *Contain minimum 6 characters<br>
                            *Includes number, uppercase and lowercase
                        </p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <table>
                            <tr>
                                <td colspan="3">Street address: <span class="formdot">*</span></td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <input type="text" name="suStreetadd" id="signUpStreetadd" maxlength="40" value="' . $signUpStreetadd . '">
                                </td>
                            </tr>
                            <tr>
                                <td>City: <span class="formdot">*</span></td>
                                <td>State: <span class="formdot">*</span></td>
                                <td>Postcode: <span class="formdot">*</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name="suCity" id="signUpCity" maxlength="20" value="' . $signUpCity . '">
                                </td>
                                <td>
                    <select name="suState" id="signUpState" value="' . $signUpState . '">
                        <option disabled="disabled" selected="selected" value="">- Select -</option> 
                        <optgroup label="Federal Territories">';
                            for ($x = 0; $x < 3; $x++) {
                                echo '<option ';
                                if ($signUpState == $placeValueArray[$x] ) echo 'selected';
                                echo ' value=' . $placeValueArray[$x] . '>' . $placeArray[$x] . '</option>';
                            }
                            echo '</optgroup>
                            <optgroup label="States">';
                            for ($x = 3; $x < count($placeValueArray); $x++) {
                                echo '<option ';
                                if ($signUpState == $placeValueArray[$x] ) echo 'selected';
                                echo ' value=' . $placeValueArray[$x] . '>' . $placeArray[$x] . '</option>';
                            }
                        echo '</optgroup>
                    </select>
                                </td>
                                <td>
                                    <input type="text" name="suPostcode" id="signUpPostcode" title="Digits only" value="' . $signUpPostcode . '">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>Email <span class="formdot">*</span></td>
                    <td>Phone No. <span class="formdot">*</span></td>
                </tr>
                <tr>
                    <td>
                        <input type="text" placeholder="youremail@example.com" name="suEmail" size="40" id="signUpEmail" value="' . $signUpEmail . '">
                    </td>
                    <td>
                        <input type="tel" id="signUpPhone" name="suPhone" placeholder="###-#######" title="Digits only" value="' . $signUpPhone . '">
                        <!--maxlength is 11 as it include the dash (-)-->
                    </td>
                </tr>
                <tr>
                    <td>Date of birth <span class="formdot">*</span></td>
                    <td>Gender <span class="formdot">*</span></td>
                </tr>
                <tr>
                    <td>
                        <input id="signUpBirthDate" class="date" type="date" name="suBirthdate" value="' . $signUpBirthdate . '">
                    </td>
                    <td>
                        <select id="signUpGender" name="suGender" value="' . $signUpGender . '">
                            <option disabled selected value="">- Select -</option>
                            <option ';
                            if ($signUpGender == "male" ) echo 'selected';
                            echo ' value="male">Male</option><option ';
                            if ($signUpGender == "female" ) echo 'selected';
                            echo ' value="female">Female</option>
                        </select>
                    </td>
                </tr>
            </table>
            <div class="memberbutton">
                <input id="signupSubmit" type="submit" name="signUpSubmit" value="Sign Up">
                <input type="reset" value="Reset">
            </div>
        </fieldset>
    </form>
</div>';



//Login Php
if(isset($_POST['loginSubmit'])){
    if(loadUserData()){
        $loginUsername = $loginPassword = "";
    }else{
        $loginUsername = $_POST['lgnUsername'];
        $loginPassword = "";
    }
}else{
    $loginUsername = $loginPassword = "";
}

function loadUserData(){
    $loginUsername = $_POST['lgnUsername'];
    $loginPassword = $_POST['lgnPassword'];

    // set the servername,username and password
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ceronics_db";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    $sql = "SELECT username, password, fullname FROM user_signup";
    $result = mysqli_query($conn, $sql);

    $checkAccount = false;
    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)){
            if($row["username"] == $loginUsername){
                $checkAccount = true;
                if($row["password"] == $loginPassword){
                    if($row["username"] == "ceroadmin"){
                        echo "<script>window.location.href = 'admin/admin_menu.php'; </script>";
                    }else{
                        $_SESSION["username"] = $row["username"];
                        phpMessageBox("'Log in successfully! <br>Hello " . $row["fullname"] . "<img src=\"images/green_tick.png\" alt=\"Green Tick Icon\">'");
                    }
                }else{
                    phpNoLoginBox("'Wrong password!<br>Try again!'");
                    mysqli_close($conn);
                    return false;
                }break;
            }
        }
    }if(!$checkAccount){
        phpNoLoginBox("'Username not found!<br>Sign up if do not have account!'");
        mysqli_close($conn);
        return false;
    }
    mysqli_close($conn);
    return true;
}

//login tab
echo '
<div id="loginWindow">
    <form action="' . htmlspecialchars($_SERVER["PHP_SELF"]) . '" id="loginForm" method="post" class="login" onsubmit="return validateLogInForm();">
        <fieldset id="loginContainer">
        <legend>Cero Member Log In</legend>
            <div id="closeLogIn">&times;</div>
            <div class="imgbox">
                <img src="images/userpic.png" alt="User image" class="user">
            </div>
            <div class="loginbox">
                <p>
                <input id="loginUsername" type="text" placeholder="Username" name="lgnUsername" size="40" value="' . $loginUsername . '">
            </p>
            <p>
                <input id="loginPwd" type="password" placeholder="Password" name="lgnPassword" size="40" value="' . $loginPassword . '">
            </p>
            <p>
                *Contain minimum 6 characters<br>
                *Includes number, uppercase and lowercase
            </p>
            <p>
                <span id="loginCheckBoxContainer">
                    <span id="loginCheckBox"></span>
                    Remember me
                </span>
                <input id="loginSubmit" type="submit" name="loginSubmit" value="Log In" >
            </p>
        </fieldset>
    </form>
</div>';

function phpNormalMessageBox($msg){
    echo '<script>
        var messageTimer;
        window.clearTimeout(messageTimer);
        messageTimer = window.setTimeout(function(){
            document.getElementsByClassName("messageBox")[0].style.display = "none";
        }, 2000);
        document.getElementsByClassName("messageBoxContent")[0].innerHTML = ' . $msg . ';
        document.getElementsByClassName("messageBox")[0].style.display = "block";
    </script>';
}

function phpMessageBox($msg){
    echo '<script>
        var messageTimer;
        window.clearTimeout(messageTimer);
        messageTimer = window.setTimeout(function(){
            document.getElementsByClassName("messageBox")[0].style.display = "none";
            location.href = "' . htmlspecialchars($_SERVER["PHP_SELF"]) . '";
        }, 2000);
        document.getElementsByClassName("messageBoxContent")[0].innerHTML = ' . $msg . ';
        document.getElementsByClassName("messageBox")[0].style.display = "block";
    </script>';
}

function phpSignUpErrorBox($msg){
    echo '<script>
        var messageTimer;
        window.clearTimeout(messageTimer);
        messageTimer = window.setTimeout(function(){
            document.getElementsByClassName("messageBox")[0].style.display = "none";
        }, 3000);
        document.getElementsByClassName("messageBoxContent")[0].innerHTML = ' . $msg . ';
        document.getElementsByClassName("messageBox")[0].style.display = "block";
        localStorage.signUpError = true;
    </script>';
}

function phpNoLoginBox($msg){
    echo '<script>
        var messageTimer;
        window.clearTimeout(messageTimer);
        messageTimer = window.setTimeout(function(){
            document.getElementsByClassName("messageBox")[0].style.display = "none";
        }, 2000);
        document.getElementsByClassName("messageBoxContent")[0].innerHTML = ' . $msg . ';
        document.getElementsByClassName("messageBox")[0].style.display = "block";
        localStorage.logInError = true;
    </script>';
}

?>