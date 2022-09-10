var mobileNavbar = document.getElementById('mobileNavbar');
var bodyBackground = document.getElementById('body')

function MobileNavBar() {
    mobileNavbar.style.transform = "translateX(0%)";
    bodyBackground.style.overflow = "hidden";
}

function CloseNavBar() {
    mobileNavbar.style.transform = "translateX(-100%)";
    bodyBackground.style.overflow = "auto";
}