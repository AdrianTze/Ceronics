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

    $sql = "SELECT product_name, product_quantity, updated_at FROM quantity_product_sold";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        $cartDBArr = array();
        while($row = mysqli_fetch_assoc($result)) {
            array_push($cartDBArr, [$row["product_name"], $row["product_quantity"], $row["updated_at"]]);
        }
        $tableHeader = array("Product Name", "Product Quantity", "Updated at");
        $tableInsideHtml = "<tr>";
        for($x=0;$x<count($tableHeader);$x++){
            $tableInsideHtml .= "<th>".$tableHeader[$x]."</th>";
        }$tableInsideHtml .= "</tr>";
        for($x=0;$x<count($cartDBArr);$x++){
            $tableInsideHtml .= "<tr>";
            for($y=0;$y<count($cartDBArr[$x]);$y++){
                $tableInsideHtml .= "<td>".$cartDBArr[$x][$y]."</td>";
            }$tableInsideHtml .= "</tr>";
        }
    }else{
        $tableInsideHtml = '<tr>
                            <td>None</td>
                            </tr>';
    }
    mysqli_close($conn);
?>

<form action="admin_menu.php" method="post" id="mainMenuBtnFormSub">
    <input type="submit" value="Main Menu">
</form>

<table class="quantityProduct">
    <tr>
        <th class="firstHead" colspan="3">Product Sold</th>
    </tr>
    <?php echo $tableInsideHtml;  ?>
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
