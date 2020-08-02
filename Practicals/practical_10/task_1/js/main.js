/// Script Starts

var onImage = 0; // Starting index
var images = []; // Array of Images of Cities (Preloaded below)
var links = [ 
    "https://www.visitbrighton.com/", 
    "https://en.parisinfo.com/", 
    "https://www.discoverlosangeles.com/", 
    "https://www.sftravel.com/"
]; // Array of Links for the Images

// Preload images
preloadImage("images/Brighton.jpg");
preloadImage("images/Paris.jpg");
preloadImage("images/Los_Angeles.jpg");
preloadImage("images/San_Francisco.jpg");

/// Script Functions

function preloadImage(link) {
    var image = new Image(); // Create new image object
    image.src = link; // Set the source of the image object to passed arg.
    images.push(image); // Add the image to the images array
}

function onLoad() {
    onImage = 0;
    console.log(images[onImage]);
    console.log(links[onImage]);
}

function userMouseOut() {
    onImage = (onImage < images.length-1) ? onImage+1 : 0;
    console.log("onImage now displaying: " + onImage);
    console.log(images[onImage]);

    document.cityPhoto.src = images[onImage].src;
}

function userOnClick() {
    open(links[onImage], "_BLANK");
    return false;
}