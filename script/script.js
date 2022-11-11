//To store all functions that require to run after the window loads 
function initial(){
    loginBtn();
    signupBtn();
    navHovering();
    subnavbar();
    navbarActive();
    productsBanner();
    activeBannerEffect();
    productLists();
    subNavigation();
    doScrollEffectFixedButton();
    backtopBtn();
    feedbackBtn();
    enquiryFunctions();
    homePageMovingBtn();
    promoCountDown();
    checkPhpErrorMsg();
}

function checkPhpErrorMsg(){
    if(localStorage.signUpError!==undefined){
        if(JSON.parse(localStorage.signUpError) === true){
            document.body.style.overflowY = "hidden";
            document.getElementById("signupWindow").style.display = "block";
            document.getElementById("signUpForm").style.left = '0%';
            localStorage.signUpError = false;
        }
    }if(localStorage.logInError!==undefined){
        if(JSON.parse(localStorage.logInError) === true){
            document.body.style.overflowY = "hidden";
            document.getElementById("loginWindow").style.display = "block";
            document.getElementById("loginContainer").style.right = '0%';
            localStorage.logInError = false;
        }
    }
}

/* 
function loadPhpMsg(){
    if(localStorage.signedUp !== undefined){
        if(localStorage.signedUp === true){
            console.log(localStorage.signedUp);
            localStorage.signedUp = false;
            messageBox("Sign up successfully!<br>Log in now! <img src=\"images/green_tick.png\" alt=\"Green Tick Icon\">");
        }
    }
} */

//To store all functions about enquiry page
function enquiryFunctions(){
    generateProductTypeSelection();
    enquiry_product();
    enquiry_subject();
    //enquiry_states();
}

//Locate path of page
function pathPage(){
    var path = location.pathname;
    var path = path.split("/");
    var path = (path[path.length - 1]);
    return path;
}

var messageTimer;
//Custom message Box
function messageBox(message){
    window.clearTimeout(messageTimer);
    messageTimer = window.setTimeout(function(){
        document.getElementsByClassName("messageBox")[0].style.display = "none";
    }, 4000);

    document.getElementsByClassName("messageBoxContent")[0].innerHTML = message;
    document.getElementsByClassName("messageBox")[0].style.display = "block";
}

//To Capitalize the first letter
function capitalFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//To save array into sessionStorage
function storeArray(arrayToStore, arrayName){
    localStorage.setItem(arrayName, JSON.stringify(arrayToStore));
}

//To retrive array from sessionStorage
function getArray(arrayName){
    var arrayTaken = localStorage.getItem(arrayName);
    var arrayTaken = JSON.parse(arrayTaken);
    return arrayTaken;
}

//When user scroll down, display Cart and Back to Top buttons
window.onscroll = function() {doScrollEffectFixedButton();};
function doScrollEffectFixedButton() {
    var cartBtn = document.getElementsByClassName("fixcartContain")[0];
    var backtop = document.getElementsByClassName("backtop")[0];
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        cartBtn.style.display = "block";
        backtop.style.display = "block";
    }else{
        cartBtn.style.display = "none";
        backtop.style.display = "none";
    }
}

//Button to bring user back to top
function backtopBtn(){
    document.getElementsByClassName("backtop")[0].onclick = function() {jumpToTop()};
}

function jumpToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*
//Generate the header for every page
function head(){
   /*  var content = "\
    <div class=\"topcontent\">\
        <a href=\"index.php\"><img src=\"images/logo.png\" alt=\"Logo\" class=\"mainlogo\"></a>\
        <div id=\"signupBtn\" class=\"member\">\
            <p class=\"image\"><img src=\"images/member_icon.png\" alt=\"Member Icon\"></p>\
            <p class=\"txt\">Sign up</p>\
        </div>\
        <div id=\"loginBtn\"  class=\"login\">\
            <p class=\"image\"><img src=\"images/login_icon.png\" alt=\"Log In Icon\"></p>\
            <p class=\"txt\">Log in</p>\
        </div>\
        <div class=\"cartContain\">\
            <div class=\"cart\">\
                <img id=\"cartBtn1\"src=\"images/viewcart.png\" alt=\"Cart Icon\">\
            </div>\
        </div>\
        <div class=\"fixcartContain\">\
            <div class=\"fixcart\">\
                <img id=\"cartBtn2\"src=\"images/viewcart.png\" alt=\"Cart Icon\">\
            </div>\
        </div>\
        <div class=\"messageBox\">\
            <p class=\"messageBoxContent\"></p>\
        </div>\
        <div class=\"confirmDeleteBox\">\
            <p class=\"confirmDeleteBoxContent\"></p>\
            <button id=\"yesBtn\">Yes</button>\
            <button id=\"noBtn\">No</button>\
        </div>\
    </div>" 
    document.getElementById("head").innerHTML += generateCalculator() + generateFeedback();
}*/
/* 
//Generate the pop up cart for every page
function generateCart(){
    var content = "\
    <div id=\"popupCart\" class=\"popupCart\">\
        <div class=\"popupCartContent\">\
            <div class=\"headCart\">\
                <p class=\"close\">&times;</p>\
                <p class=\"dltCart\">\
                    <img src=\"images/delete_icon.png\" alt=\"Delete Icon\">\
                </p>\
            </div>\
            <div id=\"cartProductList\">\
                <div class=\"containerCart\">\
                    <figure class=\"cartImg\"></figure>\
                    <div class=\"tickbox\"></div>\
                    <div class=\"proName\"></div>\
                    <div class=\"proPrice\"></div>\
                    <div class=\"proQuantity\"></div>\
                </div>\
            </div>\
            <div class=\"total\">Total: RM <span class=\"totalAns\"></span></div>\
            <button id=\"payNow\" class=\"payNow\">Pay Now</button>\
        </div>\
    </div>"
    return content;
} */
/*
//Generate the ca;culator for every page
function generateCalculator(){
    var content = "\
    <div id=\"calframe\">\
        <div id=\"calcontainer\">\
            <div id=\"calTop\">\
                <p id=\"calClose\">&times;</p>\
                <p id=\"calDirection\">\
                    <span id=\"calDireLeft\">\<</span>\
                    <span id=\"calDireRight\">\></span>\
                </p>\
                <div id=\"signscreen\"></div>\
            </div>\
            <div id=\"screen\"></div>\
            <div id=\"numbers\"></div>\
            <div id=\"operations\"></div>\
        </div>\
    </div>\
    <audio id=\"clickAudio\">\
        <source src=\"audio/numberaudio.mp3\" type=\"audio/mpeg\">\
    </audio>\
    <audio id=\"deleteAudio\">\
        <source src=\"audio/deleteaudio.mp3\" type=\"audio/mpeg\">\
    </audio>\
    <audio id=\"operationAudio\">\
        <source src=\"audio/operationAudio.mp3\" type=\"audio/mpeg\">\
    </audio>\
    <audio id=\"equalAudio\">\
        <source src=\"audio/equalAudio.mp3\" type=\"audio/mpeg\">\
    </audio>"

    return content;
}
/* 
//Generate the lofin form for every page
function generateLogin(){
    var content = "\
    <div id=\"loginWindow\">\
    <form id=\"loginForm\" method=\"post\" class=\"login\" enctype=\"text/plain\" autocomplete=\"off\">\
        <fieldset id=\"loginContainer\">\
        <legend>Cero Member Log In</legend>\
        <div id=\"closeLogIn\">&times;</div>\
        <div class=\"imgbox\">\
            <img src=\"images/userpic.png\" alt=\"User image\" class=\"user\">\
        </div>\
        <div class=\"loginbox\">\
            <p>\
            <input id=\"loginUsername\" type=\"text\" placeholder=\"Username\" name=\"fname\" size=\"40\">\
        </p>\
        <p>\
            <input id=\"loginPwd\" type=\"password\" placeholder=\"Password\" name=\"pwd\" size=\"40\">\
        </p>\
        <p>\
            *Contain minimum 6 characters<br>\
            *Includes number, uppercase and lowercase\
        </p>\
        <p>\
            <span id=\"loginCheckBoxContainer\">\
                <span id=\"loginCheckBox\"></span>\
                Remember me\
            </span>\
            <input id=\"loginSubmit\" type=\"submit\" value=\"Log In\" >\
        </p>\
    </fieldset></form></div>"
    return content;
}

//Generate the sign up form for every page
function generateSignup(){
    var content = "\
    <div id=\"signupWindow\">\
    <form id=\"signUpForm\" class=\"signUp\" name=\"member_resgistration\" method=\"post\" enctype=\"text/plain\" autocomplete=\"off\">\
    <fieldset id=\"signUpContainer\">\
    <legend>Cero Member Sign Up</legend>\
    <div id=\"closeSignUp\">&times;</div>\
    <table>\
    <tr>\
        <td>Username: <span class=\"formdot\">*</span></td>\
        <td>Full Name: <span class=\"formdot\">*</span></td>\
    </tr>\
    <tr>\
        <td class=\"notes\" id=\"nthchild\">\
            <input type=\"text\" placeholder=\"Input your username\" name=\"username\" size=\"40\" id=\"signUpUsername\" title=\"Alphabetical characters only\">\
            <p class=\"hidden\">*Alphabetical characters only</p>\
        </td>\
        <td class=\"notes\">\
            <input type=\"text\" placeholder=\"Input your full name\" name=\"fullname\" size=\"40\" id=\"signUpfullname\" title=\"Alphabetical characters only\">\
            <p>*Alphabetical characters only</p>\
        </td>\
    </tr>\
    <tr>\
        <td>Password <span class=\"formdot\">*</span></td>\
        <td>Retype Password <span class=\"formdot\">*</span></td>\
    </tr>\
    <tr>\
        <td class=\"notes\">\
            <input type=\"password\" placeholder=\"Input your password\" name=\"pwd1\" size=\"40\" id=\"signUppwd1\">\
            <p>\
                *Contain minimum 6 characters<br>\
                *Includes number, uppercase and lowercase\
            </p>\
        </td>\
        <td class=\"notes\">\
            <input type=\"password\" placeholder=\"Retype your password\" name=\"pwd2\" size=\"40\" id=\"signUppwd2\">\
            <p>\
                *Contain minimum 6 characters<br>\
                *Includes number, uppercase and lowercase\
            </p>\
        </td>\
    </tr>\
    <tr>\
        <td colspan=\"2\">\
            <table>\
                <tr>\
                    <td colspan=\"3\">Street address: <span class=\"formdot\">*</span></td>\
                </tr>\
                <tr>\
                    <td colspan=\"3\">\
                        <input type=\"text\" name=\"street\" id=\"signUpStreetadd\" maxlength=\"40\">\
                    </td>\
                </tr>\
                <tr>\
                    <td>City: <span class=\"formdot\">*</span></td>\
                    <td>State: <span class=\"formdot\">*</span></td>\
                    <td>Postcode: <span class=\"formdot\">*</span></td>\
                </tr>\
                <tr>\
                    <td>\
                        <input type=\"text\" name=\"city\" id=\"signUpcity\" maxlength=\"20\">\
                    </td>\
                    <td>\
        <select name=\"state\" id=\"signUpstate\">\
            <option disabled selected value=\"\">- Select -</option>\
            <optgroup label=\"Federal Territories\">\
                <option value=\"KUL\">Kuala Lumpur</option>\
                <option value=\"LBN\">Labuan</option>\
                <option value=\"PJY\">Putrajaya</option>\
            </optgroup>\
            <optgroup label=\"States\">\
                <option value=\"SWK\">Sarawak</option>\
                <option value=\"SBH\">Sabah</option>\
                <option value=\"JHR\">Johor</option>\
                <option value=\"KDH\">Kedah</option>\
                <option value=\"KTN\">Kelantan</option>\
                <option value=\"MLK\">Malacca</option>\
                <option value=\"NSN\">Negeri Sembilan</option>\
                <option value=\"PHG\">Pahang</option>\
                <option value=\"PNG\">Penang</option>\
                <option value=\"PRK\">Perak</option>\
                <option value=\"PLS\">Perlis</option>\
                <option value=\"SGR\">Selangor</option>\
                <option value=\"TRG\">Terengganu</option>\
            </optgroup>\
        </select>\
                    </td>\
                    <td>\
                        <input type=\"text\" name=\"postcode\" id=\"signUppostcode\" title=\"Digits only\">\
                    </td>\
                </tr>\
            </table>\
        </td>\
    </tr>\
    <tr>\
        <td>Email <span class=\"formdot\">*</span></td>\
        <td>Phone No. <span class=\"formdot\">*</span></td>\
    </tr>\
    <tr>\
        <td>\
            <input type=\"text\" placeholder=\"youremail@example.com\" name=\"email\" size=\"40\" id=\"signUpemail\">\
        </td>\
        <td>\
            <input type=\"tel\" id=\"signUptel\" name=\"phone\" placeholder=\"###-#######\" title=\"Digits only\">\
            <!--maxlength is 11 as it include the dash (-)-->\
        </td>\
    </tr>\
    <tr>\
        <td>Date of birth <span class=\"formdot\">*</span></td>\
        <td>Gender <span class=\"formdot\">*</span></td>\
    </tr>\
    <tr>\
        <td>\
            <input id=\"signUpbirthDate\" class=\"date\" type=\"date\" name=\"date\">\
        </td>\
        <td>\
            <select id=\"signUpgender\" name=\"gender\">\
                <option disabled selected value=\"\">- Select -</option>\
                <option value=\"male\">Male</option>\
                <option value=\"female\">Female</option>\
            </select>\
        </td>\
    </tr>\
    </table>\
    <div class=\"memberbutton\">\
        <input id=\"signupSubmit\" type=\"submit\" value=\"Sign Up\">\
        <input type=\"reset\" value=\"Reset\">\
    </div>\
    </fieldset></form></div>"

    return content;
}
//Generate the feedback panel for every page
function generateFeedback(){
    ratingImg = "";
    for(x=1;x<=5;x++){
        ratingImg += "<img id=\"rateEmoji"+String(x)+"\" src=\"images/rating"+String(x)+".png\" alt=\"Rating emoji"+String(x)+"\">";
    }

    var content = "\
    <form action=\""+pathPage()+"\" id=\"feedbackForm\" method=\"post\" enctype=\"text/plain\" autocomplete=\"off\">\
        <div id=\"closeFeedback\">&times;</div>\
        <h1>Customer's Feedback</h1>\
        <p>Tell us your feedback emoji!</p>\
        <div id=\"ratingEmojiBox\">"+ratingImg+"</div>\
        <div id=\"feedbackCommentBox\">\
            <p>Comments:</p>\
            <textarea id=\"feedbackComment\" type=\"text\" placeholder=\"(Optional)\" name=\"feedbackComment\" size=\"40\"></textarea>\
        </div>\
        <div id=\"feedbackSubmitBox\">\
            <input id=\"feedbackSubmit\" type=\"submit\" value=\"Submit\" >\
        </div>\
    </form>"
    return content;
}
//Generate the navigation bar for every page
function navbar(){
    var rightNavigationArr = ["Promotions", "About Us", "Enquiry", "Disclaimer"];
    var leftNavigationArr = ["Mobiles", "Laptops", "Wearables", "Appliances"];

    var navTopHead = "\
    <div class=\"nav1\">\
    <div id=\"subWin\"></div>\
    <ul id=\"top_right_bar\">"

    rightNavList = "";
    for(x in rightNavigationArr){
        rightNavList += "<li id=\""+rightNavigationArr[x].replace(/\s/g,'')+"Nav\" class=\"rightLi\"><a>"+rightNavigationArr[x]+"<span class=\"navline\"></span></a></li>"
    }
    var navMidHead = "</ul><ul id=\"top_left_bar\">"

    leftNavList = "";
    for(x in leftNavigationArr){
        leftNavList += "<li class=\"dropdown\"><a>"+leftNavigationArr[x]+"\
        <span class=\"navline\"></span>\
        <span class=\"triangle\">&#9650;</span></a></li>"
    }
    
    var content = navTopHead + rightNavList + navMidHead + leftNavList + "</ul></div>"
    
    document.getElementById("navbar").innerHTML = content;
    generateSub();
    navHovering();
} */

//Store the function of changing the location of the pages when user click the buttons in the navigation bar
function navHovering(){
    locationFunc("PromotionsNav", "promo.php");
    locationFunc("AboutUsNav", "about.php");
    locationFunc("EnquiryNav", "enquiry.php");
    locationFunc("DisclaimerNav", "disclaimer.php");
}

//Change the location of the pages when user click the buttons in the navigation bar
function locationFunc(idNaming, locate){
    if(idNaming == "EnquiryNav"){
        document.getElementById(idNaming).onclick = function() {
            sessionStorage.removeItem("name_product")
            location.href = locate;}
    }else{
        document.getElementById(idNaming).onclick = function() {location.href = locate;}
    }
}

//Store the functions of DOM sub navigation bar (drop down menu)
function generateSub(){
    mobileSub();
    laptopSub();
    wearablesSub();
    appliancesSub();
}
/* 
//DOM mobiles sub navigation bar (drop down menu)
function mobileSub(){
    var mobileSubHead = "<span class=\"sub\">\
        <button class=\"subHead\">\
            All Mobiles\
        </button>\
        <span class=\"subcontainer\">"

    var mobileSubImgArr = ["apple_logo","samsung_logo","huawei_logo","oppo_logo"];
    var mobileSubImgAltArr = ["Apple", "Samsung", "Huawei", "Oppo"];

    mobileSubList = ""
    for(x in mobileSubImgArr){
        mobileSubList += "<img class=\"mobileLogo\" src=\"images/"+mobileSubImgArr[x]+".png\" alt=\""+mobileSubImgAltArr[x]+" Logo\">"
    }
    var content = mobileSubHead + mobileSubList + "</span></span>"
    
    document.getElementsByClassName("dropdown")[0].innerHTML += content;
}

//DOM laptop sub navigation bar (drop down menu)
function laptopSub(){
    var laptopSubHead = "<span class=\"sub\">\
        <button class=\"subHead\">\
            All Laptops\
        </button><span class=\"subcontainer\">"

    var laptopSubImgArr = ["asus_logo","acer_logo","msi_logo","lenovo_logo"];
    var laptopSubImgAltArr = ["Asus", "Acer", "Msi", "Lenovo"];

    laptopSubList = ""
    for(x in laptopSubImgArr){
        laptopSubList += "<img class=\"laptopLogo\" src=\"images/"+laptopSubImgArr[x]+".png\" alt=\""+laptopSubImgAltArr[x]+" Logo\">"
    }
    var content = laptopSubHead + laptopSubList + "</span></span>"

    document.getElementsByClassName("dropdown")[1].innerHTML += content;
}

//DOM wearables sub navigation bar (drop down menu)
function wearablesSub(){
    var wearablesSubHead = "<span class=\"sub\">\
        <button class=\"subHead\">\
            All Wearables\
        </button><span class=\"subcontainer\">"

    var wearablesSubImgArr = ["apple_logo","samsung_logo","huawei_logo","fossil_logo","mobvoi_logo"];
    var wearablesSubImgAltArr = ["Apple", "Samsung", "Huawei", "Fossil", "Mobvoi"];

    wearablesSubList = ""
    for(x in wearablesSubImgArr){
        wearablesSubList += "<img class=\"wearablesLogo\" src=\"images/"+wearablesSubImgArr[x]+".png\" alt=\""+wearablesSubImgAltArr[x]+" Logo\">"
    }

    var content = wearablesSubHead + wearablesSubList + "</span></span>"

    document.getElementsByClassName("dropdown")[2].innerHTML += content;
}

//DOM appliances sub navigation bar (drop down menu)
function appliancesSub(){
    var appliancesSubHead = "<span class=\"sub\">\
        <button class=\"subHead\">\
            All Wearables\
        </button><span class=\"subcontainer\">"

    var appliancesSubImgArr = ["samsung_logo","electrolux_logo","toshiba_logo","bosch_logo"];
    var appliancesSubImgAltArr = ["Samsung", "Electrolux", "Toshiba", "Bosch"];

    appliancesSubList = ""
    for(x in appliancesSubImgArr){
        appliancesSubList += "<img class=\"appliancesLogo\" src=\"images/"+appliancesSubImgArr[x]+".png\" alt=\""+appliancesSubImgAltArr[x]+" Logo\">"
    }
    var content = appliancesSubHead + appliancesSubList + "</span></span>"

    document.getElementsByClassName("dropdown")[3].innerHTML += content;
} */

//Change the location of the pages when user click the buttons in the navigation bar
function subnavbar(){
    var mobiletarget = document.getElementsByClassName("dropdown")[0];
    var laptoptarget = document.getElementsByClassName("dropdown")[1];
    var wearablestarget = document.getElementsByClassName("dropdown")[2];
    var appliancestarget = document.getElementsByClassName("dropdown")[3];

    mobiletarget.onclick = function() {displaySub(0)};
    laptoptarget.onclick = function() {displaySub(1)};
    wearablestarget.onclick = function() {displaySub(2)};
    appliancestarget.onclick = function() {displaySub(3)};
}

//Show and display the sub navigation bar (drop down menu)
function displaySub(nth){
    var subWin = document.getElementById("subWin");
    var sub = document.getElementsByClassName("sub")[nth];
    var word = document.getElementsByClassName("dropdown")[nth].firstElementChild;
    var tri = document.getElementsByClassName("triangle")[nth];

    for(n=0;n<=3;n++){
        var subBool = document.getElementsByClassName("sub")[n];
        var triBool = document.getElementsByClassName("triangle")[n];
        var wordBool = document.getElementsByClassName("dropdown")[n].firstElementChild;
        subBool.style.display = "none";
        triBool.style.display = "none";
        wordBool.style.color = "black";
        if(document.getElementsByClassName("tempClass")[0] !== undefined){
            document.getElementsByClassName("tempClass")[0].className = "navline";
        }
    }

    var path = pathPage();
    if(path == "product1.php" && (nth == 0)){
        return false;
    }else if(path == "product2.php" && (nth == 1)){
        return false;
    }else if(path == "product3.php" && (nth == 2)){
        return false;
    }else if(path == "product4.php" && (nth == 3)){
        return false;
    }

    subWin.style.display = "block";
    sub.style.display = "block";
    tri.style.display = "inline-block";
    word.style.color = "rgb(6, 6, 179)";
    document.getElementsByClassName("navline")[nth+4].className = "tempClass";

    //To close and hide the sub navigation bar (drop down menu) after 10 seconds
    setTimeout(function(){
        closeNavBar(subWin,sub,tri,word);
    }, 10000);
    
    subWin.onclick = function() {
        closeNavBar(subWin,sub,tri,word);
    }
}

//Close and hide the sub navigation bar (drop down menu)
function closeNavBar(subWin,sub,tri,word){
    subWin.style.display = "none";
    sub.style.display = "none";
    tri.style.display = "none";
    word.style.color = "black";
    if(document.getElementsByClassName("tempClass")[0] !== undefined){
        document.getElementsByClassName("tempClass")[0].className = "navline";
    }
}

//Highlight the navigation bar tab if the user is in that particular page
function navbarActive(){
    var path = pathPage();
    
    if(path == "product1.php"){
        addActivelineClass(4, 0);
    }else if(path == "product2.php"){
        addActivelineClass(5, 1);
    }else if(path == "product3.php"){
        addActivelineClass(6, 2);
    }else if(path == "product4.php"){
        addActivelineClass(7, 3);
    }else if(path == "promo.php"){
        addActivelineClass(0, 4);
    }else if(path == "about.php" || path == "aboutme1.php" || path == "aboutme2.php" || path == "aboutme3.php" || path == "aboutme4.php"){
        addActivelineClass(1, 5);
    }else if(path == "enquiry.php"){
        addActivelineClass(2, 6);
    }else if(path == "disclaimer.php"){
        addActivelineClass(3, 7);
    }
}

//Change the class of navigation bar tab
function addActivelineClass(wordStyle, lineStyle){
    var target = document.getElementsByClassName("navline")[wordStyle];
    target.className += " activeline";
    if(document.getElementsByClassName("dropdown")[lineStyle] !== undefined){
        var target = document.getElementsByClassName("dropdown")[lineStyle];
        target.className += " activeline";
    }else{
        var lineStyle = lineStyle - 4; 
        var target = document.getElementsByClassName("rightLi")[lineStyle];
        target.className += " activeline";
    }
}

//Store the functions that DOM product page's filter tab 
function productsBanner(){
    var path = pathPage();
    if(path == "product1.php"){
        attatchBanner(0, 4, "normalBanner mobileBannerLogo");
    }else if(path == "product2.php"){
        attatchBanner(1, 4, "normalBanner laptopBannerLogo");
    }else if(path == "product3.php"){
        attatchBanner(2, 5, "normalBanner wearablesBannerLogo");
    }else if(path == "product4.php"){
        attatchBanner(3, 4, "normalBanner appliancesBannerLogo");
    }
}

//DOM product page's filter tab 
function attatchBanner(nth, num, classNaming){
    var target = document.getElementById("productBanner");
    var content = document.getElementsByClassName("sub")[nth];
    target.innerHTML = content.innerHTML;
    for(i=0;i<num;i++){
        document.getElementById("productBanner").children[1].children[i].className = classNaming;
    }
}

//Store the functions that DOM all products list
function productLists(){
    var path = pathPage();
    if(path == "product1.php"){
        mobileGenerate();
        updateProduct("mobileDisplayArr", "mobileBannerLogo");
    }else if(path == "product2.php"){
        laptopGenerate();
        updateProduct("laptopDisplayArr", "laptopBannerLogo");
    }else if(path == "product3.php"){
        wearablesGenerate();
        updateProduct("wearablesDisplayArr", "wearablesBannerLogo");
    }else if(path == "product4.php"){
        appliancesGenerate();
        updateProduct("appliancesDisplayArr", "appliancesBannerLogo");
    }
}

//Store array of mobile image, name, price
function mobileGenerate(){
    var appleImg = ["m_apple1.png","m_apple2.png","m_apple2.png","m_apple4.png","m_apple5.png","m_apple6.png","m_apple7.png","m_apple8.png","m_apple9.png","m_apple10.png","m_apple11.png","m_apple12.png"];
    var appleName = ["iPhone 11 Pro Max","iPhone 11 Pro","iPhone 11","iPhone XS Max","iPhone XS","iPhone XR","iPhone X","iPhone 8 Plus","iPhone 8","iPhone 7 Plus","iPhone 7","iPhone 6s Plus"];
    var applePrice = ["RM 5,299","RM 4,899","RM 3,399","RM 2,999","RM 2,599","RM 2,399","RM 2,199","RM 1,899","RM 1,599","RM 1,399","RM 1,299","RM 999"];

    for(i=0;i<appleImg.length;i++){
        generateProduct(appleImg[i], appleName[i], applePrice[i], 0);
    }

    var samsungImg = ["m_samsung1.png","m_samsung2.png","m_samsung3.png","m_samsung4.png","m_samsung5.png","m_samsung6.png","m_samsung7.png","m_samsung8.png","m_samsung9.png","m_samsung10.png","m_samsung11.png","m_samsung12.png","m_samsung13.png","m_samsung14.png","m_samsung15.png"];
    var samsungName = ["Galaxy S20 Ultra","Galaxy S20+","Galaxy S20","Note 10+","Note 10","Note 10 Lite","Note 9","Galaxy S10+","Galaxy S10","Galaxy S9+","Galaxy S9","Galaxy A80","Galaxy A70","Galaxy A50","Galaxy A30"];
    var samsungPrice = ["RM 4,999","RM 3,999","RM 3,599","RM 4,199","RM 3,699","RM 2,299","RM 2,299","RM 3,599","RM 3,099","RM 2,399","RM 1,999","RM 2,199","RM 1,799","RM 1,099","RM 899"];

    for(i=0;i<samsungImg.length;i++){
        generateProduct(samsungImg[i], samsungName[i], samsungPrice[i], 1);
    }

    var huaweiImg = ["m_huawei1.png","m_huawei2.png","m_huawei3.png","m_huawei4.png","m_huawei5.png","m_huawei6.png" ,"m_huawei7.png","m_huawei8.png","m_huawei9.png","m_huawei10.png","m_huawei11.png","m_huawei12.png","m_huawei13.png" ,"m_huawei14.png","m_huawei15.png","m_huawei16.png"];
    var huaweiName = ["Huawei P40 Pro+"," Huawei P40 Pro","Huawei P40","Huawei P30 Pro","Huawei P30","Huawei Mate 30+","Huawei Mate 30","Huawei Mate 20+","Huawei Mate 20","Huawei Mate 10","Huawei Nova 7i","Huawei Nova 6i","Huawei Nova 5i","Huawei Nova 4i","Huawei Nova 3i","Huawei Nova 2i"];
    var huaweiPrice = ["RM 3,999","RM 3,799","RM 3,399","RM 3,099","RM 2,799","RM 4,099","RM 3,899","RM 3,199","RM 2,899","RM 2,399","RM 2,099","RM 1,899","RM 1,699","RM 1,499","RM 1,299","RM 1,099"];

    for(i=0;i<huaweiImg.length;i++){
        generateProduct(huaweiImg[i], huaweiName[i], huaweiPrice[i], 2);
    }
    
    var oppoImg = ["m_oppo1.png","m_oppo2.png","m_oppo3.png","m_oppo4.png","m_oppo5.png","m_oppo6.png","m_oppo7.png","m_oppo8.png","m_oppo9.png","m_oppo10.png"];
    var oppoName = ["Oppo Find X2 Pro","Oppo Find X2","Oppo Find X","Oppo Reno 2+","Oppo Reno 2","Oppo Reno","Oppo A91","Oppo A9","Oppo A5","Oppo A3"];
    var oppoPrice = ["RM 4,299","RM 4,099","RM 3,999","RM 3,499","RM 3,099","RM 2,899","RM 2,599","RM 2,199","RM 1,099","RM 799"];
 
    for(i=0;i<oppoImg.length;i++){
        generateProduct(oppoImg[i], oppoName[i], oppoPrice[i], 3);
    }
}

//Store array of laptop image, name, price
function laptopGenerate(){
    var asusImg = ["p_asus1.png","p_asus2.png","p_asus3.png","p_asus4.png","p_asus5.png"];
    var asusName = ["Asus Vivo book","Asus Zenbook","Asus ZenBook Pro","Asus Classic","Asus VivoBook"];
    var asusPrice = ["RM 3,199","RM 2,899","RM 3,599","RM 4,399","RM 4,399"];

    for(i=0;i<asusImg.length;i++){
        generateProduct(asusImg[i], asusName[i], asusPrice[i], 0);
    }

    var acerImg = ["p_acer1.png","p_acer2.png","p_acer3.png","p_acer4.png","p_acer5.png","p_acer6.png"];
    var acerName = ["Acer Swift 3","Acer Espire 15","Acer Swift 7","Acer Aspire 16","Acer Swift 7","Acer Swift 7 Pro"];
    var acerPrice = ["RM 2,099","RM 3,099","RM 2,799","RM 2,699","RM4,199","RM 4,799"];

    for(i=0;i<acerImg.length;i++){
        generateProduct(acerImg[i], acerName[i], acerPrice[i], 1);
    }

    var msiImg = ["p_msi1.png","p_msi2.png","p_msi3.png","p_msi4.png","p_msi5.png","p_msi6.png"];
    var msiName = ["MSI Modern","MSI GF63","MSI GL63","MSI Classic","MSI Classic Pro","MSI Prestige"];
    var msiPrice = ["RM 3,369","RM3,599","RM 3,899","RM 4,999","RM 5,499","RM2,999"];

    for(i=0;i<msiImg.length;i++){
        generateProduct(msiImg[i], msiName[i], msiPrice[i], 2);
    }

    var lenovoImg = ["p_lenovo1.png","p_lenovo2.png","p_lenovo3.png","p_lenovo4.png","p_lenovo5.png"];
    var lenovoName = ["Lenovo Legion Y520","Lenovo Legion Y530","Lenovo Yogapad","Lenovo Ideapad Pro","Lenovo CarbonPad"];
    var lenovoPrice = ["RM 3,099","RM 3,199","RM 3,299","RM 4,399","RM 7,199"];

    for(i=0;i<lenovoImg.length;i++){
        generateProduct(lenovoImg[i], lenovoName[i], lenovoPrice[i], 3);
    }
}

//Store array of wearables image, name, price
function wearablesGenerate(){
    var appleImg = ["w_apple1.png","w_apple2.png","w_apple3.png","w_apple4.png","w_apple5.png"];
    var appleName = ["Series 5 Space Gray","Series 5 Silver","Series 5 Gold","Nike Series 5 Gray","Nike Series 5 Silver"];
    var applePrice = ["RM 2,199","RM 2,199","RM 2,199","RM 2,349","RM 2,349"];

    for(i=0;i<appleImg.length;i++){
        generateProduct(appleImg[i], appleName[i], applePrice[i], 0);
    }

    var samsungImg = ["w_samsung1.png","w_samsung2.png","w_samsung3.png","w_samsung4.png","w_samsung5.png","w_samsung6.png","w_samsung7.png","w_samsung8.png","w_samsung9.png","w_samsung10.png"];
    var samsungName = ["Galaxy Midnight Black","Galaxy Rose Gold","Galaxy Active 2 Black","Galaxy Active 2 Gold","Galaxy Active 2 Pink","Galaxy Active 2 Black","Galaxy Fit Silver","Galaxy Fit Black","Galaxy Fit(e) Black","Galaxy Fit(e) White"];
    var samsungPrice = ["RM 1,199","RM 1,199","RM 1,399","RM 1,399","RM 1,099","RM 1,099","RM 369","RM 369","RM 139","RM 139"];

    for(i=0;i<samsungImg.length;i++){
        generateProduct(samsungImg[i], samsungName[i], samsungPrice[i], 1);
    }

    var huaweiImg = ["w_huawei1.png","w_huawei2.png","w_huawei3.png","w_huawei4.png","w_huawei5.png","w_huawei6.png","w_huawei7.png","w_huawei8.png"];
    var huaweiName = ["GT 2 Brown Leather","GT 2 Lake Cyan","GT 2e Green","GT 2 Refined Gold","GT 2 Matte Black","Band 3 Black","Talkband B5 Black","Talkband B5 Brown"];
    var huaweiPrice = ["RM 899","RM 799","RM 599","RM 899","RM 799","RM 239","RM 599","RM 699"];

    for(i=0;i<huaweiImg.length;i++){
        generateProduct(huaweiImg[i], huaweiName[i], huaweiPrice[i], 2);
    }

    var fossilImg = ["w_fossil1.png","w_fossil2.png","w_fossil3.png","w_fossil4.png","w_fossil5.png"];
    var fossilName = ["Gen 5 Carlyle Black","Gen 5 Garett Silver","Gen 5 Garett Black","Gen 5 Julianna Gold","Gen 5 Julianna Smoke"];
    var fossilPrice = ["RM 1,250","RM 1,010","RM 950","RM 900","RM 850"];

    for(i=0;i<fossilImg.length;i++){
        generateProduct(fossilImg[i], fossilName[i], fossilPrice[i], 3);
    }

    var mobvoiImg = ["w_mobvoi1.png","w_mobvoi2.png","w_mobvoi3.png","w_mobvoi4.png","w_mobvoi5.png"];
    var mobvoiName = ["TicWatch Pro","TicWatch S2","TicWatch Sport","TicWatch E2","TicWatch C2"];
    var mobvoiPrice = ["RM 1,200","RM 850","RM 750","RM 750","RM 910"];

    for(i=0;i<mobvoiImg.length;i++){
        generateProduct(mobvoiImg[i], mobvoiName[i], mobvoiPrice[i], 4);
    }
}

//Store array of appliances image, name, price
function appliancesGenerate(){
    var samsungImg = ["microwave_samsung1.png","microwave_samsung2.png","purifier_samsung1.png","purifier_samsung2.png","washer_samsung3.png","jet_samsung1.png"];
    var samsungName = ["Oven","Microwave","Air Purifier","Smart Air Purifier","Combo Washer","Powerstick Jet"];
    var samsungPrice = ["RM 309","RM 1,188","RM 999","RM 1,799","RM 6,999","RM 3,599"];

    for(i=0;i<samsungImg.length;i++){
        generateProduct(samsungImg[i], samsungName[i], samsungPrice[i], 0);
    }

    var electroluxImg = ["blender_electrolux1.png","blender_electrolux2.png","blender_electrolux3.png","kettle_electrolux1.png","kettle_electrolux2.png","rice_electrolux1.png","rice_electrolux3.png","toaster_electrolux2.png","toaster_electrolux3.png","wheater_electrolux1.png","wheater_electrolux2.png","wheater_electrolux3.png"];
    var electroluxName = ["1.5L Jug Blender","1.75L Jug Blender","1.75L Suction Blender","EasyLine Kettle","EasySense Kettle","EasyLine Rice Cooker","Rice Cooker","Bread Toaster","Oven Toaster","Water Heater 700","EcoTouch Heater","SilentPump Heater"];
    var electroluxPrice = [
        "RM 132","RM 227","RM 184","RM 120","RM 159","RM 224","RM 351","RM 116","RM 299","RM 655","RM 848","RM 556"];

    for(i=0;i<electroluxImg.length;i++){
        generateProduct(electroluxImg[i], electroluxName[i], electroluxPrice[i], 1);
    }

    var toshibaImg = ["fan_toshiba1.png","fan_toshiba2.png","fan_toshiba3.png","kettle_toshiba1.png","mcooker_toshiba1.png","microwave_toshiba1.png","rice_toshiba2.png","vacuum_toshiba1.png"];
    var toshibaName = ["12-inch Wall Fan","16-inch Wall Fan","16-inch Stand Fan","Electric Kettle","Multi-Cooker","Grill Microwave Oven","1.8L Rice Cooker","Vacuum Cleaner"];
    var toshibaPrice = ["RM 252","RM 199","RM 116","RM 137","RM 189","RM 429","RM 179","RM 271"];

    for(i=0;i<toshibaImg.length;i++){
        generateProduct(toshibaImg[i], toshibaName[i], toshibaPrice[i], 2);
    }

    var boschImg = ["dryer_bosch2.png","fridge_bosch1.png","fridge_bosch2.png","ghobs_bosch1.png","hdryer_bosch1.png","hdryer_bosch2.png","washer_bosch1.png","washer_bosch3.png","vacuum_bosch1.png"];
    var boschName = ["Vented Dryer 7kg","Side-by-side Fridge","Freestanding Fridge","Domino Gas Hob","Pump Dryer 9kg","Pump Dryer 8kg","Front-Load Washer","Top-Load Washer","Cordless Vacuum"];
    var boschPrice = ["RM 4,388","RM 6,500","RM 7,133","RM 2,750","RM 4,899","RM 4,299","RM 2,475","RM 1,490","RM 599"
];

    for(i=0;i<boschImg.length;i++){
        generateProduct(boschImg[i], boschName[i], boschPrice[i], 3);
    }
}

//DOM product container
function generateProduct(img, proName, proPrice,nth){
    var target = document.getElementsByClassName("pro_image_container")[nth];

    var content = "\
    <div class=\"figcontainer\">\
        <figure class=\"pro_image\">\
            <img src=\"images/"+img+"\" alt=\""+proName+"\">\
        </figure>\
        <div class=\"figpara\">\
            <p class=\"name\">"+proName+"</p>\
            <p class=\"price\">"+proPrice+"</p>\
            <p class=\"enq\">?</p>\
            <button class=\"addCart\">Add to Cart</button>\
        </div>\
    </div>"

    target.innerHTML += content;
}

//To recognise which brand user selected and store in session storage
function subNavigation(){
    var status = false;
    var path = pathPage();
    if(path == "product1.php"){
        bannerBtn(4, "mobileBannerLogo", "mobileDisplayArr");
        var status = true;
    }else if(path == "product2.php"){
        bannerBtn(4, "laptopBannerLogo", "laptopDisplayArr");
        var status = true;
    }else if(path == "product3.php"){
        bannerBtn(5, "wearablesBannerLogo", "wearablesDisplayArr");
        var status = true;
    }else if(path == "product4.php"){
        bannerBtn(4, "appliancesBannerLogo", "appliancesDisplayArr");
        var status = true;
    }
    mainBtn();
    if(localStorage.subNavBtnsClicked!==undefined && localStorage.subNavBtnsClicked && status){
        if(path == "product1.php"){
            updateProduct("mobileDisplayArr", "mobileBannerLogo");
        }else if(path == "product2.php"){
            updateProduct("laptopDisplayArr", "laptopBannerLogo");
        }else if(path == "product3.php"){
            updateProduct("wearablesDisplayArr", "wearablesBannerLogo");
        }else if(path == "product4.php"){
            updateProduct("appliancesDisplayArr", "appliancesBannerLogo");
        }
        localStorage.subNavBtnsClicked = false;
    }
    goToListAllProducts();
}

function goToListAllProducts(){
    for(x=0;x<4;x++){
        ListAllProductsLoop(x);
    }
    activeBannerStyle();
}

function ListAllProductsLoop(n){
    document.getElementsByClassName("subHead")[n].onclick = function() {linkingAllProductsLists(n)};
}

//Filter all products in product page
function linkingAllProductsLists(n){
    if(n == 0){
        arrayTaken = [false,false,false,false];
        storeArray(arrayTaken, "mobileDisplayArr");
        location.href = "product1.php";
    }else if(n == 1){
        arrayTaken = [false,false,false,false];
        storeArray(arrayTaken, "laptopDisplayArr");
        location.href = "product2.php";
    }else if(n == 2){
        arrayTaken = [false,false,false,false,false];
        storeArray(arrayTaken, "wearablesDisplayArr");
        location.href = "product3.php";
    }else if(n == 3){
        arrayTaken = [false,false,false,false];
        storeArray(arrayTaken, "appliancesDisplayArr");
        location.href = "product4.php";
    }
}

//Set events for brands button
function bannerBtn(num, bannerClassName, arrayName){
    document.getElementsByClassName("subHead")[4].onclick = function() {bannerShowAll(arrayName, bannerClassName)};
    for(n=0;n<num;n++){
        bannerLoop(n, bannerClassName, arrayName);
    }
}

//Display all for particular product type
function bannerShowAll(arrayName, bannerClassName){
    var arrayTaken = getArray(arrayName);
    for (let i in arrayTaken) {
        arrayTaken[i] = false;
    }
    storeArray(arrayTaken, arrayName);
    updateProduct(arrayName, bannerClassName);
    activeBannerStyle();
}

function bannerLoop(n,bannerClassName, arrayName){
    document.getElementsByClassName(bannerClassName)[n].onclick = function() {showProductListCurrent(n, arrayName, bannerClassName)};
}

//Display the product brand list selected
function showProductListCurrent(n, arrayName, bannerClassName){
    var arrayTaken = getArray(arrayName);
    if(true){
        addProductList(n, bannerClassName);
        for(var i in arrayTaken){
            arrayTaken[i] = true;
        }
        arrayTaken[n] = false;
        storeArray(arrayTaken, arrayName);
    }
    updateProduct(arrayName, bannerClassName);
    activeBannerStyle();
}

//Set on click events for every brands logo buttons
function mainBtn(){
    for(n=0;n<4;n++){
        mobileLoop(n);
        laptopLoop(n);
        appliancesLoop(n);
    }for(n=0;n<5;n++){
        wearablesLoop(n);
    }
}

function mobileLoop(n){
    document.getElementsByClassName("mobileLogo")[n].onclick = function() {goToProduct(n, "mobileDisplayArr")};
}

function laptopLoop(n){
    document.getElementsByClassName("laptopLogo")[n].onclick = function() {goToProduct(n, "laptopDisplayArr")};
}

function wearablesLoop(n){
    document.getElementsByClassName("wearablesLogo")[n].onclick = function() {goToProduct(n, "wearablesDisplayArr")};
}

function appliancesLoop(n){
    document.getElementsByClassName("appliancesLogo")[n].onclick = function() {goToProduct(n, "appliancesDisplayArr")};
}

//Locate to particular product page
function goToProduct(nth, arrayName){
    if(arrayName=="wearablesDisplayArr"){
        var arrayToStore = [true,true,true,true,true];
    }else{
        var arrayToStore = [true,true,true,true];
    }
    arrayToStore[nth] = false;
    storeArray(arrayToStore, arrayName);
    if(arrayName=="mobileDisplayArr"){
        location.href = "product1.php";
    }else if(arrayName=="laptopDisplayArr"){
        location.href = "product2.php";
    }else if(arrayName=="wearablesDisplayArr"){
        location.href = "product3.php";
    }else if(arrayName=="appliancesDisplayArr"){
        location.href = "product4.php";
    }
    localStorage.subNavBtnsClicked = true;
}

//Update product lists based on user's clicking
function updateProduct(arrayName, bannerClassName){
    var arrayTaken = getArray(arrayName);
    if(arrayName=="wearablesDisplayArr"){
        var nth = 5;
    }else{
        var nth = 4;
    }
    for(n=0;n<nth;n++){
        if(arrayTaken[n]){
            hideProductList(n, bannerClassName);
        }else{
            addProductList(n, bannerClassName);
        }
    }
}

//Hide disselected product brands 
function hideProductList(n, bannerClassName){
    var target = document.getElementsByClassName("brands")[n];
    target.style.display = "none";
    var target = document.getElementsByClassName("pro_image_container")[n];
    target.style.display = "none";
    var target = document.getElementsByClassName(bannerClassName)[n];
    target.className = "normalBanner " + bannerClassName;
}

//Show selected product brands 
function addProductList(n, bannerClassName){
    var target = document.getElementsByClassName("brands")[n];
    target.style.display = "flex";
    var target = document.getElementsByClassName("pro_image_container")[n];
    target.style.display = "block";
    var target = document.getElementsByClassName(bannerClassName)[n];
    target.className = "normalBanner " + bannerClassName + " activeBannerImg";
}

//Styling for selected brand logo
function activeBannerStyle(){
    var normalBannerTarget = document.getElementsByClassName("normalBanner");
    var activeBannerTarget = document.getElementsByClassName("activeBannerImg");
    for(i=0;i<normalBannerTarget.length;i++){
        normalBannerTarget[i].style.border = "5px solid rgb(72, 196, 245)";
    }for(i=0;i<activeBannerTarget.length;i++){
        activeBannerTarget[i].style.borderLeft = "5px dashed rgb(72, 196, 245)";
        activeBannerTarget[i].style.borderRight = "5px solid rgb(0, 89, 253)";
        activeBannerTarget[i].style.borderTop = "5px solid rgb(0, 89, 253)";
        activeBannerTarget[i].style.borderBottom = "5px solid rgb(15, 55, 233)";
    }
}

function activeBannerEffect(){
    var dash = "5px dashed rgb(72, 196, 245)";
    var solid = "5px solid rgb(0, 89, 253)";
    var target = document.getElementsByClassName("activeBannerImg");
    window.setInterval(function(){
        for(i=0;i<target.length;i++){
            if(target[i].style.borderLeft == dash){
                target[i].style.borderLeft = solid;
                target[i].style.borderRight = dash;
            }else{
                target[i].style.borderLeft = dash;
                target[i].style.borderRight = solid;
            }
        }
    }, 1700);
}
/*
//DOM footer for every page
function footer(){
    var content = "\
    <div class=\"container\">\
        <div class=\"backtop\">\
            <p><span class=\"arrow_up\"></span></p>\
        </div>\
        <div id=\"calculatorBtn\">\
            <img src=\"images/calculator_icon.png\" alt=\"Calculator Icon.png\">\
        </div>\
        <div id=\"feedbackBtnContain\"><button id=\"feedbackBtn\">Feedback</button></div>\
        <div class=\"ask\">\
            <img src=\"images/ask_logo.png\" alt=\"Ask Logo\" class=\"asklogo\">\
            <p class=\"caption\">If you have any question or suggestion regarding our Online Store, kindly tell us:</p>\
            <img src=\"images/whatsapp.png\" alt=\"Whatsapp Icon\" class=\"whatsapplogo\">\
            <div class=\"phonenum\">\
                <p class=\"num\">+601002003004</p>\
                <p class=\"numday\">Mon to Sat | 8.30am - 6.30pm</p>\
            </div>\
            <img src=\"images/email.png\" alt=\"Email Icon\" class=\"emaillogo\">\
            <div class=\"email\">\
                <p class=\"email\"><a href=\"mailto:ceronics2020@gmail.com\">ceronics2020@gmail.com</a></p>\
                <p class=\"emailday\">Mon to Sun | 8.30am - 11.30pm</p>\
            </div> \
        </div>\
        <div class=\"product\">\
            <h1>Products</h1>\
            <ul>\
                <li><a href=\"product1.php\">Mobiles</a></li>\
                <li><a href=\"product2.php\">Laptops</a></li>\
                <li><a href=\"product3.php\">Wearables</a></li>\
                <li><a href=\"product4.php\">Appliances</a></li>\
            </ul>\
        </div>\
        <div class=\"info\">\
            <h1>General info</h1>\
            <ul>\
                <li><a href=\"tradein.php\">Trade In</a></li>\
                <li><a href=\"about.php\">About Us</a></li>\
                <li><a href=\"contact.php\">Contact Us</a></li>\
                <li><a href=\"faq.php\">FAQ</a></li>\
                <li><a href=\"terms.php\">Terms of Use</a></li>\
                <li><a href=\"privacy.php\">Privacy Notice</a></li>\
                <li><a href=\"enquiry.php\">Enquiry</a></li>\
                <li><a href=\"disclaimer.php\">Disclaimer</a></li>\
                <li><a href=\"enhancements1.php\">Enhancements 1</a></li>\
                <li><a href=\"enhancements2.php\">Enhancements 2</a></li>\
            </ul>\
        </div>\
        <div class=\"stay_payment\">\
            <div class=\"stay\">\
                <h1>Stay with Us</h1>\
                <ul class=\"socialmedia\">\
                    <li><a href=\"https://www.facebook.com/ceronics.ceronics.9\" target=\"_blank\"><img src=\"images/facebook.png\" alt=\"Facebook Icon\" ></a></li>\
                    <li><a href=\"https://www.instagram.com/ceronics2020/\" target=\"_blank\"><img src=\"images/instagram.png\" alt=\"Instagram Icon\" ></a></li>\
                    <li><a href=\"https://www.youtube.com/channel/UCoFVFNjPMwI8aRqd6pOg5tA?view_as=subscriber\" target=\"_blank\"><img src=\"images/youtube.png\" alt=\"Youtube Icon\" ></a></li>\
                    <li><a href=\"https://twitter.com/Ceronics1\" target=\"_blank\"><img src=\"images/twitter.png\" alt=\"Twitter Icon\" ></a></li>\
                </ul>\
            </div>\
            <div class=\"payment\">\
                <h1>Payment Options</h1>\
                <img src=\"images/payment_logo.png\" alt=\"Payment Logo\">\
            </div>\
        </div>\
    </div>\
    <div class=\"copyright\">\
        <hr>\
        <p>COPYRIGHT &copy; 2020 Ceronics Inc. All rights reserved.</p>\
    </div>"

    document.getElementById("foot").innerHTML = content;
}*/

//Set events for login button
var loginPanelTimer;
function loginBtn(){
    document.getElementById("loginBtn").onclick = function(){checkPhpAccount()};
    document.getElementById("closeLogIn").onclick = function(){closeLoginPanel()};
}

function checkPhpAccount(){
    var loginStatus = document.getElementById("logintxtStatus").innerHTML;
    if(loginStatus=="Log out"){
        location.href = 'logout.php';
    }else{
        showLoginPanel();
    }
}

function showLoginPanel(){
    document.body.style.overflowY = "hidden";
    document.getElementById("loginWindow").style.display = "block";
    var x = -300;
    clearInterval(loginPanelTimer);
    loginPanelTimer = setInterval(function(){ 
        document.getElementById("loginContainer").style.right = x+"%";
        x+=6;
        if(x>0){
            clearInterval(loginPanelTimer);
        }
    }, 0);
}

function closeLoginPanel(){
    var x = 0;
    clearInterval(loginPanelTimer);
    loginPanelTimer = setInterval(function(){ 
        document.getElementById("loginContainer").style.left = x+"%";
        x-=4;
        if(x<-300){
            document.body.style.overflowY = "auto";
            document.getElementById("loginWindow").style.display = "none";
            document.getElementById("loginContainer").style.right = "-300%";
            document.getElementById("loginContainer").style.left = "0%";
            clearInterval(loginPanelTimer);
            location.href = pathPage();
        }
    }, 0);
}

//Set events for sign up button
function signupBtn(){
    document.getElementById("signupBtn").onclick = function(){showSignUpPanel()};
    document.getElementById("closeSignUp").onclick = function(){closeSignUpPanel()};
    //document.getElementById("loginCheckBoxContainer").onclick = function(){checkedLoginCheckBox()};
}

//Show and display sign up panel
var signupPanelTimer;
function showSignUpPanel(){
    document.body.style.overflowY = "hidden";
    document.getElementById("signupWindow").style.display = "block";
    var x = -300;
    clearInterval(signupPanelTimer);
    signupPanelTimer = setInterval(function(){
        document.getElementById("signUpForm").style.left = x+"%";
        x+=6;            
        if(x>0){
            clearInterval(signupPanelTimer);
        }
    }, 0);
}

//Close and hide sign up panel
function closeSignUpPanel(){
    var x = 0;
    clearInterval(signupPanelTimer);
    signupPanelTimer = setInterval(function(){ 
        document.getElementById("signUpForm").style.right = x+"%";
        x-=4;
        if(x<-300){
            document.body.style.overflowY = "auto";
            document.getElementById("signupWindow").style.display = "none";
            document.getElementById("signUpForm").style.right = "0%";
            document.getElementById("signUpForm").style.left = "-300%";
            clearInterval(signupPanelTimer);
            location.href = pathPage();
        }
    }, 0);
}
/* 
//Styling for login check box
function checkedLoginCheckBox(){
    var target = document.getElementById("loginCheckBox");
    if(target.style.backgroundColor != "rgb(0, 0, 202)"){
        target.style.backgroundColor = "rgb(0, 0, 202)";
    }else{
        target.style.backgroundColor = "transparent";
    }
} */

//Moving button effects in index.php
function homePageMovingBtn(){    
    if(pathPage()=="index.php"){
        homePageShopNowBtnEvent();

        var signUpButton = document.getElementById("signUpNowBtn");
        signUpButton.onclick = function (){showSignUpPanel()}
        signUpButton.onmouseover = function (){clearInterval(upDownInterval)}
        signUpButton.onmouseout = function (){setIntervalUpdownSignUpBtn(signUpButton)}
        setIntervalUpdownSignUpBtn(signUpButton);

        var shopNowButton0 = document.getElementsByClassName("shopNowBtn")[0];
        shopNowButton0.onmouseover = function (){clearInterval(scaleRightInterval0)}
        shopNowButton0.onmouseout = function (){setIntervalScaleShopNowBtn0(shopNowButton0)}
        setIntervalScaleShopNowBtn0(shopNowButton0);

        var shopNowButton1 = document.getElementsByClassName("shopNowBtn")[1];
        shopNowButton1.onmouseover = function (){clearInterval(scaleRightInterval1)}
        shopNowButton1.onmouseout = function (){setIntervalScaleShopNowBtn1(shopNowButton1)}
        setIntervalScaleShopNowBtn1(shopNowButton1);

        var shopNowButton2 = document.getElementsByClassName("shopNowBtn")[2];
        shopNowButton2.onmouseover = function (){clearInterval(scaleRightInterval2)}
        shopNowButton2.onmouseout = function (){setIntervalScaleShopNowBtn2(shopNowButton2)}
        setIntervalScaleShopNowBtn2(shopNowButton2);

        var shopNowButton3 = document.getElementsByClassName("shopNowBtn")[3];
        shopNowButton3.onmouseover = function (){clearInterval(scaleRightInterval3)}
        shopNowButton3.onmouseout = function (){setIntervalScaleShopNowBtn3(shopNowButton3)}
        setIntervalScaleShopNowBtn3(shopNowButton3);
    }
}

function homePageShopNowBtnEvent(){
    for(var x=0;x<4;x++){
        homePageShopNowBtnEventLoop(x);
    }
}

function homePageShopNowBtnEventLoop(n){
    console.log(n)
    document.getElementsByClassName("shopNowBtn")[n].onclick = function() {linkingAllProductsLists(n)};
}

function setIntervalUpdownSignUpBtn(signUpButton){
    upDownInterval = setInterval(doUpDown, 0);

    var topValue = 0
    var minusStatus = false
    function doUpDown(){
        signUpButton.style.top = topValue+"px";
        if(topValue<50 && !minusStatus){
            topValue += 0.8
        }else{
            minusStatus = true
        }if(minusStatus){
            topValue -= 0.8
            if(topValue<-50){
                minusStatus = false
            }
        }
    }
}

function setIntervalScaleShopNowBtn0(shopNowButton){
    scaleRightInterval0 = setInterval(doScale, 0);

    var scaleValue = 0.6
    var minusStatus = false
    function doScale(){
        shopNowButton.style.transform = "scale("+scaleValue+")";
        if(scaleValue<0.9 && !minusStatus){
            scaleValue += 0.003
        }else{
            minusStatus = true
        }if(minusStatus){
            scaleValue -= 0.003
            if(scaleValue<0.6){
                minusStatus = false
            }
        }
    }
}

function setIntervalScaleShopNowBtn1(shopNowButton){
    scaleRightInterval1 = setInterval(doScale, 0);

    var scaleValue = 0.6
    var minusStatus = false
    function doScale(){
        shopNowButton.style.transform = "scale("+scaleValue+")";
        if(scaleValue<0.9 && !minusStatus){
            scaleValue += 0.003
        }else{
            minusStatus = true
        }if(minusStatus){
            scaleValue -= 0.003
            if(scaleValue<0.6){
                minusStatus = false
            }
        }
    }
}

function setIntervalScaleShopNowBtn2(shopNowButton){
    scaleRightInterval2 = setInterval(doScale, 0);

    var scaleValue = 0.6
    var minusStatus = false
    function doScale(){
        shopNowButton.style.transform = "scale("+scaleValue+")";
        if(scaleValue<0.9 && !minusStatus){
            scaleValue += 0.003
        }else{
            minusStatus = true
        }if(minusStatus){
            scaleValue -= 0.003
            if(scaleValue<0.6){
                minusStatus = false
            }
        }
    }
}

function setIntervalScaleShopNowBtn3(shopNowButton){
    scaleRightInterval3 = setInterval(doScale, 0);

    var scaleValue = 0.6
    var minusStatus = false
    function doScale(){
        shopNowButton.style.transform = "scale("+scaleValue+")";
        if(scaleValue<0.9 && !minusStatus){
            scaleValue += 0.003
        }else{
            minusStatus = true
        }if(minusStatus){
            scaleValue -= 0.003
            if(scaleValue<0.6){
                minusStatus = false
            }
        }
    }
}

//Set events for feedback button
function feedbackBtn(){
    feedbackRatingClickingNum = 0;
    var feedbackBtn = document.getElementById("feedbackBtn");
    feedbackBtn.onclick = function(){showFeedbackPanel()};
    document.getElementById("closeFeedback").onclick = function(){closeFeedbackPanel()};
    //document.getElementById("feedbackSubmit").onclick = function(){return doFeedbackSubmit();};

    for(i=1;i<=5;i++){
        rateEmojiLoop(i);
    }

    var darkblue = "rgb(46, 46, 228)";
    var oriblue = "rgb(43, 196, 243)";
    setInterval(function(){ 
        if(feedbackBtn.style.borderRightColor == darkblue){
            feedbackBtn.style.borderTopColor = darkblue;
            feedbackBtn.style.borderBottomColor = darkblue;
            feedbackBtn.style.borderRightColor = oriblue;
        }else{
            feedbackBtn.style.borderTopColor = oriblue;
            feedbackBtn.style.borderBottomColor = oriblue;
            feedbackBtn.style.borderRightColor = darkblue;
        }
    }, 1000);

    //feedbackBtnAvailable(feedbackBtn);
}

//Set clicking events for rating emoji in feedback panel
function rateEmojiLoop(i){
    document.getElementById("rateEmoji"+i).onclick = function(){feedbackRatingClicked(i)};
}

//Show and display feedback panel
function showFeedbackPanel(){
    var feedbackPanel = document.getElementById("feedbackForm");
    var feedbackBtn = document.getElementById("feedbackBtn");

    feedbackBtn.style.transition = "0s";
    var leftBtnValue = -70;
    var hideFeedbackBtnInterval = setInterval(function(){ 
        feedbackBtn.style.left = leftBtnValue + "px";
        if(leftBtnValue > -200){
            leftBtnValue -= 1.2; 
        }else{
            feedbackBtn.style.transition = "all 0.8s ease";
            clearInterval(hideFeedbackBtnInterval);
        }
    }, 0);

    setTimeout(function(){ 
        var leftValue = 100;
        var showFeedbackInterval = setInterval(function(){ 
            feedbackPanel.style.left = leftValue + "vw";
            if(leftValue > 5){
                leftValue -= 1.8; 
            }else{
                clearInterval(showFeedbackInterval);
            }
        }, 0);
    }, 300);

    
}

//Close and hide the feedback panel
function closeFeedbackPanel(){
    for(i=1;i<=5;i++){
        document.getElementById("rateEmoji"+i).style.transform = "scale(1)";
    }feedbackRatingClickingNum = 0;

    var feedbackPanel = document.getElementById("feedbackForm");
    var feedbackBtn = document.getElementById("feedbackBtn");

    var bottomValue = 100;
    var closeFeedbackInterval = setInterval(function(){ 
        feedbackPanel.style.bottom = bottomValue + "px";
        if(bottomValue < 2000){
            bottomValue += 15; 
        }else{
            feedbackPanel.style.left = "100vw";
            feedbackPanel.style.bottom = "150px";
            clearInterval(closeFeedbackInterval);
        }
    }, 0);

    var leftBtnValue = -200;
    var hideFeedbackBtnInterval = setInterval(function(){ 
        feedbackBtn.style.left = leftBtnValue + "px";
        if(leftBtnValue < -70){
            leftBtnValue += 1.2; 
        }else{
            clearInterval(hideFeedbackBtnInterval);
        }
    }, 0);
}

function doFeedbackSubmit(){
    var selectionStatus = false;
    for(i=1;i<=5;i++){
        if(document.getElementById("rateEmoji"+i).style.transform == "scale(1.2)"){
            selectionStatus = true;
            break;
        }
    }
    if(selectionStatus){
        var ratingHiddenInput = "";
        for(i=1;i<=5;i++){
            if(document.getElementById("rateEmoji"+i).style.transform == "scale(1.2)"){
                ratingHiddenInput += "<input type='hidden' name='hiddenFeed" + i + "' value='1'>";
            }else{
                ratingHiddenInput += "<input type='hidden' name='hiddenFeed" + i + "' value=''>";
            }
        }
        ratingHiddenInput += "<input type='hidden' name='hiddenFeedComment' value='" + document.getElementById("feedbackComment").value + "'>";
        document.getElementById("feedbackHiddenInputs").innerHTML = ratingHiddenInput;
        return true;
    }
    else{
        messageBox("Please select a rating emoji<br>before submitting!");
        return false;
    }
}

//Styling rating emoji in feedback panel
function feedbackRatingClicked(n){
    if (feedbackRatingClickingNum != n){
        for(i=1;i<=5;i++){
            if(i == n){
                document.getElementById("rateEmoji"+i).style.transform = "scale(1.2)";
            }else{
                document.getElementById("rateEmoji"+i).style.transform = "scale(0.8)";
            }
        }feedbackRatingClickingNum = n;
    }else{
        for(i=1;i<=5;i++){
            document.getElementById("rateEmoji"+i).style.transform = "scale(1)";
        }feedbackRatingClickingNum = 0;
    }
}
/*
//Check feedback button availability 
function feedbackBtnAvailable(feedbackBtn){
    if(sessionStorage.feedbackBtnSubmitted!==undefined){
        if(sessionStorage.feedbackBtnSubmitted){
            sessionStorage.removeItem("feedbackBtnSubmitted");
            messageBox("Feedback submitted successfully!<br>The feedback button <br>will be available after 1 minute");
            sessionStorage.hideFeedbackBtn = true;
        }
    }if(sessionStorage.hideFeedbackBtn){
        feedbackBtn.style.display = "none";
        feedbackBtn.style.left = "-200px";
        feedbackBtnAvailabletimer = setInterval(function(){
            var targetTime = parseInt(sessionStorage.timeNow)+60000;
            if(targetTime < Date.now()){
                clearInterval(feedbackBtnAvailabletimer);
                feedbackBtn.style.display = "block";
                sessionStorage.hideFeedbackBtn = false;
                var leftBtnValue = -200;
                var hideFeedbackBtnInterval = setInterval(function(){ 
                    feedbackBtn.style.left = leftBtnValue + "px";
                    if(leftBtnValue < -70){
                        leftBtnValue += 1.4; 
                    }else{
                        clearInterval(hideFeedbackBtnInterval);
                    }
                }, 0);
            }
        }, 1000);
    }
}*/

//////////////////////////////////////////////////
function validateEnquiryForm(){
	var allStatus = false;
	gMessage = ""; 
	var fnameStatus = checkfName("enqfname");
	var lnameStatus = checklName("enqlname");
	var emailStatus = checkEmail("enqemail"); 
	var phonenumStatus = checkPhoneNum("enqtel");
	var addressStatus = checkAddress("enqstreetadd");
	var cityStatus = checkCity("enqcity");
	var stateStatus = checkState("enqstate");
	var postcodeStatus = checkPostcode("enqpostcode");
	var subjectSelectionStatus = checkSubjectSelection();

    if (fnameStatus&&lnameStatus&&emailStatus&&phonenumStatus&&addressStatus&&cityStatus&&postcodeStatus&&stateStatus&&subjectSelectionStatus){
        allStatus = true;
        saveEnquiryDetail();
    }
    else{
        messageBox(gMessage);
        gMessage = ""; 
        allStatus = false;
    }
    return allStatus;
}

function checkfName (idNaming) {
    var status = true;
    var input = document.getElementById(idNaming).value;
    var pattern = /^[a-zA-Z\s]+$/;

    if (input == ""){
        gMessage += "First name cannot be empty!<br>"
        var status = false; 
    }
    else if (!pattern.test(input)){
        gMessage += "First name include alpha characters only!<br>"
        var status = false;
    }
    else if(input.length > 25){
        gMessage += "Maximum characters of first name is 25!<br>"
        var status = false;
    }
    return status;
}

function checklName (idNaming) {
    var status = true;
    var input = document.getElementById(idNaming).value;
    var pattern = /^[a-zA-Z\s]+$/;

    if (input == ""){
        gMessage += "Last name cannot be empty!<br>"
        var status = false; 
    }
    else if(!pattern.test(input)){
        gMessage += "Last name include alpha characters only!<br>"
        var status = false;
    }
    else if(input.length > 25){
        gMessage += "Maximum characters of last name is 25!<br>"
        var status = false;
    }
    return status;
}

function checkEmail(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).value;
    var pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-za-zA-Z0-9.-]{1,4}$/;
    
    if (input == ""){
        gMessage += "Email cannot be empty!<br>";
        var status = false;
    }
    else if(!pattern.test(input)){
        gMessage += "Please enter a valid email address!<br>";
        var status = false;
    }
    return status;	
}

