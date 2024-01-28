// Array of image URLs
var images = [
  "images/image1.jpeg",
  "images/117694271-family-in-rocky-mountains-national-park-in-usa.jpg",
  "images/image_random_p4QuotKG_1665664245097_raw.jpg",
];
var currentIndex = 0;

const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  controlBar: true,
});

// Load the first image
var panorama = new PANOLENS.ImagePanorama(images[currentIndex]);
viewer.add(panorama);

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
