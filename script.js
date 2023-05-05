//Bangkok IANA Timezone LIVE
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Bangkok",
  });
  const formattedString = dateString.replace(", ", " - ");
  const timeArray = formattedString.split(":"); // Split the time string into an array

  // Combine the hours and minutes into a new time string
  const newTimeString = timeArray[0] + ":" + timeArray[1];
  const lastAMPM = formattedString.substring(formattedString.length - 3);
  timeDisplay.textContent = newTimeString + lastAMPM;
}
setInterval(refreshTime, 0);

//EXPERTISE
function displayExpertise() {
  const bioExpertise = document.querySelector("#bio-expertise");
  bioExpertise.textContent = "art direction, print, motion & photography.";
  bioExpertise.style.textDecoration = "none";
  bioExpertise.style.backgroundColor = "inherit";
  bioExpertise.style.color = "inherit";
}

//SECTORS
function displaySectors() {
  const bioSectors = document.querySelector(".bio-sectors");
  bioSectors.textContent =
    "from Education, NGOs, non-profit, Advertising, Healthcare, Fintech to F&B and Nightlife,";
  const bioSectorsLink = document.querySelector("#multiple-sectors");
  bioSectorsLink.style.textDecoration = "none";
  bioSectorsLink.style.backgroundColor = "inherit";
  bioSectorsLink.style.color = "inherit";
}

//FACES
const faces = [
  "images/faces/bro-1.svg",
  "images/faces/bro-2.svg",
  "images/faces/big-nose.svg",
  "images/faces/grin.svg",
  "images/faces/mountain-temple.svg",
  "images/faces/one-eyed.svg",
  "images/faces/samurai-1.svg",
  "images/faces/samurai-3.svg",
  "images/faces/conspire.svg",
  "images/faces/cheeky.svg",
  "images/faces/blah.svg",
  "images/faces/sassy.svg",
  "images/faces/general.svg",
  "images/faces/dragon-dance.svg",
  "images/faces/content.svg",
  "images/faces/satisfied.svg",
  "images/faces/scream.svg",
  "images/faces/moutain-steam.svg",
  "images/faces/meh.svg",
  "images/faces/emo.svg",
  "images/faces/endless.svg",
  "images/faces/temple.svg",
];

let currentFaceIndex = -1;

function getRandomFace() {
  let index = Math.floor(Math.random() * faces.length);
  if (index === currentFaceIndex) {
    index = (index + 1) % faces.length;
  }
  currentFaceIndex = index;
  return faces[currentFaceIndex];
}

function setFace() {
  const faceUrl = getRandomFace();
  const faceImg = document.querySelector(".faces-img");
  faceImg.src = faceUrl;
}

setFace();

window.setInterval(() => {
  setFace();
}, 2000);

//DISPLAY CURRENT WEATHER - OpenWeather
const apiKey = "9f6562695ed85f8105bf1d55df422373"; // OpenWeatherMap API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
  "Ho Chi Minh"
)}&units=metric&appid=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const weatherDescription =
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1);
    const temperature = Math.round(data.main.temp);
    const city = data.name;
    const country = data.sys.country;

    const weatherText = `${temperature}°C — ${weatherDescription}`;

    const weatherElement = document.getElementById("weather-text");
    weatherElement.textContent = weatherText; // Set the text content of the HTML element with ID "weather-text" to the weather text
  })
  .catch((error) => {
    console.error(`Error fetching weather data: ${error}`);
  });

//NEW DARK MODE WITH dark-mode.css
// Check if it's currently between 6pm and 7am in the user's timezone
const currentTime = new Date();
const isNighttime = currentTime.getHours() >= 19 || currentTime.getHours() < 7;

if (isNighttime) {
  // Create a link element for the dark mode stylesheet
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "dark-mode.css";

  // Add the link element to the page's head element
  document.head.appendChild(link);
} else {
  // Remove any existing link elements for the dark mode stylesheet
  const links = document.head.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.href.includes("dark-mode.css")) {
      document.head.removeChild(link);
    }
  }
}

