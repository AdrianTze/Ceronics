<header id="head">
<div class="topcontent">
    <img src="../images/logo.png" alt="Logo" class="mainlogo">
    <div id="adminLogOut" class="login">
        <p class="image"><img src="../images/login_icon.png" alt="Log In Icon"></p>
        <p class="txt" id="logintxtStatus">Log Out</p>
    </div>
</div>
</header>
<?php
echo '<script>document.getElementById("adminLogOut").onclick = function() {window.location.href = "../index.php"};</script>';
?>