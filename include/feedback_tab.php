<?php

if(isset($_POST["feedbackSubmit"])){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ceronics_db";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    
    $sql = "SELECT rating1, rating2, rating3, rating4, rating5 FROM feedback_rating";
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_assoc($result)) {
        $feedbackDBarr = array($row["rating1"],$row["rating2"],$row["rating3"],$row["rating4"],$row["rating5"]);
    }
    for($x=1;$x<=5;$x++){
        if($_POST["hiddenFeed".$x]=="1"){
            $feedbackDBarr[$x-1] += 1;
        }
    }$sql = "DELETE FROM feedback_rating";
    mysqli_query($conn, $sql);
    $sql = "INSERT INTO feedback_rating (rating1, rating2, rating3, rating4, rating5, updated_at)
            VALUES ('$feedbackDBarr[0]', '$feedbackDBarr[1]', '$feedbackDBarr[2]', '$feedbackDBarr[3]', '$feedbackDBarr[4]', CURRENT_TIMESTAMP)";
    if(mysqli_query($conn, $sql)){
            phpMessageBox("'Feedback submitted successfully!'");
    }

    $comments = $_POST["hiddenFeedComment"];
    if($comments != ""){
        $sql = "INSERT INTO feedback_comments (comments, submitted_at)
                VALUES ('$comments', CURRENT_TIMESTAMP)";
        mysqli_query($conn, $sql);
    }

    mysqli_close($conn);
}

$ratingImg = "";
for($x=1;$x<=5;$x++){
    $ratingImg .= '<img id="rateEmoji' . $x . '" src="images/rating' . $x . '.png" alt="Rating emoji"' . $x . '>';
}


echo '<form action="'.htmlspecialchars($_SERVER["PHP_SELF"]). '"id="feedbackForm" method="post" onsubmit="return doFeedbackSubmit()" autocomplete="off">
    <div id="closeFeedback">&times;</div>
    <h1>Customer\'s Feedback</h1>
    <p>Tell us your feedback emoji!</p>
    <div id="ratingEmojiBox">'.$ratingImg.'</div>
    <div id="feedbackCommentBox">
        <p>Comments:</p>
        <textarea id="feedbackComment" type="text" placeholder="(Optional)" name="feedbackComment" size="40"></textarea>
    </div>
    <div id="feedbackHiddenInputs"></div>
    <div id="feedbackSubmitBox">
        <input id="feedbackSubmit" type="submit" name="feedbackSubmit" value="Submit" >
    </div>
</form>';

?>