// DARK LIGHT MANUAL MODE V2
const darkModeBtn = document.querySelector(".dark-mode-button");
const lightModeBtn = document.querySelector(".light-mode-button");

function lightMode2() {
  const links = document.head.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.href.includes("dark-mode.css")) {
      document.head.removeChild(link);
    }
  }

  // Set buttons
  lightModeBtn.style.display = "none";
  darkModeBtn.style.dislay = "inherit";
}

function darkMode2() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "dark-mode.css";

  // Add the link element to the page's head element
  document.head.appendChild(link);

  // Set buttons
  darkModeBtn.style.dislay = "none";
  lightModeBtn.style.display = "inherit";
}

// GREETS BASED ON TIME
// const timeGreets = document.querySelector(".time-greets");
// const isMorning = currentTime.getHours() >= 7 || currentTime.getHours() < 18;
// const isEvening = currentTime.getHours() >= 18 || currentTime.getHours() < 21;
// if (isMorning) {
//   timeGreets.textContent = "G'day,";
// };
// if (isAfternoon) {
//   timeGreets.textContent = "G'afternoon,";
// };
// if (isEvening) {
//   timeGreets.textContent = "G'evening,";
// };
// if (isMidnight) {
//   timeGreets.textContent = "G'night,";
// };

//RANDOM IMG OVERLAY
const images = [
  "images/overlay-images/artwork/Civil-War.gif",
  "images/overlay-images/artwork/fighter.gif",
  "images/overlay-images/artwork/Planet1.png",
  "images/overlay-images/artwork/Planet2.png",
  "images/overlay-images/artwork/Planet3.png",
  "images/overlay-images/artwork/Planet4.png",
  "images/overlay-images/artwork/Planet5.png",
  "images/overlay-images/artwork/Planet6.png",
  "images/overlay-images/artwork/Planet7.png",
  "images/overlay-images/artwork/Planet8.png",
  "images/overlay-images/artwork/Planet9.png",
  "images/overlay-images/artwork/Rampage.gif",
  // "images/overlay-images/artwork/Redemption.gif",
  "images/overlay-images/artwork/screenprint1.jpg",
  "images/overlay-images/artwork/screenprint2.jpg",
  "images/overlay-images/artwork/screenprint4.jpg",
  "images/overlay-images/artwork/uss-arkansas-gif.gif",
  "images/overlay-images/artwork/War-&-Civilization.gif",
  "images/overlay-images/artwork/War-Horse.gif",
];

let currentIndex = -1;

function getRandomImage() {
  let index = Math.floor(Math.random() * images.length);
  if (index === currentIndex) {
    index = (index + 1) % images.length;
  }
  currentIndex = index;
  return images[currentIndex];
}

function setOverlayImage() {
  const imageUrl = getRandomImage();
  const overlayImg = document.querySelector(".overlay-img");
  overlayImg.src = imageUrl;
}

setOverlayImage();

window.setInterval(() => {
  setOverlayImage();
}, 4000);

//AUTO COPYRIGHT CURRENT YEAR, I'M LAZY TO UPDATE MY WEB
const currentYear = document.getElementById("current-year");

window.onload = function () {
  const getCurrentYear = new Date().getFullYear();
  currentYear.textContent = getCurrentYear;
};

//SEE MORE BRANDS
const overseasBrands = document.querySelector("#overseas-brands");
const seeMoreBrandsBtn = document.querySelector(".see-more-brands-btn");
const seeMoreBrandsBar = document.querySelector(".gradident-bar-brands");

function seeMoreBrands() {
  overseasBrands.style.visibility = "visible";
  overseasBrands.style.opacity = "1";
  overseasBrands.style.display = "inherit";
  seeMoreBrandsBtn.style.display = "none";
  seeMoreBrandsBtn.style.opacity = "0";
  seeMoreBrandsBar.style.dislay = "none";
  seeMoreBrandsBar.style.opacity = "0";
}

