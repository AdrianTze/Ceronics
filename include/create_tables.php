
<?php
// set the servername,username and password
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ceronics_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
/* if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} */

// sql to create table
$sql = "CREATE TABLE enquiry (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
phone_no VARCHAR(11) NOT NULL,
street_address VARCHAR(255) NOT NULL,
city VARCHAR(30) NOT NULL,
states VARCHAR(30) NOT NULL,
postcode INT(10) NOT NULL,
product_type VARCHAR(40) NOT NULL,
product_brand VARCHAR(40) NOT NULL,
product_name VARCHAR(40) NOT NULL,
comment VARCHAR(255) NOT NULL
)";
mysqli_query($conn, $sql);
/* 
if (mysqli_query($conn, $sql)) {
    echo "Table enquiry created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
} */

// sql to create table
$sql = "CREATE TABLE user_signup (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
username VARCHAR(50) NOT NULL,
fullname VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
streetaddress VARCHAR(255) NOT NULL,
city VARCHAR(20) NOT NULL,
states VARCHAR(5) NOT NULL,
postcode INT,
email VARCHAR(255) NOT NULL,
phonenum VARCHAR(255) NOT NULL,
birthdate DATE,
gender VARCHAR(10) NOT NULL
)";

if (mysqli_query($conn, $sql)) {
    $sql = "INSERT INTO user_signup (username, password, created_at)
            VALUES ('ceroadmin', 'Ceroadminpw12', CURRENT_TIMESTAMP)";
    mysqli_query($conn, $sql);
}

$sql = "CREATE TABLE quantity_product_sold (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
product_name VARCHAR(50) NOT NULL,
product_quantity INT,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)";
mysqli_query($conn, $sql);

/* if (mysqli_query($conn, $sql)) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
} */

$sql = "CREATE TABLE total_sales (
id INT(6) UNSIGNED PRIMARY KEY, 
cumulative_sales INT,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)";

if (mysqli_query($conn, $sql)) {
    $sql = "INSERT INTO total_sales (cumulative_sales, updated_at)
            VALUES ('0', CURRENT_TIMESTAMP)";
    mysqli_query($conn, $sql);
}

$sql = "CREATE TABLE feedback_rating (
id INT(6) UNSIGNED PRIMARY KEY, 
rating1 INT,
rating2 INT,
rating3 INT,
rating4 INT,
rating5 INT,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)";
//mysqli_query($conn, $sql);

if (mysqli_query($conn, $sql)) {
    $sql = "INSERT INTO feedback_rating (rating1, rating2, rating3, rating4, rating5, updated_at)
            VALUES ('0', '0', '0', '0', '0', CURRENT_TIMESTAMP)";
    mysqli_query($conn, $sql);
}

$sql = "CREATE TABLE feedback_comments (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
comments VARCHAR(255) NOT NULL,
submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
)";
mysqli_query($conn, $sql);

mysqli_close($conn);
?>