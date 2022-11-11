<?php
//Generate the navigation bar for every page
$rightNavigationArr = array("Promotions", "About Us", "Enquiry", "Disclaimer");
$leftNavigationArr = array("Mobiles", "Laptops", "Wearables", "Appliances");
$subNavigationArr = array(mobileSub(), laptopSub(), wearablesSub(), appliancesSub());

$navTopHead = '<div class="nav1">
            <div id="subWin"></div>
            <ul id="top_right_bar">';

$rightNavList = "";
for($x=0;$x<count($rightNavigationArr); $x++){
    $ids = str_replace(' ', '', $rightNavigationArr[$x]);
    $rightNavList .= '<li id="' . $ids . 'Nav" class="rightLi"><a>' . $rightNavigationArr[$x] . '<span class="navline"></span></a></li>';
}
$navMidHead = '</ul><ul id="top_left_bar">';

$leftNavList = "";
for($x=0;$x<count($leftNavigationArr); $x++){
    $leftNavList .= '<li class="dropdown"><a>' . $leftNavigationArr[$x] . 
    '<span class="navline"></span>
    <span class="triangle">&#9650;</span></a>' . $subNavigationArr[$x] . '</li>';
}

echo '<nav id="navbar">' . $navTopHead . $rightNavList . $navMidHead . $leftNavList . '</ul></div></nav>';


//Mobiles sub navigation bar (drop down menu)
function mobileSub(){
    $mobileSubHead = '<span class="sub">
        <button class="subHead">
            All Mobiles
        </button>
        <span class="subcontainer">';

    $mobileSubImgArr = array("apple_logo","samsung_logo","huawei_logo","oppo_logo");
    $mobileSubImgAltArr = array("Apple", "Samsung", "Huawei", "Oppo");

    $mobileSubList = "";
    for($x=0;$x<count($mobileSubImgArr); $x++){
        $mobileSubList .= '<img class="mobileLogo" src="images/' . $mobileSubImgArr[$x] . '.png" alt="' . $mobileSubImgAltArr[$x] . ' Logo">';
    }
    return $mobileSubHead . $mobileSubList . "</span></span>";
}

//Laptop sub navigation bar (drop down menu)
function laptopSub(){
    $laptopSubHead = '<span class="sub">
        <button class="subHead">
            All Laptops
        </button><span class="subcontainer">';

    $laptopSubImgArr = array("asus_logo","acer_logo","msi_logo","lenovo_logo");
    $laptopSubImgAltArr = array("Asus", "Acer", "Msi", "Lenovo");

    $laptopSubList = "";
    for($x=0;$x<count($laptopSubImgArr); $x++){
        $laptopSubList .= '<img class="laptopLogo" src="images/' . $laptopSubImgArr[$x] . '.png" alt="' . $laptopSubImgAltArr[$x] . ' Logo">';
    }
    return $laptopSubHead . $laptopSubList . "</span></span>";
}

//Wearables sub navigation bar (drop down menu)
function wearablesSub(){
    $wearablesSubHead = '<span class="sub">
        <button class="subHead">
            All Wearables
        </button><span class="subcontainer">';

    $wearablesSubImgArr = array("apple_logo","samsung_logo","huawei_logo","fossil_logo","mobvoi_logo");
    $wearablesSubImgAltArr = array("Apple", "Samsung", "Huawei", "Fossil", "Mobvoi");

    $wearablesSubList = "";
    for($x=0;$x<count($wearablesSubImgArr); $x++){
        $wearablesSubList .= '<img class="wearablesLogo" src="images/' . $wearablesSubImgArr[$x] . '.png" alt="' . $wearablesSubImgAltArr[$x] . ' Logo">';
    }

    return $wearablesSubHead . $wearablesSubList . "</span></span>";
}

//Appliances sub navigation bar (drop down menu)
function appliancesSub(){
    $appliancesSubHead = '<span class="sub">
        <button class="subHead">
            All Appliances
        </button><span class="subcontainer">';

    $appliancesSubImgArr = array("samsung_logo","electrolux_logo","toshiba_logo","bosch_logo");
    $appliancesSubImgAltArr = array("Samsung", "Electrolux", "Toshiba", "Bosch");

    $appliancesSubList = "";
    for($x=0;$x<count($appliancesSubImgArr); $x++){
        $appliancesSubList .= '<img class="appliancesLogo" src="images/' . $appliancesSubImgArr[$x] . '.png" alt="' . $appliancesSubImgAltArr[$x] . ' Logo">';
    }
    return $appliancesSubHead . $appliancesSubList . "</span></span>";
}

?>