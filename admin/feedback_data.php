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

    $sql = "SELECT rating1, rating2, rating3, rating4, rating5, updated_at FROM feedback_rating";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            $feedbackDBArr = array($row["rating1"],$row["rating2"],$row["rating3"],$row["rating4"],$row["rating5"]);
            $table1InsideHtml = "<tr><th></th><td>Quantity</td></tr>";
            for($x=0;$x<count($feedbackDBArr);$x++){
                $table1InsideHtml .= "<tr><th>Rating " . ($x+1) . "</th>";
                $table1InsideHtml .= "<td>" . $feedbackDBArr[$x] . "</td>";
            }$table1InsideHtml .= "</tr>";
            $updateTime = $row["updated_at"];
        }
    }//no else command here, table must have data (data created in create_tables.php)

    $sql = "SELECT comments, submitted_at FROM feedback_comments";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        $feedbackDBArr = array();
        while($row = mysqli_fetch_assoc($result)) {
            array_push($feedbackDBArr, [$row["comments"], $row["submitted_at"]]);
        }
        $table2InsideHtml = "";
        for($x=0;$x<count($feedbackDBArr);$x++){
            $table2InsideHtml .= "<tr><td>".($x+1).".</td>";
            $table2InsideHtml .= "<td class='commentCell'>" . $feedbackDBArr[$x][0] . "</td>";
            $table2InsideHtml .= "<td>" . $feedbackDBArr[$x][1] . "</td>";
            $table2InsideHtml .= "</tr>";
        }
    }else{
        $table2InsideHtml = "<tr><td>None</td><td>None</td><td>None</td></tr>";
    }
    mysqli_close($conn);
?>

<form action="admin_menu.php" method="post" id="mainMenuBtnFormSub">
    <input type="submit" value="Main Menu">
</form>

<table class="feedbackRatingTable">
    <tr>
        <th class="firstHead" colspan="2">Feedback Rating</th>
    </tr>
    <?php echo $table1InsideHtml;  ?>
    <tr>
        <th class="lastrow">Updated At</th>
        <td class="lastrow"><?php echo $updateTime;  ?></td>
    </tr>
</table>

<table class="feedbackCommentTable">
    <tr>
        <th class="firstHead" colspan="3">Feedback Comments</th>
    </tr>
    <tr>
        <th>No.</th>
        <th class="commentCell">Comments Received</th>
        <th>Submitted at</th>
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
