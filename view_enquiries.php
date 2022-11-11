<!DOCTYPE html>

<html lang="en">
	<!-- Description: Assignment -->
	<!-- Author: Kenny Tan -->
	<!-- Date: 1 May 2020 -->
	<!-- Validated: OK 26 May 2020-->
	
<head>
	<title>Ceronics Online Store - View Enquiry</title>
	<meta charset="utf-8">
	<meta name="author" content="Kenny Tan">	
	<meta name="description" content="Assignment">
	<meta name="keywords" content="ceronics, electronics, electrical appliances, home">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<link rel="icon" href="images/icon.png">
</head>

<body class="viewEnq">

<?php 

include "include/header.php";
include "include/login_signup_tab.php";
include "include/add_cart_tab.php";
include "include/navigation.php";
include "include/feedback_tab.php";
include "include/calculator_tab.php";


// set the servername,username and password
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ceronics_DB";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$dbname);

$sql = "SELECT firstname, lastname, email, phone_no, street_address, city, states, postcode, product_type, product_brand, product_name, comment FROM enquiry";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $enq1DBarr = array();
    $enq2DBarr = array();
    while($row = mysqli_fetch_assoc($result)) {
        array_push($enq1DBarr, [$row['firstname'], $row['lastname'], $row['email'], $row["phone_no"], $row['street_address'], $row['city'], $row['states'], $row['postcode']]);
        array_push($enq2DBarr, [$row['firstname'], $row['lastname'], $row['product_type'], $row['product_brand'], $row['product_name'], $row['comment']]);
    }

    $tableHeadArr = array("First Name", "Last Name", "Email", "Phone Number", "Street Address", "City", "State","Postcode");
    $table1InnerHtml = "<tr>";
    for($x=0;$x<count($tableHeadArr);$x++){
        $table1InnerHtml .= "<th>".$tableHeadArr[$x]."</th>";
    }$table1InnerHtml .= "<tr>";
    for($x=0;$x<count($enq1DBarr);$x++){
        $table1InnerHtml .= "<tr>";
        for($y=0;$y<count($enq1DBarr[$x]);$y++){
            $table1InnerHtml .= "<td>".$enq1DBarr[$x][$y]."</td>";
        }$table1InnerHtml .= "</tr>";
    }

    $tableHeadArr = array("First Name", "Last Name", "Product Type", "Product Brand", "Product Name", "Comment");
    $table2InnerHtml = "<tr>";
    for($x=0;$x<count($tableHeadArr);$x++){
        $table2InnerHtml .= "<th>".$tableHeadArr[$x]."</th>";
    }$table2InnerHtml .= "<tr>";
    for($x=0;$x<count($enq2DBarr);$x++){
        $table2InnerHtml .= "<tr>";
        for($y=0;$y<count($enq2DBarr[$x]);$y++){
            $table2InnerHtml .= "<td>".$enq2DBarr[$x][$y]."</td>";
        }$table2InnerHtml .= "</tr>";
    }
}

mysqli_close($conn);
?>

<table>
    <tr>
        <th class="firstHead" colspan="8">User Contact Details</th>
    </tr>
    <?php echo $table1InnerHtml; ?>
</table>

<table>
    <tr>
        <th class="firstHead" colspan="6">User Enquiry Details</th>
    </tr>
    <?php echo $table2InnerHtml; ?>
</table>


<?php include "include/footer.php"; ?>

<script src="script/script.js"></script>
<script src="script/enhancements.js"></script>
</body>
</html>