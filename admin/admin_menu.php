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

$conn = mysqli_connect($servername, $username, $password, $dbname);

$sql = "SELECT cumulative_sales, updated_at FROM total_sales";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $ttlSalesDb = $row["cumulative_sales"];
        $ttlSalesUpdatedDb = $row["updated_at"];
    }
}
?>

<table>
    <tr>
        <th>Total Sales</th>
        <td>RM <?php echo $ttlSalesDb ?></td>
    </tr>
    <tr>
        <th>Updated At</th>
        <td><?php echo $ttlSalesUpdatedDb ?></td>
    </tr>
</table>

<div id="adminMenuButtons">
    <h2>Main Menu</h2>
    <form action="user_manage.php" method="post">
        <input type="submit" value="Manage User Account">
    </form>
    <form action="quantity_pro.php" method="post">
        <input type="submit" value="View Quantity Product">
    </form>
    <form action="feedback_data.php" method="post">
        <input type="submit" value="View Feedback Data">
    </form>
</div>

<footer id="foot" class="adminFooter">
<div class="copyright">
    <hr>
    <p>COPYRIGHT &copy; 2020 Ceronics Inc. All rights reserved.</p>
    <hr>
</div>
</footer>

</body>
</html>
