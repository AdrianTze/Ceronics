//To store all functions that require to run after the window loads 
function enhanceInitial(){
    //generateConfirmTable();
    slideShowFunction();
    cartFunctions();    
    calculatorAll();
    //getEnquiryToConfirm();
    typeWriterEffect();
    directLocationFunc();
}

function cartFunctions(){
    showCartPopUp();
    loadUpCart(false);
    addToCartEffects();
    alterCartItemQuantity();
    deleteCartItem();
    calculateCartTotal();
    addToCartControl();
}

function saveCartToHiddenForm(){
    var source = document.getElementsByClassName("proName")[0];
    var target = document.getElementById("hiddenCartInput");
    var total = document.getElementsByClassName("totalAns")[0];
    target.innerHTML += "<input type='hidden' name='cartTotal' value='"+ total.innerHTML +"'>";
    for(var i = 0; i < source.childElementCount; i++) {
        var proNames = source.children[i].innerHTML;
        var proNum = parseInt(document.getElementsByClassName("numItem")[i].innerHTML);
        target.innerHTML += "<input type='hidden' name='loopProName"+String(i)+"' value='"+ proNames +"'>";
        target.innerHTML += "<input type='hidden' name='loopProQuantity"+String(i)+"' value='"+ String(proNum) +"'>";
    }target.innerHTML += "<input type='hidden' name='lastCartLoop' value='"+ String(i) +"'>";
}

function confirmDeleteBox(message){
    document.getElementsByClassName("messageBox")[0].style.display = "none";
    var target = document.getElementsByClassName("confirmDeleteBoxContent")[0];
    target.innerHTML = message;
    var target = document.getElementsByClassName("confirmDeleteBox")[0];
    target.style.display = "block";
    document.getElementById("yesBtn").onclick = function(){closeConfirmBox(true)};
    document.getElementById("noBtn").onclick = function(){closeConfirmBox(false)};
}

function closeConfirmBox(status){
    if(status){
        doDeleteCartItem();
    }
    document.getElementsByClassName("confirmDeleteBox")[0].style.display = "none";
}

// The slide show effect is referenced from https://stackoverflow.com/questions/55955595/auto-manual-carousel-combination-php-css-js 
function slideShowFunction(){
    if(pathPage()=="index.php"){

        // IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
        var imageSlides = document.getElementsByClassName('imageSlides');
        var circles = document.getElementsByClassName('circle');
        var leftArrow = document.getElementById('leftArrow');
        var rightArrow = document.getElementById('rightArrow');
        var counter = 0;        

        // HIDE ALL IMAGES FUNCTION
        function hideImages() {
            for (var i = 0; i < imageSlides.length; i++) {
                imageSlides[i].classList.remove('visible');
            }
        }       

        // REMOVE ALL DOTS FUNCTION
        function removeDots() {
            for (var i = 0; i < imageSlides.length; i++) {
                circles[i].classList.remove('dot');
            }
        }        

        // SINGLE IMAGE LOOP/CIRCLES FUNCTION
        function imageLoop() {
            var currentImage = imageSlides[counter];
            var currentDot = circles[counter];
            currentImage.classList.add('visible');
            removeDots();
            currentDot.classList.add('dot');
            counter++;
        }        

        // LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
        function arrowClick(e) {
            var target = e.target;
            if (target == leftArrow) {
                clearInterval(imageSlideshowInterval);
                hideImages();
                removeDots();
                if (counter == 1) {
                counter = (imageSlides.length - 1);
                imageLoop();
                imageSlideshowInterval = setInterval(slideshow, 6000);
                } else {
                counter--;
                counter--;
                imageLoop();
                imageSlideshowInterval = setInterval(slideshow, 6000);
                }
            } 
            else if (target == rightArrow) {
                clearInterval(imageSlideshowInterval);
                hideImages();
                removeDots();
                if (counter == imageSlides.length) {
                counter = 0;
                imageLoop();
                imageSlideshowInterval = setInterval(slideshow, 6000);
                } else {
                imageLoop();
                imageSlideshowInterval = setInterval(slideshow, 6000);
                }
            }
        }        

        leftArrow.addEventListener('click', arrowClick);
        rightArrow.addEventListener('click', arrowClick);

        // IMAGE SLIDE FUNCTION
        function slideshow() {
            if (counter < imageSlides.length) {
                imageLoop();
            } else {
                counter = 0;
                hideImages();
                imageLoop();
            }
        }       

        // SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
        setTimeout(slideshow, 500);
        var imageSlideshowInterval = setInterval(slideshow, 5000);
    }
    
}

