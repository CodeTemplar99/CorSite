// side bar
let isOpen = false

function showSideBar() {
    document.querySelector('#navbarSupportedContent').style.display = isOpen ? "none" : "block"
    isOpen = !isOpen

}


// slide
var on = true;
var myVar = setInterval(function () { if (on) { slides() } on = true; }, 7000);

function slides() {
    document.getElementsByTagName("img")[0].style.width = "0px";
    document.getElementsByTagName("img")[1].style.width = "100%";
    var slide = document.getElementsByTagName("img")[0];
    document.getElementById("slide").appendChild(slide);

}