function checkPhoneNum(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).value;

    var countDash = 0;
    for(x in input){
        if(input[x]=="-"){
            countDash+=1;
        }
    }
    
    if (input == ""){
        gMessage += "Phone no. cannot be empty! <br>";
        var status = false;
    }else if (input.search("-")!= 3){
        gMessage += "Dash (-) of phone no. must be at 4th digit! <br>";
        var status = false;
    }else if(countDash!=1){
        gMessage += "Phone no. must include 1 dash (-) only<br>";
        var status = false;
    }else if (input.length < 9){
        gMessage += "Minimum digits of phone no. is 9! <br>";
        var status = false;
    }else if (input.length > 11){//maxlength is 11 as it include the dash (-)
        gMessage += "Maximum digits of phone no. is 10! <br>";
        var status = false;
    }else if ((isNaN(input.slice(0,2)))||(isNaN(input.slice(4,12)))){
        gMessage += "Phone no. must include number only! <br>";
        var status = false;
    }
    return status;
}

function checkAddress(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).value;
    
    if (input == ""){
        gMessage += "Address cannot be empty! <br>";
        var status = false;
    }else if(input.length > 40){
        gMessage += "Maximum characters of address is 40! <br>";
        var status = false;
    }
    return status;
}

function checkCity(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).value;
    
    if (input == ""){
        gMessage += "City cannot be empty! <br>";
        var status = false;
    }else if(input.length > 12){
        gMessage += "Maximum characters of city is 12! <br>";
        var status = false;
    }
    return status;
}