// The add to cart function is referenced from https://www.youtube.com/watch?v=YeFzkC2awTM
var cartScaleTimer;
function showCartPopUp(){
    //This information is reference from https://www.w3schools.com/howto/howto_css_modals.asp
    var popup = document.getElementById("popupCart");
    var popupContent = document.getElementsByClassName("popupCartContent")[0];
    var btn1 = document.getElementById("cartBtn1");
    var btn2 = document.getElementById("cartBtn2");
    var span = document.getElementsByClassName("close")[0];

    btn1.onclick = function() {
        showPopUp();
    }

    btn2.onclick = function() {
        showPopUp();
    }

    if(pathPage()=="enhancements2.php"){
        document.getElementsByClassName("goToLocationEnhance2")[1].onclick = function() {
            showPopUp();
        }
    }

    function showPopUp(){
        popup.style.display = "block";
        var i=0.0;
        window.clearTimeout(cartScaleTimer);
        cartScaleTimer = window.setInterval(function(){
            if(i<1){
                updateScale(i = parseFloat(i) + 0.011);
                i = parseFloat(i).toFixed(3);
            }else{
                window.clearTimeout(cartScaleTimer);
            }
        }, 0);
    }

    span.onclick = function() {
        hidePopUp();
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            hidePopUp();
        }
    }

    function hidePopUp(){
        popup.style.display = "block";
        var i=1.0;
        window.clearTimeout(cartScaleTimer);
        cartScaleTimer = window.setInterval(function(){
            if(i>0){
                updateScale(i = parseFloat(i) - 0.017);
                i = parseFloat(i).toFixed(3);
            }else{
                popup.style.display = "none";
                window.clearTimeout(cartScaleTimer);
            }
        }, 0);
    }

    function updateScale(i){
        popupContent.style.transform = "scale("+i+")";
    }
}

function addToCartControl(){
    var path = pathPage();
    if((path == "product1.php")||(path == "product2.php")||(path == "product3.php")||(path == "product4.php")){
        addToCart();
    }
}

function loadUpCart(status){
    var cartImg = document.getElementsByClassName("cartImg")[0];
    var tickbox = document.getElementsByClassName("tickbox")[0];
    var proName = document.getElementsByClassName("proName")[0];
    var proPrice = document.getElementsByClassName("proPrice")[0];
    var proQuantity = document.getElementsByClassName("proQuantity")[0];
    placeCartItems(status, cartImg, tickbox, proName, proPrice, proQuantity);
}

function placeCartItems(status, cartImg, tickbox, proName, proPrice, proQuantity){
    var cartImageArr = getArray("cartImageArr");
    var cartProNameArr = getArray("cartProNameArr");
    var cartProPriceArr = getArray("cartProPriceArr");
    var tickboxContent = "<p class=\"containMarking\">\
                                <span class=\"marking\"></span>\
                            </p>"

    var itemQuantityArr = getArray("itemQuantityArr");
    if((itemQuantityArr===null)){
        storeArray([], "itemQuantityArr");
        var itemQuantityArr = getArray("itemQuantityArr");
        for(var x in cartImageArr){
            itemQuantityArr.push("1");
        }
    }

    if(status){
        for(n=0;n<(cartImageArr.length)-1;n++){
            removeCartItemS(0);
    }}
    
    for(var n in cartImageArr){
        cartImg.innerHTML += "<p>"+cartImageArr[n]+"</p>";
        tickbox.innerHTML += tickboxContent;
        proName.innerHTML += "<p>"+cartProNameArr[n]+"</p>";
        proPrice.innerHTML += "<p>"+cartProPriceArr[n]+"</p>";
        if(itemQuantityArr[n]===undefined){
            itemQuantityArr.push("1");
        }
        var proQuantityContent = "<p>\
                                <span class=\"leftArrow\"></span>\
                                <span class=\"numItem\">"+itemQuantityArr[n]+"</span>\
                                <span class=\"rightArrow\"></span>\
                            </p>"
        proQuantity.innerHTML += proQuantityContent;
    }storeArray(itemQuantityArr, "itemQuantityArr");
    addToCartEffects();
}

function addToCart(){
    var target = document.getElementsByClassName("addCart");
    for(n=0;n<target.length;n++){
        addToCartLoop(n);
    }
}

function addToCartLoop(n){
    document.getElementsByClassName("addCart")[n].onclick = function() {doAddToCart(n)};
}

