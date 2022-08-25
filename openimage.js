var imageback = document.getElementById("popupimage");
var image = document.getElementById("imageabout2");

function openImage() {
    image.style.transform = "scale(1)";
    imageback.style.background = "#1b1b1bca";
    imageback.style.zIndex = "100000";
}

function closeImage () {
    image.style.transform = "scale(0)";
    imageback.style.background = "transparent";
    imageback.style.zIndex = "-111";
}