function checkState(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).selectedIndex;
    
    if (input == 0){
        gMessage += "Please select a state! <br>";
        var status = false;
    }
    return status;
}

function checkPostcode(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).value;
    var pattern = /^[0-9]*$/;
    
    if (input == ""){
        gMessage += "Postcode cannot be empty! <br>";
        var status = false;
    }
    else if (!pattern.test(input)){
        gMessage += "Postcode must include numbers only! <br>";
        var status = false;
    }
    else if (input.length != 5){//maxlength is 11 as it include the dash (-)
        gMessage += "Postcode restricted to 5 digits! <br>";
        var status = false;
    }
    return status;
}

function checkSubjectSelection(){
    var status = true;
    var input1 = document.getElementById("product_type_selection").selectedIndex;
    var input2 = document.getElementById("product_brand_selection").selectedIndex;
    var input3 = document.getElementById("product_name_selection").selectedIndex;
    
    if ((input1 == 0)||(input2 == 0)||(input3 == 0)){
        gMessage += "Please select product subject! <br>";
        var status = false;
    }
    return status;
}


        /* 
        if(data){
            if(localStorage.accountArray!==undefined){
                var accArray = getArray("accountArray");
                var usernameInput = document.getElementById("signUpUsername").value;
                for(x in accArray){
                    if (String(accArray[x])===String(usernameInput)){
                        var sameAccount = true;
                        break;
                    }else{
                        var sameAccount = false;
                }}
            }else{
                storeSignUpAccount();
            }if(sameAccount!==undefined){
                if(sameAccount){
                    messageBox("The username had been used.<br>Please use other username.");
                    var data = false;
                }else{
                    storeSignUpAccount();
            }}
            localStorage.signUpStatus = true;
        }return data;
    };
    if(localStorage.signUpStatus!==undefined){
        if(localStorage.signUpStatus){
            messageBox("Sign up successfully!<br>\
            Log in successfully!<img src=\"images/green_tick.png\" alt=\"Green Tick Icon\">");
            localStorage.removeItem("signUpStatus");
    }}
}

function storeSignUpAccount(){
    var usernameInput = document.getElementById("signUpUsername").value;
    var passwordInput = document.getElementById("signUppwd1").value;
    
    if(localStorage.accountArray!==undefined){
        var arrayUsernameTaken = getArray("accountArray");
    }else{
        var arrayUsernameTaken = new Array();
    }
    arrayUsernameTaken[arrayUsernameTaken.length] = String(usernameInput);
    storeArray(arrayUsernameTaken, "accountArray");

    if(localStorage.passwordArray!==undefined){
        var arrayPasswordTaken = getArray("passwordArray");
    }else{
        var arrayPasswordTaken = new Array();
    }
    arrayPasswordTaken[arrayPasswordTaken.length] = String(passwordInput);
    storeArray(arrayPasswordTaken, "passwordArray");
} */