function doAddToCart(n){
    var target = document.getElementsByClassName("addCart")[n];
    var image = target.parentElement.previousElementSibling.innerHTML;
    var proName = target.parentElement.children[0].innerHTML;
    var proPrice = target.parentElement.children[1].innerHTML;
    var cartImageArr = getArray("cartImageArr");
    var cartProNameArr = getArray("cartProNameArr");
    var cartProPriceArr = getArray("cartProPriceArr");
    if(cartImageArr==null){
        storeArray([], "cartImageArr");
        storeArray([], "cartProNameArr");
        storeArray([], "cartProPriceArr");
        var cartImageArr = getArray("cartImageArr");
        var cartProNameArr = getArray("cartProNameArr");
        var cartProPriceArr = getArray("cartProPriceArr");
    }if(checkCartItem(proName, image, cartImageArr)){
        cartImageArr.push(image);
        cartProNameArr.push(proName);
        cartProPriceArr.push(proPrice);
        storeArray(cartImageArr, "cartImageArr");
        storeArray(cartProNameArr, "cartProNameArr");
        storeArray(cartProPriceArr, "cartProPriceArr");
        loadUpCart(true);
        alterCartItemQuantity();
        calculateCartTotal();
        messageBox(proName + " added to cart <img src=\"images/green_tick.png\" alt=\"Green Tick Icon\">");
    }
}

function checkCartItem(proName, image, cartImageArr){
    var status = true
    for(var x in cartImageArr){
        if(image==cartImageArr[x]){
            messageBox(proName + " is in the cart already.<br>\
You can add the quantity in cart");
            var status = false
            break
        }
    }return status
}

function addToCartEffects(){
    var cartImageArr = getArray("cartImageArr");
    var imagesNum = document.getElementsByClassName("cartImg")[0].childElementCount;
    for(n=0;n<imagesNum;n++){
        addToCartEffectsLoop(n);
    }
}

function addToCartEffectsLoop(n){
    var marking = document.getElementsByClassName("marking")[n];
    var containMarking = document.getElementsByClassName("containMarking")[n];
    var images = document.getElementsByClassName("cartImg")[0].children[n];
    var proName = document.getElementsByClassName("proName")[0].children[n];
    var proPrice = document.getElementsByClassName("proPrice")[0].children[n];

    containMarking.onmouseover = function() {addToCartHover(marking)};
    containMarking.onmouseout = function() {addToCartHoverOut(marking)};
    images.onmouseover = function() {addToCartHover(marking)};
    images.onmouseout = function() {addToCartHoverOut(marking)};
    proName.onmouseover = function() {addToCartHover(marking)};
    proName.onmouseout = function() {addToCartHoverOut(marking)};
    proPrice.onmouseover = function() {addToCartHover(marking)};
    proPrice.onmouseout = function() {addToCartHoverOut(marking)};

    containMarking.onclick = function() {addToCartMarkingClick(n)};
    images.onclick = function() {addToCartMarkingClick(n)};
    proName.onclick = function() {addToCartMarkingClick(n)};
    proPrice.onclick = function() {addToCartMarkingClick(n)};
}

function addToCartHover(marking){
    marking.style.backgroundColor = "rgb(71, 219, 233)";
}

function addToCartHoverOut(marking){
    marking.style.backgroundColor = "transparent";
}

function addToCartMarkingClick(n){
    var marking = document.getElementsByClassName("marking");
    var classNaming = marking[n].className;
    if(classNaming=="marking"){
        for(i=0;i<marking.length;i++){
            marking[i].className = "marking"
        }
        marking[n].className = "marking cartItemClicked";
        localStorage.cartItemClicked = n;
    }else{
        marking[n].className = "marking";
        if(localStorage.cartItemClicked!==undefined){
            localStorage.removeItem("cartItemClicked");
        }
    }
}

function deleteCartItem(){
    var target = document.getElementsByClassName("dltCart")[0];
    target.onclick = function() {askDeleteCartItem()};
}

function askDeleteCartItem(){
    if(localStorage.cartItemClicked!==undefined){
        var n = parseInt(localStorage.cartItemClicked);
        var cartProNameArr = getArray("cartProNameArr");
        confirmDeleteBox("Are you sure you want to delete<br>" + cartProNameArr[n]);
    }else{
        if(getArray("cartImageArr").length == 0){
            messageBox("There are no item in the cart to delete");
        }else{
            messageBox("Select the item you want to delete");
        }  
    }
}

