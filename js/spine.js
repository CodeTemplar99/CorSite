// side bar
let isOpen = false

function showSideBar() {
    document.querySelector('#navbarSupportedContent').style.display = isOpen ? "none" : "block"
    isOpen = !isOpen

}


// slide
// var on = true;
// var myVar = setInterval(function () { if (on) { slides() } on = true; }, 7000);

document.addEventListener("DOMContentLoaded", function (e) {
    setInterval(
        () => {
            var l = document.getElementsByTagName("img")[0]
            l.style.width = "0px";
            l.style.opacity = 0;
            l.style.transition = "opacity 3s";
            var m = document.getElementsByTagName("img")[1]
            m.style.width = "100%";
            m.style.opacity = 1;
            m.style.transition = "opacity 3s";
            var slide = document.getElementsByTagName("img")[0];
            document.getElementById("slide").appendChild(slide);

        }, 7000
    )
});