//SEE MORE EXP
const moreExp = document.querySelector("#more-exp");
const seeMoreExpBtn = document.querySelector(".see-more-exp-btn");
const seeMoreExpBar = document.querySelector(".gradident-bar-exp");

function seeMoreExp() {
  moreExp.style.visibility = "visible";
  moreExp.style.opacity = "1";
  moreExp.style.display = "inherit";
  seeMoreExpBtn.style.display = "none";
  seeMoreExpBtn.style.opacity = "0";
  seeMoreExpBar.style.dislay = "none";
  seeMoreExpBar.style.opacity = "0";
}

// OVERLAY IMGS
// Array of image URLs
const photographyImages = [
  "images/photography/0037_17.jpg",
  "images/photography/0038_17A.jpg",
  "images/photography/0039_18.jpg",
  "images/photography/0040_18A.jpg",
  "images/photography/0041_19.jpg",
];

let currentPhotographyIndex = -1;

function getRandomPhotographyImage() {
  let photographyIndex = Math.floor(Math.random() * photographyImages.length);
  if (photographyIndex === currentPhotographyIndex) {
    photographyIndex = (photographyIndex + 1) % photographyImages.length;
  }
  currentPhotographyIndex = photographyIndex;
  return photographyImages[currentPhotographyIndex];
}

function setOverlayPhotographyImage() {
  const photographyImageUrl = getRandomPhotographyImage();
  const overlayPhotographyImg = document.querySelector(".photo-overlay-img");
  overlayPhotographyImg.src = photographyImageUrl;
}

setOverlayPhotographyImage();

window.setInterval(() => {
  setOverlayPhotographyImage();
}, 4000);

function showImages() {
  const photographyContainer = document.getElementsByID("hover-images");
  const photographyContainer2 =
    document.getElementsByClassName("photo-overlay-img");
  // Show the container
  photographyContainer.style.display = "flex";
  photographyContainer2.style.display = "flex";
}

function hideImages() {
  // Hide the container
  photographyContainer.style.display = "none";
}

// MARQUEE V2
// Get the container and content elements
const container = document.querySelector(".marquee-container");
const content = document.querySelector(".marquee-content");

// Get the width of the container and content
const containerWidth = container.offsetWidth;
const contentWidth = content.offsetWidth;

// Clone the content element and add it to the container
const clonedContent = content.cloneNode(true);
container.appendChild(clonedContent);

// Define the animation function
function animateMarquee() {
  // Move the container to the left by 1 pixel
  container.style.transform = "translateX(-1px)";

  // If the content has scrolled offscreen, reset its position
  if (container.offsetLeft < -contentWidth) {
    container.style.transform = `translateX(${containerWidth}px)`;
  }

  // Repeat the animation every frame
  requestAnimationFrame(animateMarquee);
}

// Start the animation
animateMarquee();

//GALLERY

// GRAB CONTACT EMAIL FORM
// const form = document.getElementById("contact-form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   const subject = `New message from ${name}`;
//   const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`;
//   window.location.href = `mailto:hello@ca-tran.com?subject=${subject}&body=${body}`;
// });

//LIGHT DARK MODE MANUAL
// //DARK MODE
// function darkMode() {
//   const darkElement = document.body;
//   const lightButton = document.querySelector(".light-mode-button");
//   darkElement.classList.remove("light-mode");
//   darkElement.classList.toggle("dark-mode");
// }

// //LIGHT MODE
// function lightMode() {
//   const lightElement = document.body;
//   const darkButton = document.querySelector(".dark-mode-button");
//   lightElement.classList.remove("dark-mode");
//   lightElement.classList.toggle("light-mode");
// }

// //DARK MODE
// function darkMode() {
//   const link = document.createElement('link');
//   link.rel = 'stylesheet';
//   link.href = 'dark-mode.css';

//   // Add the link element to the page's head element
//   document.head.appendChild(link);
// }
