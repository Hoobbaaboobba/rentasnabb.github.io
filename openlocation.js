var map = document.getElementById("map");
var body = document.getElementById("body");
var moscow = document.getElementById("MoscowAndSev")

function openLocation() {
    map.style.background = "#1b1b1bca";
    map.style.zIndex = "10000000";
    map.style.transition = "1s";
    moscow.style.zIndex = "100000000";
    moscow.style.transform = "scale(1)";
    moscow.style.transition = "0.6s";
    body.style.overflow = "hidden";
}

function closeLocation() {
    map.style.background = "transparent";
    map.style.zIndex = "-111";
    map.style.transition = "0s";
    moscow.style.transform = "scale(0)";
    moscow.style.zIndex = "-100";
    moscow.style.transition = "0s";
    body.style.overflow = "auto";
}