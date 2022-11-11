<?php

if(isset($_POST["cartSubmit"])){
    $cartTtl = $_POST["cartTotal"];
    $dataLen = $_POST["lastCartLoop"];
    $cartArr = array();
    for ($x = 0; $x < $dataLen; $x++) {
        $cartArr = array_push_assoc($cartArr, $_POST["loopProName".$x], $_POST["loopProQuantity".$x]);
    }

    // set the servername,username and password
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ceronics_db";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password,$dbname);

    $sql = "SELECT product_name, product_quantity, updated_at FROM quantity_product_sold";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        $cartDBArr = array();
        while($row = mysqli_fetch_assoc($result)) {
            $cartDBArr = array_push_assoc($cartDBArr, $row["product_name"], $row["product_quantity"]);
        }
        foreach($cartArr as $proName => $proQuantity) {
            $updateDB = false;
            foreach($cartDBArr as $proDBName => $proDBQuantity) {
                if($proDBName==$proName){
                    $sql = "UPDATE quantity_product_sold
                    SET product_quantity = '$proDBQuantity'+ '$proQuantity' , updated_at = CURRENT_TIMESTAMP
                    WHERE product_name = '$proDBName'";
                    $updateDB = true;
                    break;
                }
            }if(!$updateDB){
                $sql = "INSERT INTO quantity_product_sold (product_name, product_quantity)
                VALUES ('$proName', '$proQuantity')";
            }$queryStatus = mysqli_query($conn, $sql);
        }if($queryStatus){
            phpMessageBox('"Total: RM ' . $cartTtl . '<br>Payment success. Thank you"');
        }
    } else {
        foreach($cartArr as $proName => $proQuantity) {
            $sql = "INSERT INTO quantity_product_sold (product_name, product_quantity)
            VALUES ('$proName', '$proQuantity')";
            if(mysqli_query($conn, $sql)){
                phpMessageBox('"Total: RM ' . $cartTtl . '<br>Payment success. Thank you"');
            }
        }
    }$sql = "SELECT cumulative_sales, updated_at FROM total_sales";
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_assoc($result)) {
        $dbSales = $row["cumulative_sales"];
    }$cartTtl = str_replace(",", '', $cartTtl);
    $dataToSave = $dbSales + $cartTtl;
    $sql = "UPDATE total_sales
            SET cumulative_sales = '$dataToSave', updated_at = CURRENT_TIMESTAMP";
    mysqli_query($conn, $sql);
    
    mysqli_close($conn);
}

//this function referenced form https://jaswanttak.wordpress.com/2010/04/23/php-associative-array-push/
function array_push_assoc($array, $key, $value){
    $array[$key] = $value;
    return $array;
}

echo '<div id="popupCart" class="popupCart">
        <div class="popupCartContent">
            <div class="headCart">
                <p class="close">&times;</p>
                <p class="dltCart">
                    <img src="images/delete_icon.png" alt="Delete Icon">
                </p>
            </div>
            <div id="cartProductList">
                <div class="containerCart">
                    <figure class="cartImg"></figure>
                    <div class="tickbox"></div>
                    <div class="proName"></div>
                    <div class="proPrice"></div>
                    <div class="proQuantity"></div>
                </div>
            </div>
            <div class="total">Total: RM <span class="totalAns"></span></div>
            <form name="cartForm" action="' . htmlspecialchars($_SERVER["PHP_SELF"]) . '" method="post" onsubmit="return doPayNow()">
            <div id="hiddenCartInput"></div>
            <input type="submit" value="Pay Now" id="payNow" class="payNow" name="cartSubmit">
            </form>
        </div>
    </div>';

?>