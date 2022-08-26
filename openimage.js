var imageback = document.getElementById("popupimage");
var image = document.getElementById("imageabout2");
var body = document.getElementById("body")
var imageback2 = document.getElementById("popupimagepayment");
var imageback3 = document.getElementById("popupimagepayment2");
var image2 = document.getElementById("imagepayment2");
var image3 = document.getElementById("imagepayment3");

function openImage() {
    image.style.transform = "scale(1)";
    image.style.transition = "0.3s";
    imageback.style.background = "#1b1b1bca";
    imageback.style.zIndex = "100000";
    body.style.overflow = "hidden"
}

function closeImage () {
    image.style.transform = "scale(0)";
    image.style.transition = "0s";
    imageback.style.background = "transparent";
    imageback.style.zIndex = "-111";
    body.style.overflow = "auto"
}

function openImagepayment() {
    image2.style.transform = "scale(1)";
    image2.style.transition = "0.3s";
    imageback2.style.background = "#1b1b1bca";
    imageback2.style.zIndex = "100000";
    body.style.overflow = "hidden"
}

function closeImagepayment() {
    image2.style.transform = "scale(0)";
    image2.style.transition = "0s";
    imageback2.style.background = "transparent";
    imageback2.style.zIndex = "-111";
    body.style.overflow = "auto"
}

function openImagepayment2() {
    image3.style.transform = "scale(1)";
    image3.style.transition = "0.3s";
    imageback3.style.background = "#1b1b1bca";
    imageback3.style.zIndex = "100000";
    body.style.overflow = "hidden"
}

function closeImagepayment2() {
    image3.style.transform = "scale(0)";
    image3.style.transition = "0s";
    imageback3.style.background = "transparent";
    imageback3.style.zIndex = "-111";
    body.style.overflow = "auto"
}