function validateSignUpForm(){
	var allStatus = false;
	gMessage = ""; 
	var usernameStatus = checkUsername("signUpUsername");
	var fullNameStatus = checkfullname("signUpFullname");
	var pwd1Status = checkPWD1("signUpPwd1");
	var pwd2Status = checkPWD2("signUpPwd1","signUpPwd2");
	var addressStatus = checkAddress("signUpStreetadd");
    var cityStatus = checkCity("signUpCity");
    var stateStatus = checkState("signUpState");
	var postcodeStatus = checkPostcode("signUpPostcode");
	var emailStatus = checkEmail("signUpEmail"); 
	var phonenumStatus = checkPhoneNum("signUpPhone");
	var birthDateStatus = checkBirthDate("signUpBirthDate");
	var genderStatus = checkGender("signUpGender");

	if (usernameStatus&&fullNameStatus&&pwd1Status&&pwd2Status&&emailStatus&&phonenumStatus&&addressStatus&&cityStatus&&stateStatus&&postcodeStatus&&birthDateStatus&&genderStatus){
        allStatus = true;
	}
	else{
        messageBox(gMessage);
		gMessage = ""; 
		allStatus = false;
	}
	return allStatus;
}

function checkfullname(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).value;
    var pattern = /^[a-zA-Z\s]+$/;

    if (input == ""){
        gMessage += "Full name cannot be empty!<br>"
        var status = false; 
    }
    else if (!pattern.test(input)){
        gMessage += "Full name include alpha characters only!<br>"
        var status = false;
    }
    else if(input.length > 25){
        gMessage += "Maximum characters of full name is 25!<br>"
        var status = false;
    }
    return status;
}