function doDeleteCartItem(){
    var n = parseInt(localStorage.cartItemClicked);
    var cartImageArr = getArray("cartImageArr");
    var cartProNameArr = getArray("cartProNameArr");
    var cartProPriceArr = getArray("cartProPriceArr");
    var itemQuantityArr = getArray("itemQuantityArr");
    removeCartItemS(n);
    for(i=0;i<cartImageArr.length;i++){
        if(i==n){
            cartImageArr.splice(n, 1);
            cartProNameArr.splice(n, 1);
            cartProPriceArr.splice(n, 1);
            itemQuantityArr.splice(n, 1);
            storeArray(cartImageArr, "cartImageArr");
            storeArray(cartProNameArr, "cartProNameArr");
            storeArray(cartProPriceArr, "cartProPriceArr");
            storeArray(itemQuantityArr, "itemQuantityArr");
        }
    }
    addToCartEffects();
    alterCartItemQuantity();
    calculateCartTotal();
    localStorage.removeItem("cartItemClicked");
}

function removeCartItemS(n){
    document.getElementsByClassName("cartImg")[0].children[n].remove();
    document.getElementsByClassName("tickbox")[0].children[n].remove();
    document.getElementsByClassName("proName")[0].children[n].remove();
    document.getElementsByClassName("proPrice")[0].children[n].remove();
    document.getElementsByClassName("proQuantity")[0].children[n].remove();
}

function alterCartItemQuantity(){
    var increase = document.getElementsByClassName("rightArrow");
    var decrease = document.getElementsByClassName("leftArrow");
    for(n=0;n<increase.length;n++){
        CartItemQuantityLoop(increase, decrease, n);
    }
}

function CartItemQuantityLoop(increase, decrease, n){
    increase[n].onclick = function() {doQuantityItem(n,"increase")};
    decrease[n].onclick = function() {doQuantityItem(n,"decrease")};
}

function doQuantityItem(n, condition){
    var target = document.getElementsByClassName("numItem")[n];
    var itemQuantityArr = getArray("itemQuantityArr");
    var num = parseInt(itemQuantityArr[n]);
    if(condition == "increase"){
        if(num<5){        
            var ans = num + 1;
            target.innerHTML = ans;
            itemQuantityArr[n] = ans.toString();
            storeArray(itemQuantityArr, "itemQuantityArr");
            var x = getArray("itemQuantityArr");
        }else{
            messageBox("You reached the maximum (5) quantity");
        }
    }else{
        if(num>1){        
            var ans = num - 1;
            target.innerHTML = ans;
            itemQuantityArr[n] = ans.toString();
            storeArray(itemQuantityArr, "itemQuantityArr");
        }else{
            messageBox("You reached the minimum (1) quantity");
        }
    }calculateCartTotal();
}

function calculateCartTotal(){
    var cartProPriceArr = getArray("cartProPriceArr");
    var itemQuantityArr = getArray("itemQuantityArr");
    var ttl = 0;
    for(x in cartProPriceArr){
        var strPrice = "";
        var cartProPrice = cartProPriceArr[x];
        for(p in cartProPrice){
            var strDetail = cartProPrice[p];
            if(Number.isInteger(Math.floor(strDetail))){
                strPrice += strDetail;
            }
        }
        ttl += strPrice * itemQuantityArr[x];       
    }
    writeCartTotal(ttl);
}

function writeCartTotal(ttl){
    var target = document.getElementsByClassName("totalAns")[0];
    var strTtl = String(ttl);
    if(strTtl.length>3){
        var frontPart = (strTtl.slice(0, strTtl.length - 3));
        var backPart = (strTtl.slice(strTtl.length - 3, strTtl.length));
        var content = frontPart.concat(",", backPart)
    }else{
        var content = strTtl;
    }
    target.innerHTML = content;
}

/* function payNowBtn(){
    document.getElementById("payNow").onclick = function() {doPayNow()};
} */

function doPayNow(){
    var cartImageArr = getArray("cartImageArr");
    if(cartImageArr.length != 0){
        saveCartToHiddenForm();
        for(x in cartImageArr){
            removeCartItemS(0);
        }
        storeArray([], "cartImageArr");
        storeArray([], "cartProNameArr");
        storeArray([], "cartProPriceArr");
        storeArray([], "itemQuantityArr");
        calculateCartTotal();
        localStorage.removeItem("cartItemClicked");
        return true;
    }else{
        messageBox("There are no item to pay");
        return false;
    }
}

