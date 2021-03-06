var onImage = 1;
var timeoutObj;
var time = 7; // how fast the images change, in seconds.

onload = onLoad;

function onLoad() {
    showImage(onImage);
}

function nextImage(n) {
    clearTimeout(timeoutObj);
    showImage(onImage += n);
}

function showImage(n) {
    var i;
    var images = document.getElementsByClassName("myImages");

    if(n > images.length) { onImage = 1; }
    if(n < 1) { onImage = images.length; }

    for(i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    images[onImage-1].style.display = "block";

    timeoutObj = setTimeout("nextImage(1)", time*1000);
}