<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Kenny Tan -->
	<!-- Date: 16 June 2020 -->
	<!-- Validated: OK 16 June 2020-->
	
<head>
	<title>Ceronics Online Store | Admin Site</title>
	<meta charset="utf-8">
	<meta name="author" content="Kenny Tan">	
	<meta name="description" content="Assignment">
	<meta name="keywords" content="ceronics, electronics, electrical appliances, home">
	<link rel="stylesheet" type="text/css" href="../styles/style.css">
    <link rel="icon" href="../images/icon.png">
</head>

<body class="home admin">
<?php include "admin_header.php" ?>

<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ceronics_db";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    
    $sql = "SELECT username, fullname, password, created_at, streetaddress, city, states, postcode, email, phonenum, birthdate, gender FROM user_signup";
    $result = mysqli_query($conn, $sql);

    $userDb = array();
    if (mysqli_num_rows($result) > 0) {
        // output data of each row

        $control = false;
        while($row = mysqli_fetch_assoc($result)){
            if($control){
                array_push($userDb, [$row["username"], $row["fullname"], $row["password"], $row["created_at"], $row["birthdate"], $row["gender"], $row["streetaddress"], $row["city"], $row["states"], $row["postcode"], $row["email"], $row["phonenum"]]);
            }else{
                $control = true;
            }
        }

        for($x=0;$x<count($userDb);$x++){
            $datauserToDlt = $userDb[$x][0];
            if(isset($_POST[$datauserToDlt])){
                $sql = "DELETE FROM user_signup WHERE username='$datauserToDlt'";
                mysqli_query($conn, $sql);
                header("Refresh:0"); 
            }
        }
        
        $table1Header = array("Username", "Fullname", "Password", "Account Created At", "Birthdate", "Gender","");
        $table1InsideHtml = "<tr>";
        for($x=0;$x<count($table1Header);$x++){
            $table1InsideHtml .= "<th>".$table1Header[$x]."</th>";
        }$table1InsideHtml .= "</tr>";
        if(count($userDb)!=0){
            for($x=0;$x<count($userDb);$x++){
                $table1InsideHtml .= "<tr>";
                for($y=0;$y<6;$y++){
                    $table1InsideHtml .= "<td>".$userDb[$x][$y]."</td>";
                }$table1InsideHtml .= '<td><form action="user_manage.php" method="post">
                                        <input type="submit" class="dltUser" value="Delete" name="'. $userDb[$x][0] .'">
                                        </form></td>';
                $table1InsideHtml .= "</tr>";
            }
        }else{
            $table1InsideHtml .= "<tr>";
            for($y=0;$y<7;$y++){
                $table1InsideHtml .= "<td>None</td>";
            }$table1InsideHtml .= "</tr>";
        }
        

        $table2Header = array("Username", "Fullname", "Street Address", "City", "States", "Postcode", "Email", "Phonenum");
        $table2InsideHtml = "<tr>";
        for($x=0;$x<count($table2Header);$x++){
            $table2InsideHtml .= "<th>".$table2Header[$x]."</th>";
        }$table2InsideHtml .= "</tr>";
        if(count($userDb)!=0){
            for($x=0;$x<count($userDb);$x++){
                $table2InsideHtml .= "<tr>";
                $control = true;
                for($y=6;$y<count($userDb[$x]);$y++){
                    if($control){
                        $table2InsideHtml .= "<td>".$userDb[$x][0]."</td>";
                        $table2InsideHtml .= "<td>".$userDb[$x][1]."</td>";
                        $control = false;
                    }
                    $table2InsideHtml .= "<td>".$userDb[$x][$y]."</td>";
                }$table2InsideHtml .= "</tr>";
            }
        }else{
            $table2InsideHtml .= "<tr>";
            for($y=0;$y<8;$y++){
                $table2InsideHtml .= "<td>None</td>";
            }$table2InsideHtml .= "</tr>";
        }
    }
    mysqli_close($conn);

    
?>

<form action="admin_menu.php" method="post" id="mainMenuBtnFormSub">
    <input type="submit" value="Main Menu">
</form>

<table>
    <tr>
        <th class="firstHead" colspan="7">User Account Details</th>
    </tr>
    <?php echo $table1InsideHtml;  ?>
</table>

<table>
    <tr>
        <th class="firstHead" colspan="8">User Contact Details</th>
    </tr>
    <?php echo $table2InsideHtml;  ?>
</table>

<footer id="foot" class="adminFooter">
<div class="copyright">
    <hr>
    <p>COPYRIGHT &copy; 2020 Ceronics Inc. All rights reserved.</p>
    <hr>
</div>
</footer>

</body>
</html>