//The calculator function is referenced from https://www.freecodecamp.org/news/how-to-build-an-php-calculator-app-from-scratch-using-javascript-4454b8714b98/
function calculatorAll(){
    calculatorBtn()
    //Display calculator interface
    numbers(9);
    createContent(".", "numbers");
    createContent(0, "numbers");
    createContent("AC", "operations");
    createContent("DEL", "operations");
    createContent("/", "operations");
    createContent("*", "operations");
    createContent("=", "operations");  
    createContent("-", "operations"); 
    createContent("+", "operations"); 
    displayScreen();

    //Create content of calculator buttons
    function createContent(value, id){
        var para = document.createElement("button");
        var node = document.createTextNode(value);
        para.appendChild(node);
        var element = document.getElementById(id);
        product = element.appendChild(para);       
        product.id = value;
    }

    //Looping for creating number buttons
    function numbers(data){
        for(i=data; i>0; i--){
            createContent(i, "numbers");
        }
    }

    //Changing screen values
    function displayScreen(){
        defaultValues();
        for(i=9; i>=0; i--){
            displayNum(i);
        }
        displayDot();
        acButt();
        delButt();
        operButt();
    }

    //Default variables that reset after calculation is done
    function defaultValues(){
        operButtPressed = 0;
        bufferValue = 0;
        signStor = "";
        action = "Nil";
    }

    //Get and return the value of the screen
    function getScreen(){
        var value = document.getElementById("screen").innerHTML;
        var value = parseFloat(value);
        return value;
    }

    //Delete the main screen values
    function deleteScreen(){
        document.getElementById("screen").innerHTML = "";
    }

    //Delete the sign screen values
    function deleteSignScreen(){
        document.getElementById("signscreen").innerHTML = "";
    }

    //Number buttons
    function displayNum(num){
        document.getElementById(num).onclick = function() {doNumber(num)};
    }

    //When number button is being clicked
    function doNumber(input){
        document.getElementById("clickAudio").play();
        if(signStor == "="){
            doAc();
        }
        var screenValue = document.getElementById("screen").innerHTML;
        String(screenValue);
        
        var oper = "+-*/";
        
        if(oper.includes(action)){
            bufferValue = document.getElementById("screen").innerHTML;
            bufferValue = parseFloat(bufferValue);
            document.getElementById("screen").innerHTML = "";
            if(action == "+"){
                action = "plus";
            }
            if(action == "-"){
                action = "minus";
            }
            if(action == "*"){
                action = "multiply";
            }
            if(action == "/"){
                action = "divide";
            }
        }
        else if(screenValue.length >= 3){
            if((screenValue.length - screenValue.indexOf(".") == 3)){
                messageBox("Maximum 2 decimal place only");
                return false;
            }
        }
        if(!checkScreenLength()){
            messageBox("Maximum 7 characters");
            return false;
        }
        document.getElementById("screen").innerHTML += input;
        signStor = "";
        operButtPressed = 0;
    }

    //Check and return true or false if screen length exceed 10
    function checkScreenLength(){
        var screenValue = getScreen();
        screenValue = String(screenValue);
        if(screenValue.length >= 7){
            return false;
        }
        else{
            return true;
        }
    }

    //Dot button
    function displayDot(){
        document.getElementById(".").onclick = function() {doDot()};
    }

    //When dot button is being clicked
    function doDot(){
        document.getElementById("clickAudio").play();
        var screenValue = document.getElementById("screen").innerHTML;
        if(screenValue.includes(".")){
            //Check other number 1.2 + 5.5
            messageBox("Maximum 1 dot");
            return false;
        }
        else{
            document.getElementById("screen").innerHTML += '.';
        }
    }

    //Delete button
    function delButt(){
        document.getElementById("DEL").onclick = function() {doDel()};
    }

    //When delete button is being clicked
    function doDel(){
        document.getElementById("deleteAudio").play();
        var oper = "+-*/=";
        if(oper.includes(action)){
            doAc();
        }
        else{
            var target = document.getElementById("screen").innerHTML;
            var target = target.slice(0, -1);
            document.getElementById("screen").innerHTML = target;
        }
    }

    //AC button
    function acButt(){
        document.getElementById("AC").onclick = function() {doAc()};
    }

    //When Ac button is being clicked
    function doAc(){
        document.getElementById("deleteAudio").play();
        deleteScreen();
        deleteSignScreen();
        defaultValues();
    }

    //Calculations buttons
    function operButt(){
        document.getElementById("+").onclick = function() {doPlus()};
        document.getElementById("-").onclick = function() {doMinus()};
        document.getElementById("*").onclick = function() {doMultiply()};
        document.getElementById("/").onclick = function() {doDivide()};
        document.getElementById("=").onclick = function() {
            document.getElementById("equalAudio").play();
            if(!checkOperButtPressed()){
                doEqual(true)
            }
            else{
                messageBox("No calculation will be made for now.<br>\
    You need to enter a number before<br>\
    clicking the equal button");
            }
        };
    }

    //Check and alert if screen is empty
    function checkScreenNotEmpty(){
        var screenValue = getScreen();
        if(Number.isNaN(screenValue)){
            messageBox("Your current screen is empty to make calculation");
            return false;
        }
        else{
            return true;
        }
    }

    //Show the values of sign in the sign screen
    function showSignScreen(oper){
        document.getElementById("signscreen").innerHTML = oper;
    }

    //Check, alert and delete screen if equal sign is being pressed
    function checkEqualButtNotPressed(){
        if(action == "="){
            messageBox("You press the equal sign just now<br>\
    Enter new values to calculate");
            return true;
        }
        else{
            return false;
        }
    }

    //When plus button is being pressed
    function doPlus(){
        document.getElementById("operationAudio").play();
        if(checkScreenNotEmpty()){
            showSignScreen("+");
            if(operButtPressed == 0){
                doEqual(false);
                operButtPressed = 1;
            }
            if(!checkEqualButtNotPressed()){
                action = "+";
            }
        }
    }

    //When minus button is being pressed
    function doMinus(){
        document.getElementById("operationAudio").play();
        if(checkScreenNotEmpty()){
            showSignScreen("-");
            if(operButtPressed == 0){
                doEqual(false);
                operButtPressed = 1;
            }
            if(!checkEqualButtNotPressed()){
                action = "-";
            }
        }
    }

    //When multiply button is being pressed
    function doMultiply(){
        document.getElementById("operationAudio").play();
        if(checkScreenNotEmpty()){
            showSignScreen("*");
            if(operButtPressed == 0){
                doEqual(false);
                operButtPressed = 1;
            }
            if(!checkEqualButtNotPressed()){
                action = "*";
            }
        }
    }

    //When divide button is being pressed
    function doDivide(){
        document.getElementById("operationAudio").play();
        if(checkScreenNotEmpty()){
            showSignScreen("/");
            if(operButtPressed == 0){
                if(bufferValue != 0){
                    doEqual(false);
                    operButtPressed = 1;
                }
            }
            if(!checkEqualButtNotPressed()){
                action = "/";
            }
        }
    }

    //Calculate and return functions
    function adding(screenValue){
        var ans = screenValue + bufferValue;
        return ans;
    }
    function minusing(screenValue){
        var ans = bufferValue - screenValue;
        return ans;
    }
    function multiplying(screenValue){
        var ans = screenValue * bufferValue;
        return ans;
    }
    function dividing(screenValue){
        var ans = bufferValue / screenValue;
        return ans;
    }

    //Print the value calculated to main screen
    function printing(ans){
        var ans = ans.toFixed(2);
        document.getElementById("screen").innerHTML = ans;
        bufferValue = 0;
    }

    //When equal button is being pressed
    function doEqual(bool){
        var mathError = false;
        var screenValue = getScreen();

        if(Number.isNaN(screenValue)){
            messageBox("Your current screen is empty to make calculation");
            return false;
        }
        else{
            if((action == "plus") || (action == "+")){
                var ans = adding(screenValue);
                printing(ans);
            }
            if((action == "minus") || (action == "-")){
                var ans = minusing(screenValue);
                printing(ans);
            }
            if((action == "multiply") || (action == "*")){
                var ans = multiplying(screenValue);
                printing(ans);
            }
            if((action == "divide") || (action == "/")){
                var ans = dividing(screenValue);
                if(Number.isNaN(ans)){
                    doAc();
                    messageBox("Math error calculated<br>The calculator will be reset");
                    var mathError = true;
                }
                else if(ans === Infinity){
                    doAc();
                    messageBox("Math error calculated<br>The calculation is infinity<br>The calculator will be reset");
                    var mathError = true;
                }
                else{
                    printing(ans);
                }
            }
            if(bool){
                defaultValues();
            }
        }
        if(bool && !mathError){
            showSignScreen("=");
            signStor = "=";
            action = "=";
        }
    }

    //Check if operation button is being clicked
    function checkOperButtPressed(){
        var oper = "+-*/";
        if(oper.includes(action)){
            return true;
        }
        else{
            return false;
        }
    }
}

