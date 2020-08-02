var onImage = 1;
showImage(onImage);

function nextImage(n) {
    showImage(onImage += n);
}

function showImage(n) {
    var i;
    var images = document.getElementsByClassName("myImages");

    if(n > images.length) { onImage = 1; }
    if(n < 1) { onImage = images.length; }

    console.log(images[onImage-1]);

    for(i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    images[onImage-1].style.display = "block";
}