function checkPWD1(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).value;
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    
    if (input == ""){
        gMessage += "Password cannot be empty! <br>"
        var status = false;
    }else if (input.length < 6){
        gMessage += "Password must contain minimum 6 characters! <br>"
        var status = false;
    }else if (!pattern.test(input)){
        gMessage += "Your password must include numbers, uppercase and lowercase letters! <br>"
        var status = false;
    }
    return status;
}

function checkPWD2(idNaming1,idNaming2){
    var status = true;
    var password1 = document.getElementById(idNaming1).value;
    var password2 = document.getElementById(idNaming2).value;
    if (password1 != password2){
        gMessage += "Password does not match! <br>"
        var status = false;
    }
    return status
}

function checkBirthDate(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).value;

    if (input == ""){
        gMessage += "Please select your birth date! <br>"
        var status = false;
    }
    return status;
}

function checkGender(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).value;

    if (input == ""){
        gMessage += "Please select your gender! <br>"
        var status = false;
    }
    return status;
}
/* 
function logInSubmitBtn(){
    document.getElementById("loginSubmit").onclick = function(){
        var data = validateLogInForm();
        if(data){
            if(!dologInAccount()){
                return false;
            }
            localStorage.logInStatus = true;
        }return data;
    };
    if(localStorage.logInStatus!==undefined){
        if(localStorage.logInStatus){
            messageBox("Log in successfully! <img src=\"images/green_tick.png\" alt=\"Green Tick Icon\">");
            localStorage.removeItem("logInStatus");
    }}
}

function dologInAccount(){
    var usernameInput = document.getElementById("loginUsername").value;
    var passwordInput = document.getElementById("loginPwd").value;

    var accArr = getArray("accountArray");
    var pwArr = getArray("passwordArray");

    for(x in accArr){
        if(accArr[x]==usernameInput){
            if(pwArr[x]==passwordInput){
                return true;
            }else{
                messageBox("Wrong Password!");
                return false;
            }
        }else{
            messageBox("Username not sign up!");
            return false;
        }
    }
} */

