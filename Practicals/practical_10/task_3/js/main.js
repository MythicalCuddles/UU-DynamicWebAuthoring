/// Script Starts

var onImage = 0; // Starting index
var images = []; // Array of Images of Cities (Preloaded below)
var links = [ 
    "https://www.visitbrighton.com/", 
    "https://en.parisinfo.com/", 
    "https://www.discoverlosangeles.com/", 
    "https://www.sftravel.com/"
]; // Array of Links for the Images

var time = 3; // Time between images in SECONDS 

// Preload images
preloadImage("images/Brighton.jpg");
preloadImage("images/Paris.jpg");
preloadImage("images/Los_Angeles.jpg");
preloadImage("images/San_Francisco.jpg");

window.onload = onLoad; // run the onLoad function on start

/// Script Functions

function preloadImage(link) {
    var image = new Image(); // Create new image object
    image.src = link; // Set the source of the image object to passed arg.
    images.push(image); // Add the image to the images array
}

function onLoad() {
    changeImages();
}

function changeImages() {
    document.cityPhoto.src = images[onImage].src;

    if(onImage < images.length-1) {
        onImage++;
    } else {
        onImage = 0;
    }

    setTimeout("changeImages()", (time*1000));
}

function userOnClick() {
    open(links[onImage-1], "_BLANK");
    return false;
}

