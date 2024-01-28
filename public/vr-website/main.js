// Array of image URLs
var images = [
  "images/8ed53eba-aeac-48c5-b07f-16e1a2496d17.jpg",
  "images/IMG_0785.jpg",
  "images/IMG_1511.jpg",
  "images/IMG_1668.jpg"
];
var currentIndex = 0;

const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  controlBar: true,
  enableReticle: true,
});

// Load the first image
var panorama = new PANOLENS.ImagePanorama(images[currentIndex]);
viewer.add(panorama);
viewer.enableControl(1);
// Function to change the panorama
function changePanorama() {
  currentIndex = (currentIndex + 1) % images.length;
  panorama.load(images[currentIndex]);
}

// Add event listener for tap/click
viewer.container.addEventListener("click", changePanorama);
viewer.container.addEventListener("touchstart", changePanorama);

panorama.addEventListener("load", function () {
  console.log("Image loaded sucessfully");
});

panorama.addEventListener("error", function (error) {
  console.error("Didnt work", error);
});
//viewer.add(panoramaImage);