function calculatorBtn(){
    var target = document.getElementById("calframe");
    document.getElementById("calculatorBtn").onclick = function() {showCalculator(target);};
    document.getElementById("calDireLeft").onclick = function() {moveCalculator(target, "left");};
    document.getElementById("calDireRight").onclick = function() {moveCalculator(target, "right");};
    document.getElementById("calClose").onclick = function() {closeCalculator(target);};
}

var calculatorTimer;
function showCalculator(target){
    document.getElementById("calculatorBtn").style.display = "none";
    var x = -560;
    clearInterval(calculatorTimer);
    var calculatorTimer = window.setInterval(function(){
        if(x<=30){
            target.style.top = x+"px";
            x += 8;
        }else{
            clearInterval(calculatorTimer);
        }
    }, 0);
}

function moveCalculator(target, direction){
    if(direction=="right"){
        target.style.right = "30px";
        target.style.left = "auto";
        document.getElementById("calDireRight").style.display = "none";
        document.getElementById("calDireLeft").style.display = "inline";
    }if(direction=="left"){
        target.style.left = "30px";
        target.style.right = "auto";
        document.getElementById("calDireRight").style.display = "inline";
        document.getElementById("calDireLeft").style.display = "none";
    }
}

function closeCalculator(target){
    var x = 30;
    clearInterval(calculatorTimer);
    var calculatorTimer = window.setInterval(function(){
        if(x>-565){
            target.style.top = x+"px";
            x -= 8;
        }else{
            clearInterval(calculatorTimer);
        }
    }, 0);document.getElementById("calculatorBtn").style.display = "block";
}
/*
// This information is referenced from the unit COS10011 Creating Web Applications | Lab 6 Activity: Document Object Model
function saveEnquiryDetail(){
    var fname = document.getElementById("enqfname").value;
    var lname = document.getElementById("enqlname").value;
    var email = document.getElementById("enqemail").value;
    var tel = document.getElementById("enqtel").value;
    var street = document.getElementById("enqstreetadd").value;
    var city = document.getElementById("enqcity").value;
    var stateIndex = document.getElementById("enqstate").selectedIndex;
    var state = document.getElementById("enqstate").options.item(stateIndex).text;
    var postcode = document.getElementById("enqpostcode").value;
    var proTypeIndex = document.getElementById("product_type_selection").selectedIndex;
    var proType = document.getElementById("product_type_selection").options.item(proTypeIndex).text;
    var proBrand = document.getElementById("product_brand_selection").value;
    var proName = document.getElementById("product_name_selection").value;
    var comment = document.getElementById("enqcomments").value;

    var arrayToStore = [fname,lname,email,tel,street,city,state,postcode,proType,proBrand,proName,comment];
    storeArray(arrayToStore, "enquiryArrayStored");
}*/
/*
function getEnquiryToConfirm(){
    if(pathPage()=="confirm.php"){
        var arrayTaken = getArray("enquiryArrayStored");
        for(x in arrayTaken){
            document.getElementsByClassName("confirmField")[x].textContent = arrayTaken[x];
        }
    }if(sessionStorage.confirmSubmit!==undefined){
        messageBox("Enquiry submitted successfully");
        sessionStorage.removeItem("confirmSubmit");
    }
}*/