function validateLogInForm(){
    var allStatus = false;
	gMessage = "";
	var usernameStatus = checkUsername("loginUsername");
	var loginPwStatus = checkPWD1("loginPwd");

	if (usernameStatus&&loginPwStatus){
		allStatus = true;
	}
	else{
		messageBox(gMessage);
		gMessage = ""; 
		allStatus = false;
	}
	return allStatus;
}

function checkUsername(idNaming){
    var status = true;
    var input = document.getElementById(idNaming).value;

    if (input == ""){
        gMessage += "Username cannot be empty! <br>"
        var status = false;
    }
    return status;
}

////////////////////////////////////////////
function generateProductTypeSelection(){
    if(pathPage()=="enquiry.php"){
        var productTypeSelectionArray = ["Mobiles","Laptops","Wearables","Appliances"];
        var productTypeValueSelectionArray = ["mobiles","laptops","wearables","appliances"];
        for(x in productTypeSelectionArray){
            document.getElementById("product_type_selection").innerHTML += "<option value='"+productTypeValueSelectionArray[x]+"'>"+productTypeSelectionArray[x]+"</option>";
        }
    }
}

//Adrian added a new function for enquiry.php to prompt user to select the product type
function enquirySelection(){
    document.getElementById("product_name_container").style.display = "none";
    document.getElementById("product_brand_container").style.display = "block";
    var productTypes = document.getElementById("product_type_selection");
    var type = productTypes.options[productTypes.selectedIndex].value;
    product_brand_selection(type);
    subjectTitle("-Select the selection above-");
    sessionStorage.removeItem("name_product");
}

//Prompt user for product brand
function product_brand_selection(type){
    var brand = document.getElementById("product_brand_container");
    var mobileBrandArr = ["Apple","Samsung","Huawei","Oppo"];
    var laptopBrandArr = ["Asus","Acer","Msi","Lenovo"];
    var wearablesBrandArr = ["Apple","Samsung","Huawei","Fossil","Mobvoi"];
    var appliancesBrandArr = ["Samsung","Electrolux","Toshiba","Bosch"];

    var brandSelHead = "Product Brand: <span class=\"formdot\">*</span>\
                     <select name=\"productBrand\" class=\"product\" id=\"product_brand_selection\" onchange=\"product_brand_check()\">\
                     <option disabled selected value=\'\'>- Select -</option>"


    if(type == "mobiles"){
        var mobileOptions = ""
        for(x in mobileBrandArr){
            mobileOptions += "<option id=\""+mobileBrandArr[x]+"Opt\" value = \""+mobileBrandArr[x]+"\">"+mobileBrandArr[x]+"</option>"
        }
        var content = brandSelHead + mobileOptions + "</select>";
    }
    else if(type == "laptops"){
        var laptopOptions = ""
        for(x in laptopBrandArr){
            laptopOptions += "<option id=\""+laptopBrandArr[x]+"Opt\"  value = \""+laptopBrandArr[x]+"\">"+laptopBrandArr[x]+"</option>"
        }
        var content = brandSelHead + laptopOptions + "</select>";
    }
    else if(type == "wearables"){
        var wearableOptions = ""
        for(x in wearablesBrandArr){
            wearableOptions += "<option id=\""+wearablesBrandArr[x]+"Opt\"  value = \""+wearablesBrandArr[x]+"\">"+wearablesBrandArr[x]+"</option>"
        }
        var content = brandSelHead + wearableOptions + "</select>";
    }
    else if(type =="appliances"){
        var appliancesOptions = ""
        for(x in appliancesBrandArr){
            appliancesOptions += "<option id=\""+appliancesBrandArr[x]+"Opt\"  value = \""+appliancesBrandArr[x]+"\">"+appliancesBrandArr[x]+"</option>"
        }
        var content = brandSelHead + appliancesOptions + "</select>";
    }else{
        var content = brandSelHead + "" + "</select>";
    }
    brand.innerHTML = content ;
    sessionStorage.productTypes = type;
}

//Check if any product brand is selected
function product_brand_check(){
    var productBrands = document.getElementById("product_brand_selection");
    var brand = productBrands.options[productBrands.selectedIndex].value;
    product_name_selection(brand, sessionStorage.productTypes);
    subjectTitle("-Select the selection above-");
}

//For user select product name
function product_name_selection(brand, type){
    document.getElementById("product_name_container").style.display = "block";
    var name = document.getElementById("product_name_container");
    var nameSelHead = "Product Name: <span class=\"formdot\">*</span>\
    <select name=\"productName\" class=\"product\" id=\"product_name_selection\" onchange=\"product_name_check()\">\
    <option disabled selected value=\'\'>- Select -</option>"

    if(type == "mobiles"){
        var content = mobileNameOptionFunc(brand, nameSelHead);
    }
    else if(type == "laptops"){
        var content = laptopNameOptionFunc(brand, nameSelHead);
    }
    else if(type == "wearables"){
        var content = wearablesNameOptionFunc(brand, nameSelHead);
    }
    else if(type =="appliances"){
        var content = appliancesNameOptionFunc(brand, nameSelHead);
    }else{
        var content = nameSelHead + "" + "</select>";
    }

    name.innerHTML = content; 
}

function mobileNameOptionFunc(brand, nameSelHead){
    if (brand == "Apple"){
        var appleName = ["iPhone 11 Pro Max","iPhone 11 Pro","iPhone 11","iPhone XS Max","iPhone XS","iPhone XR","iPhone X","iPhone 8 Plus","iPhone 8","iPhone 7 Plus","iPhone 7","iPhone 6s Plus"];
        var applevalue = ""
        for(var i = 0; i < appleName.length; i++){
            applevalue += "<option id=\""+appleName[i].replace(/\s/g,'')+"Name\" value = \""+appleName[i]+"\" >" + appleName[i] + "</option\>"
        }
        var content = nameSelHead + applevalue + "</select>"
    }
    else if (brand == "Samsung"){
        var samsungName = ["Galaxy S20 Ultra","Galaxy S20+","Galaxy S20","Note 10+","Note 10","Note 10 Lite","Note 9","Galaxy S10+","Galaxy S10","Galaxy S9+","Galaxy S9","Galaxy A80","Galaxy A70","Galaxy A50","Galaxy A30"];
        var samsungvalue = ""
        for(var i = 0; i < samsungName.length; i++){
            samsungvalue += "<option id=\""+samsungName[i].replace(/\s/g,'')+"Name\" value = \"" + samsungName[i] + "\">" + samsungName[i] + "</option>"
        }
        var content = nameSelHead + samsungvalue + "</select>"
    }
    else if (brand == "Huawei"){
        var huaweiName = ["Huawei P40 Pro+"," Huawei P40 Pro","Huawei P40","Huawei P30 Pro","Huawei P30","Huawei Mate 30+","Huawei Mate 30","Huawei Mate 20+","Huawei Mate 20","Huawei Mate 10","Huawei Nova 7i","Huawei Nova 6i","Huawei Nova 5i","Huawei Nova 4i","Huawei Nova 3i","Huawei Nova 2i"];
        var huaweivalue = ""
        for(var i = 0; i < huaweiName.length; i++){
            huaweivalue += "<option id=\""+huaweiName[i].replace(/\s/g,'')+"Name\" value = \"" + huaweiName[i] + "\">" + huaweiName[i] + "\<\/option\>"
        }
        var content = nameSelHead + huaweivalue + "</select>"
    }
    else if (brand == "Oppo"){
        var oppoName = ["Oppo Find X2 Pro","Oppo Find X2","Oppo Find X","Oppo Reno 2+","Oppo Reno 2","Oppo Reno","Oppo A91","Oppo A9","Oppo A5","Oppo A3"];
        var oppovalue = ""
        for(var i = 0; i < oppoName.length; i++){
            oppovalue += "<option id=\""+oppoName[i].replace(/\s/g,'')+"Name\" value = \"" + oppoName[i] + "\">" + oppoName[i] + "\<\/option\>"
        }
        var content = nameSelHead + oppovalue + "</select>"
    }return content;
}

function laptopNameOptionFunc(brand, nameSelHead){
    if (brand == "Asus"){
        var asusName = ["Asus Vivo book","Asus Zenbook","Asus ZenBook Pro","Asus Classic","Asus VivoBook"];
        var asusvalue = ""
        for(var i = 0; i < asusName.length; i++){
            asusvalue += "<option id=\""+asusName[i].replace(/\s/g,'')+"Name\" value = \"" + asusName[i] + "\">" + asusName[i] + "\<\/option\>"
        }
        var content = nameSelHead + asusvalue + "</select>"
    }
    else if (brand == "Acer"){
        var acerName = ["Acer Swift 3","Acer Espire 15","Acer Swift 7","Acer Aspire 16","Acer Swift 7","Acer Swift 7 Pro"];
        var acervalue = ""
        for(var i = 0; i < acerName.length; i++){
            acervalue += "<option id=\""+acerName[i].replace(/\s/g,'')+"Name\" value = \"" + acerName[i] + "\">" + acerName[i] + "\<\/option\>"
        }
        var content = nameSelHead + acervalue + "</select>"
    }
    else if (brand == "Msi"){
        var msiName = ["MSI Modern","MSI GF63","MSI GL63","MSI Classic","MSI Classic Pro","MSI Prestige"];
        var msivalue = ""
        for(var i = 0; i < msiName.length; i++){
            msivalue += "<option id=\""+msiName[i].replace(/\s/g,'')+"Name\" value = \"" + msiName[i] + "\">" + msiName[i] + "\<\/option\>"
        }
        var content = nameSelHead + msivalue + "</select>"
    }
    else if (brand == "Lenovo"){
        var lenovoName = ["Lenovo Legion Y520","Lenovo Legion Y530","Lenovo Yogapad","Lenovo Ideapad Pro","Lenovo CarbonPad"];
        var lenovovalue = ""
        for(var i = 0; i < lenovoName.length; i++){
            lenovovalue += "<option id=\""+lenovoName[i].replace(/\s/g,'')+"Name\" value = \"" + lenovoName[i] + "\">" + lenovoName[i] + "\<\/option\>"
        }
        var content = nameSelHead + lenovovalue + "</select>"
    }return content;
}

