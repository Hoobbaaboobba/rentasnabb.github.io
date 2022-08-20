var request = document.getElementById("requestion");
var requestion = document.getElementById("requestionitself")
var body = document.getElementById("body");

function openRequest() {
    request.style.background = "#1b1b1bca";
    request.style.zIndex = "10000000";
    request.style.transition = "1s";
    requestion.style.zIndex = "100000000";
    requestion.style.transform = "scale(1)";
    requestion.style.transition = "0.6s";
    body.style.overflow = "hidden";
}

function closeRequest() {
    request.style.background = "transparent";
    request.style.zIndex = "-111";
    request.style.transition = "0s";
    requestion.style.transform = "scale(0)";
    requestion.style.zIndex = "-100";
    requestion.style.transition = "0s";
    body.style.overflow = "auto";
}