function cancelSubmitConfirm(){
    window.location = "enquiry.php";
}

function doSubmitConfirm(){
    sessionStorage.confirmSubmit = true;
}

//new function addedd
function recaptchaCallback(){
    var confirmbutton = document.getElementById("Confirmbutton");
    confirmbutton.disabled = false ;
    $('#Confirmbutton').prop("disabled",false);
}

/*
function generateConfirmTable(){
    if(pathPage()=="confirm.php"){
        var tableContent = ["First Name","Last Name","Email","Phone No.","Street address","City","State","Postcode","","Comments"];

        for(x in tableContent){
            if(x == 8){
                document.getElementById("confirmFormTable").innerHTML += '\
                <tr>\
                    <td rowspan="3">Enquiry on Product >></td>\
                    <td class="secondRow">Type</td>\
                    <td class="confirmField"></td>\
                </tr>\
                <tr>\
                    <td class="secondRow">Brands</td>\
                    <td class="confirmField"></td>\
                </tr>\
                <tr>\
                    <td class="secondRow">Name</td>\
                    <td class="confirmField"></td>\
                </tr>';             
            }else{
                document.getElementById("confirmFormTable").innerHTML += '\
                <tr><td>'+tableContent[x]+' </td><td colspan="2" class="confirmField"></td></tr>'
            }
        }
    }
}*/