function wearablesNameOptionFunc(brand, nameSelHead){
    if (brand == "Apple"){
        var appleName = ["Series 5 Space Gray","Series 5 Silver","Series 5 Gold","Nike Series 5 Gray","Nike Series 5 Silver"];
        var applevalue = ""
        for(var i = 0; i < appleName.length; i++){
            applevalue += "<option id=\""+appleName[i].replace(/\s/g,'')+"Name\" value = \"" + appleName[i] + "\">" + appleName[i] + "\<\/option\>"
        }
        var content = nameSelHead + applevalue + "</select>"
    }
    else if (brand == "Samsung"){
        var samsungName = ["Galaxy Midnight Black","Galaxy Rose Gold","Galaxy Active 2 Black","Galaxy Active 2 Gold","Galaxy Active 2 Pink","Galaxy Active 2 Black","Galaxy Fit Silver","Galaxy Fit Black","Galaxy Fit(e) Black","Galaxy Fit(e) White"];
        var samsungvalue = ""
        for(var i = 0; i < samsungName.length; i++){
            samsungvalue += "<option id=\""+samsungName[i].replace(/\s/g,'')+"Name\" value = \"" + samsungName[i] + "\">" + samsungName[i] + "\<\/option\>"
        }
        var content = nameSelHead + samsungvalue + "</select>"
    }
    else if (brand == "Huawei"){
        var huaweiName = ["GT 2 Brown Leather","GT 2 Lake Cyan","GT 2e Green","GT 2 Refined Gold","GT 2 Matte Black","Band 3 Black","Talkband B5 Black","Talkband B5 Brown"];
        var huaweivalue = ""
        for(var i = 0; i < huaweiName.length; i++){
            huaweivalue += "<option id=\""+huaweiName[i].replace(/\s/g,'')+"Name\" value = \"" + huaweiName[i] + "\">" + huaweiName[i] + "\<\/option\>"
        }
        var content = nameSelHead + huaweivalue + "</select>"
    }
    else if (brand == "Fossil"){
        var fossilName = ["Gen 5 Carlyle Black","Gen 5 Garett Silver","Gen 5 Garett Black","Gen 5 Julianna Gold","Gen 5 Julianna Smoke"];
        var fossilvalue = ""
        for(var i = 0; i < fossilName.length; i++){
            fossilvalue += "<option id=\""+fossilName[i].replace(/\s/g,'')+"Name\" value = \"" + fossilName[i] + "\">" + fossilName[i] + "\<\/option\>"
        }
        var content = nameSelHead + fossilvalue + "</select>"
    }
    else if (brand == "Mobvoi"){
        var mobvoiName = ["TicWatch Pro","TicWatch S2","TicWatch Sport","TicWatch E2","TicWatch C2"];
        var mobvoivalue = ""
        for(var i = 0; i < mobvoiName.length; i++){
            mobvoivalue += "<option id=\""+mobvoiName[i].replace(/\s/g,'')+"Name\" value = \"" + mobvoiName[i] + "\">" + mobvoiName[i] + "\<\/option\>"
        }
        var content = nameSelHead + mobvoivalue + "</select>"
    }return content;
}

function appliancesNameOptionFunc(brand, nameSelHead){
    if (brand == "Samsung"){
        var samsungName = ["Oven","Microwave","Air Purifier","Smart Air Purifier","Combo Washer","Powerstick Jet"];
        var samsungvalue = ""
       for(var i = 0; i < samsungName.length; i++){
           samsungvalue += "<option id=\""+samsungName[i].replace(/\s/g,'')+"Name\" value = \"" + samsungName[i] + "\">" + samsungName[i] + "\<\/option\>"
       }
       var content = nameSelHead + samsungvalue + "</select>"
    }
    else if (brand == "Electrolux"){
       var electroluxName = ["1.5L Jug Blender","1.75L Jug Blender","1.75L Suction Blender","EasyLine Kettle","EasySense Kettle","EasyLine Rice Cooker","Rice Cooker","Bread Toaster","Oven Toaster","Water Heater 700","EcoTouch Heater","SilentPump Heater"];
       var electroluxvalue = ""
       for(var i = 0; i < electroluxName.length; i++){
           electroluxvalue += "<option id=\""+electroluxName[i].replace(/\s/g,'')+"Name\" value = \"" + electroluxName[i] + "\">" + electroluxName[i] + "\<\/option\>"
       }
       var content = nameSelHead + electroluxvalue + "</select>"
    }
    else if (brand == "Toshiba"){
       var toshibaName = ["12-inch Wall Fan","16-inch Wall Fan","16-inch Stand Fan","Electric Kettle","Multi-Cooker","Grill Microwave Oven","1.8L Rice Cooker","Vacuum Cleaner"];
       var toshibavalue = ""
       for(var i = 0; i < toshibaName.length; i++){
           toshibavalue += "<option id=\""+toshibaName[i].replace(/\s/g,'')+"Name\" value = \"" + toshibaName[i] + "\">" + toshibaName[i] + "\<\/option\>" 
       }
       var content = nameSelHead + toshibavalue + "</select>"
    }
    else if (brand == "Bosch"){
       var boschName = ["Vented Dryer 7kg","Side-by-side Fridge","Freestanding Fridge","Domino Gas Hob","Pump Dryer 9kg","Pump Dryer 8kg","Front-Load Washer","Top-Load Washer","Cordless Vacuum"];
       var boschvalue = ""
       for(var i = 0; i < boschName.length; i++){
           boschvalue += "<option id=\""+boschName[i].replace(/\s/g,'')+"Name\" value = \"" + boschName[i] + "\">" + boschName[i] + "\<\/option\>"
       }
       var content = nameSelHead + boschvalue + "</select>"
    }return content;
}

//Check if any product name is selected
function product_name_check(){
    var selectedProName = document.getElementById("product_name_selection");
    selectedProName = selectedProName.options[selectedProName.selectedIndex].value;

    subjectTitle(selectedProName);
}
    
//Display the product name in subject field if any product name is selected
function subjectTitle(name){
    var subject = document.getElementById("subject_title");
    subject.innerHTML = String(name);
}

//Loop through all the products displayed
function enquiry_product(){
    var enquiries;
    enquiries = document.getElementsByClassName("enq");
    for(var i = 0; i < enquiries.length ; i++){
        enquiry_chk(i);
    }
}
    
//Check if any product "?" is clicked
function enquiry_chk(index){
    var enquiries;
    enquiries = document.getElementsByClassName("enq");
    enquiries[index].onclick = function(){ enquiry_store(index);}
}

//Store product name and type selected using sessionStorage
function enquiry_store(index){
    var product;
    product = document.getElementsByClassName("enq");
    var path;
    path = pathPage();
    if(path=="product1.php"){
        sessionStorage.type_product_index = 1
        sessionStorage.productTypeSto = "mobiles"
    }
    else if(path=="product2.php"){
        sessionStorage.type_product_index = 2
        sessionStorage.productTypeSto = "laptops"
    }
    else if(path=="product3.php"){
        sessionStorage.type_product_index = 3
        sessionStorage.productTypeSto = "wearables"
    }
    else if(path=="product4.php"){
        sessionStorage.type_product_index = 4
        sessionStorage.productTypeSto = "appliances"
    }
    var productname;
    productname = product[index].previousElementSibling.previousElementSibling;
    sessionStorage.setItem("name_product",productname.innerHTML);

    var productbrand = productname.parentElement.parentElement.parentElement.previousElementSibling.children[1].id;
    sessionStorage.productbrandSto = capitalFirstLetter(productbrand);

    location.href = "enquiry.php";
}

//Display subject field in enquiry.php
function enquiry_subject(){
    
    var path = pathPage();
    if(path=="enquiry.php"){
        document.getElementById("enqResetBtn").onclick = function (){doEnqResetBtn()}
        product_brand_selection(sessionStorage.productTypeSto);
        product_name_selection(sessionStorage.productbrandSto,sessionStorage.productTypeSto);

        if(sessionStorage.getItem("name_product") == null){
            removeBrandnNameContain();
        }else{
            var proTypeElement = document.getElementById("product_type_selection");
            var proBrandSelcElement = document.getElementById("product_brand_selection");
            var proNameSelcElement = document.getElementById("product_name_selection");

            subjectTitle(sessionStorage.getItem("name_product"));
            proTypeElement.selectedIndex = sessionStorage.type_product_index;
            product_brand_selection(sessionStorage.productTypeSto);

            var childNum = proBrandSelcElement.childElementCount;
            for(i=1;i<childNum;i++){
                if(proBrandSelcElement.children[i].value==sessionStorage.productbrandSto){
                    document.getElementById(sessionStorage.productbrandSto+"Opt").selected = "true";
                    break
                }
            }
            var childNum = proNameSelcElement.childElementCount;
            for(i=1;i<childNum;i++){
                if(proNameSelcElement.children[i].value==sessionStorage.name_product){
                    document.getElementById(sessionStorage.name_product.replace(/\s/g,'')+"Name").selected = "true";
                    break
                }
            }
        }
    }
}

//Reset the subject input field
function doEnqResetBtn(){
    subjectTitle("-Select the selection above-");
    removeBrandnNameContain();
}

//Hide product name and prosuct name selection
function removeBrandnNameContain(){
    document.getElementById("product_brand_container").style.display = "none";
    document.getElementById("product_name_container").style.display = "none";
}
/*
function enquiry_states(){
    if(pathPage()=="enquiry.php"){
        var placeArray = ["Kuala Lumpur","Labuan","Putrajaya","Sarawak", "Sabah", "Johor", "Kedah", "Kelantan", "Malacca", "Negeri Sembilan", "Pahang", "Penang", "Perak", "Perlis", "Selangor", "Terengganu"];
        var placeValueArray = ["KUL","LBN","PJY",'SWK','SBH','JHR','KDH','KTN','MLK','NSN','PHG','PNG','PRK','PLS','SGR','TRG'];

        for(x=0;x<3;x++){
            document.getElementById("federalTerritoriesOpt").innerHTML += "<option value='"+placeValueArray[x]+"'>"+placeArray[x]+"</option>";
        }for(x=3;x<placeValueArray.length;x++){
            document.getElementById("stateOpt").innerHTML += "<option value='"+placeValueArray[x]+"'>"+placeArray[x]+"</option>";
        }
    }
}
*/
//Countdown timer for promotion.php page
//This information is taken from https://code-boxx.com/simple-javascript-countdown-timer/ 
function promoCountDown(){
    if(pathPage()=="promo.php"){
        var counter = {};
        window.addEventListener("load", function () {
        // !! SET YOUR OWN END DATE IN UTC !!
        // YEAR, MONTH, DAY, HOUR, MINUTE, SECOND
        // BEWARE - MONTH IS 0 to 11, JAN = 0 > DEC = 11
        counter.end = Date.UTC(2020, 7, 14, 12, 0, 0);
    
        // Get the containers
        counter.day = document.getElementById("cd-day");
        counter.hr = document.getElementById("cd-hr");
        counter.min = document.getElementById("cd-min");
        counter.sec = document.getElementById("cd-sec");
    
        // Convert UNIX timestamp + calculate remaining time
        counter.end = Math.floor(counter.end / 1000);
        counter.remain = counter.end - Math.floor(Date.now() / 1000);
    
        // Start if not past end date 
        if (counter.remain > 0) {
            counter.ticker = setInterval(function(){
            // Stop if passed end time
            counter.remain--;
            if (counter.remain <= 0) { 
                clearInterval(counter.ticker); 
                counter.remain = 0;
            }
    
            // Calculate remaining time
            var secs = counter.remain;
            var days = Math.floor(secs / 86400); // 1 day = 60 secs * 60 mins * 24 hrs
            secs -= days * 86400;
            var hours = Math.floor(secs / 3600); // 1 hr = 60 secs * 60 mins
            secs -= hours * 3600;
            var mins  = Math.floor(secs / 60); // 1 min = 60 secs
            secs -= mins * 60;
    
            // Update HTML
            counter.day.innerHTML = days;
            counter.hr.innerHTML = hours;
            counter.min.innerHTML = mins;
            counter.sec.innerHTML = secs;
            }, 1000);
        }
        });
    }
}

window.onload = initial();