function typeWriterEffect(){
    if(pathPage()=="aboutme1.php"){
        var name = "Kenny Tan Chee Lun";
        doTypeWriterName(name);
    }else if(pathPage()=="aboutme2.php"){
        var name = "Josh Wong Howe Zheng";
        doTypeWriterName(name);
    }else if(pathPage()=="aboutme3.php"){
        var name = "Lai Yee Fung";
        doTypeWriterName(name);
    }else if(pathPage()=="aboutme4.php"){
        var name = "Adrian Sim Huan Tze";
        doTypeWriterName(name);
    }else if(pathPage()=="index.php"){
        typeWriterProductPara();
    }
}

function doTypeWriterName(name){
    document.getElementById("typeWriterName").innerHTML = name;
}

function typeWriterProductPara(){
    //var checkScrollingValueTypeWriterStatus = true;
    var checkMobileStatus = true;
    var checkLaptopStatus = true;
    var checkWearablesStatus = true;
    var checkAppliancesStatus = true;
    window.onscroll = function() {checkScrollingValueTypeWriter();doScrollEffectFixedButton();};
    checkScrollingValueTypeWriter();
    function checkScrollingValueTypeWriter(){
        if((document.body.scrollTop>1900||document.documentElement.scrollTop>1900) && checkMobileStatus){
            checkMobileStatus = false;
            var para = "Is your mobile getting lagger a year after another? Our mobiles are mostly the latest released by the official brands. Time to enhance your connectivity with the new features released. All the mobile brands we sold are mostly popular among the comunity.";
            var i = 0;
            var typeWriterInterval1 = setInterval(function(){ 
                if (i < para.length) {
                    document.getElementById("typeWriterMobile").innerHTML += para.charAt(i);
                    i++;
                }else{
                    clearInterval(typeWriterInterval1);
                }
            }, 10);
        }else if((document.body.scrollTop>2300||document.documentElement.scrollTop>2300) && checkLaptopStatus){
            checkLaptopStatus = false;
            var para = "Wants to widen your imagination but does not have a bigger screen? In the 21st Century, everyone should take computer as a part of their daily life. Keep yourself productive at home or on the go with remote work and study solutions for students or workers.";
            var i = 0;
            var typeWriterInterval2 = setInterval(function(){ 
                if (i < para.length) {
                    document.getElementById("typeWriterLaptop").innerHTML += para.charAt(i);
                    i++;
                }else{
                    clearInterval(typeWriterInterval2);
                }
            }, 10);
        }else if((document.body.scrollTop>2800||document.documentElement.scrollTop>2800) && checkWearablesStatus){
            checkWearablesStatus = false;
            var para = "Feeling uncomfortable when replying messages during exercise every week? Smart watches enables you to reply simple messages without looking at your phone. Plus, some smart watch can keep track on your health by examine your pulse rate, blood pressure, blood oxygen level and more.";
            var i = 0;
            var typeWriterInterval3 = setInterval(function(){ 
                if (i < para.length) {
                    document.getElementById("typeWriterWearables").innerHTML += para.charAt(i);
                    i++;
                }else{
                    clearInterval(typeWriterInterval3);
                }
            }, 10);
        }else if((document.body.scrollTop>3300||document.documentElement.scrollTop>3300) && checkAppliancesStatus){
            checkAppliancesStatus = false;
            var para = "Complaining your home is always messy and feeling frustrated to clean up every week? The home applicances we had choosen is based on precision, performance and versatility. With these full line of luxury, built-in appliances you will find the perfect blend of innovation, precision and purposeful design for every corner of your home.";
            var i = 0;
            var typeWriterInterval4 = setInterval(function(){ 
                if (i < para.length) {
                    document.getElementById("typeWriterAppliances").innerHTML += para.charAt(i);
                    i++;
                }else{
                    clearInterval(typeWriterInterval4);
                }
            }, 10);
        }
    }
}

function directLocationFunc(){
    if(pathPage()=="enhancements2.php"){
        document.getElementsByClassName("goToLocationEnhance2")[0].onclick = function() {
            location.href = "index.php#slideshowContainer";
        };
        document.getElementsByClassName("goToLocationEnhance2")[2].onclick = function() {
            showCalculator(document.getElementById("calframe"));
        };
        document.getElementsByClassName("goToLocationEnhance2")[3].onclick = function() {
            location.href = "confirm.php";
        };
        document.getElementsByClassName("goToLocationEnhance2")[4].onclick = function() {
            location.href = "index.php#typeWriterMobile";
        };
        document.getElementsByClassName("goToLocationEnhance2")[5].onclick = function() {
            location.href = "aboutme1.php#about";
        };
    }
}

window.onload = enhanceInitial();