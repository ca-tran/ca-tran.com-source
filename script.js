//Bangkok IANA Timezone LIVE
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString("en-US", {
    timeZone: "Australia/Sydney",
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
  "Sydney"
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

    const weatherText = `${temperature}°C – ${weatherDescription}`;

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
const darkModeBtn = document.querySelector("button[type='dark-mode']");
const lightModeBtn = document.querySelector("button[type='light-mode']");
// Light mode
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
// Dark mode
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

//RANDOM ARTWORK
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
  "images/overlay-images/artwork/screenprint1.jpg",
  "images/overlay-images/artwork/screenprint2.jpg",
  "images/overlay-images/artwork/screenprint4.jpg",
  "images/overlay-images/artwork/uss-arkansas-gif.gif",
  "images/overlay-images/artwork/War-&-Civilization.gif",
  "images/overlay-images/artwork/War-Horse.gif",
];

const overlayImg = document.querySelector(".artwork-img");
let currentIndex = -1;

function getRandomImage() {
  let index = Math.floor(Math.random() * images.length);
  if (index === currentIndex) {
    index = (index + 1) % images.length;
  }
  currentIndex = index;
  return images[currentIndex];
}

function updateOverlayImage() {
  const imageUrl = getRandomImage();
  overlayImg.src = imageUrl;
}

updateOverlayImage();

function rotateOverlayImage() {
  updateOverlayImage();
}

window.setInterval(rotateOverlayImage, 4000);

// RANDOM PHOTOS
const photoImages = [
  "images/photos/korea/000046460030.jpg",
  "images/photos/korea/000046460031.jpg",
  "images/photos/korea/000046460034.jpg",
  "images/photos/korea/000046460037.jpg",
  "images/photos/korea/000046470009.jpg",
  "images/photos/korea/000046470013.jpg",
  "images/photos/korea/000046490026.jpg",
  "images/photos/korea/000046490028.jpg",
  "images/photos/korea/000046500028.jpg",
  "images/photos/taiwan/IMG_7040.jpg",
  "images/photos/taiwan/IMG_7088.jpg",
  "images/photos/taiwan/IMG_7229.jpg",
  "images/photos/taiwan/IMG_7551.jpg",
  "images/photos/taiwan/IMG_7597.jpg",
  "images/photos/taiwan/IMG_7647.jpg",
  "images/photos/taiwan/IMG_7779.jpg",
  "images/photos/taiwan/IMG_7838.jpg",
  "images/photos/taiwan/IMG_8367.jpg",
  "images/photos/taiwan/IMG_8388.jpg",
  "images/photos/taiwan/IMG_8396.jpg",
  "images/photos/taiwan/IMG_8399.jpg",
  "images/photos/taiwan/IMG_8435.jpg",
  "images/photos/taiwan/IMG_8449.jpg",
  "images/photos/vietnam/0031_14.jpg",
  "images/photos/vietnam/0034_15A.jpg",
  "images/photos/vietnam/000053_June_Lomo 100.jpg",
  "images/photos/vietnam/000060_June_Lomo 100.jpg",
  "images/photos/vietnam/000042010016.jpg",
  "images/photos/vietnam/000042010020.jpg",
  "images/photos/vietnam/000042010025.jpg",
  "images/photos/singapore/000047850008_Lomo 400 02_2019.jpg",
  "images/photos/singapore/000047850014_Lomo 400 02_2019.jpg",
  "images/photos/singapore/000047850018_Lomo 400 02_2019.jpg",
  "images/photos/singapore/000047850024_Lomo 400 02_2019.jpg",
  "images/photos/singapore/000048850004_Kodak Color Plus 200_2019.jpg",
  "images/photos/singapore/000048850007_Kodak Color Plus 200_2019.jpg",
  "images/photos/vietnam/0033_15.jpg",
];

const overlayPhotoImg = document.querySelector(".photos-img");
let currentPhotoIndex = -1;

function getRandomPhotoImage() {
  let photoIndex = Math.floor(Math.random() * photoImages.length);
  if (photoIndex === currentPhotoIndex) {
    photoIndex = (photoIndex + 1) % photoImages.length;
  }
  currentPhotoIndex = photoIndex;
  return photoImages[currentPhotoIndex];
}

function updateOverlayPhotoImage() {
  const photoImageUrl = getRandomPhotoImage();
  overlayPhotoImg.src = photoImageUrl;
}

updateOverlayPhotoImage();

function rotateOverlayPhotoImage() {
  updateOverlayPhotoImage();
}

window.setInterval(rotateOverlayPhotoImage, 4000);

//AUTO COPYRIGHT CURRENT YEAR, I'M LAZY TO UPDATE MY WEB
const currentYear = document.getElementById("current-year");

window.onload = function () {
  const getCurrentYear = new Date().getFullYear();
  currentYear.textContent = getCurrentYear;
};

// RANDOM EMOJIS
function randomEmoji() {
  const emojis = [
    "🍔",
    "🍟",
    "🍸",
    "🌮",
    "🍱",
    "🍚",
    "🍣",
    "💖",
    "🧧",
    "🌯",
    "🍮",
    "🥑",
    "👽",
    "🛹",
    "🦘",
    "👾",
    "🎮",
    "📚",
    "🌏",
    "🌲",
    "🌳",
    "🌾",
  ];
  const emojiContainer = document.querySelector(".crafted-emoji");
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  emojiContainer.innerText = emoji;
}

window.addEventListener("load", (event) => {
  randomEmoji();
});

// color
function color1() {
  document.documentElement.style.setProperty("--color-black", "#043504");
  document.documentElement.style.setProperty("--color-white", "#f1c93b");
  document.documentElement.style.setProperty("--color-dark-gray", "#043504");
  document.documentElement.style.setProperty("--color-black-dark", "#043504");
}

function color2() {
  document.documentElement.style.setProperty("--color-black", "#703100");
  document.documentElement.style.setProperty("--color-white", "#eeeeee");
  document.documentElement.style.setProperty("--color-dark-gray", "#703100");
  document.documentElement.style.setProperty("--color-black-dark", "#703100");
}

// const biosBtn = document.getElementsByClassName(".bios-btn");
// biosBtn.onclick = function colorBios() {

// BIOS COLOR
const biosBtn = document.querySelector(".bios-btn");
const bgImg = document.querySelector(".bg-img");
var biosOn = false;

function colorBios() {
  document.documentElement.style.setProperty("--color-black", "#0000AA");
  document.documentElement.style.setProperty("--color-white", "#eeeeee");
  document.documentElement.style.setProperty("--color-hover-white", "#a90100");
  document.documentElement.style.setProperty("--color-hover-black", "#a90100");
  document.documentElement.style.setProperty("--color-text-black", "#f2f2f2");
  document.documentElement.style.setProperty("--color-text-white", "#f2f2f2");
  document.documentElement.style.setProperty("--color-black-dark", "#0000AA");
  biosBtn.classList.add("bios-active");
  bgImg.style.backgroundImage = "url(images/svg/svg-bg-darkmode.svg)";
  biosOn = true;
}

function colorReset() {
  document.documentElement.style.setProperty(
    "--color-black",
    "rgb(15, 15, 15)"
  );
  document.documentElement.style.setProperty("--color-black", "#1c1c1c");
  document.documentElement.style.setProperty("--color-white", "#f2f2f2");
  document.documentElement.style.setProperty("--color-dark-gray", "#939393");
  document.documentElement.style.setProperty("--color-black-dark", "#0d0d0d");
  biosBtn.classList.remove("bios-active");
  biosOn = false;
}

function biosToggle() {
  if (biosOn) {
    colorReset();
  } else {
    colorBios();
  }
}

// MORE BUTTONS

function moreButtons() {
  const moreBtn = document.querySelector(".more-btn");
  const lessBtn = document.querySelector(".less-btn");

  const biosBtn = document.querySelector(".bios-btn");
  const resetBtn = document.querySelector(".reset-btn");
  const artworkBtn = document.querySelector(".artwork-btn");
  const photosBtn = document.querySelector(".photos-btn");
  moreBtn.style.display = "none";

  // biosBtn.style.display = "inherit";
  // resetBtn.style.display = "inherit";
  // artworkBtn.style.display = "inherit";
  // photosBtn.style.display = "inherit";

  biosBtn.style.visibility = "inherit";
  resetBtn.style.visibility = "inherit";
  artworkBtn.style.visibility = "inherit";
  photosBtn.style.visibility = "inherit";

  // biosBtn.style.opacity = "1";
  // resetBtn.style.opacity = "1";
  // artworkBtn.style.opacity = "1";
  // photosBtn.style.opacity = "1";
  // lessBtn.style.opacity = "1";

  lessBtn.style.visibility = "inherit";
}

function lessButtons() {
  moreBtn.style.display = "inherit";

  biosBtn.style.display = "none";
  resetBtn.style.display = "none";
  artworkBtn.style.display = "none";
  photosBtn.style.display = "none";

  lessBtn.style.display = "none";
}

// SHOW/HIDE ARTWORK

function showPhotos() {
  const artworkContainer = document.querySelector(".artwork-img");
  const photosContainer = document.querySelector(".photos-img");
  artworkContainer.style.opacity = "0";
  photosContainer.style.opacity = "80%";
}
function showArtwork() {
  const artworkContainer = document.querySelector(".artwork-img");
  const photosContainer = document.querySelector(".photos-img");
  artworkContainer.style.opacity = "80%";
  photosContainer.style.opacity = "0";
}

// HIDE ARROW ON SCROLL
// document.addEventListener("DOMContentLoaded", function() {
//       var scrollDownElement = document.querySelector(".scroll-down");
//       var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//       function handleScroll() {
//         var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         if (currentScrollTop > lastScrollTop) {
//           // Scrolling down
//           scrollDownElement.classList.add("hidden");
//         } else {
//           // Scrolling up
//           scrollDownElement.classList.remove("hidden");
//         }

//         lastScrollTop = currentScrollTop;
//       }

//       window.addEventListener("scroll", handleScroll);
//     });

// //SEE MORE BRANDS
// const overseasBrands = document.querySelector("#overseas-brands");
// const seeMoreBrandsBtn = document.querySelector(".see-more-brands-btn");

// function seeMoreBrands() {
//   overseasBrands.style.visibility = "visible";
//   overseasBrands.style.opacity = "1";
//   overseasBrands.style.display = "inherit";
//   seeMoreBrandsBtn.style.display = "none";
//   seeMoreBrandsBtn.style.opacity = "0";
// }

// //SEE MORE EXP
// const moreExp = document.querySelector("#more-exp");
// const seeMoreExpBtn = document.querySelector(".see-more-exp-btn");

// function seeMoreExp() {
//   moreExp.style.visibility = "visible";
//   moreExp.style.opacity = "1";
//   moreExp.style.display = "inherit";
//   seeMoreExpBtn.style.display = "none";
//   seeMoreExpBtn.style.opacity = "0";
// }

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

// // MARQUEE V2
// // Get the container and content elements
// const container = document.querySelector(".marquee-container");
// const content = document.querySelector(".marquee-content");

// // Get the width of the container and content
// const containerWidth = container.offsetWidth;
// const contentWidth = content.offsetWidth;

// // Clone the content element and add it to the container
// const clonedContent = content.cloneNode(true);
// container.appendChild(clonedContent);

// // Define the animation function
// function animateMarquee() {
//   // Move the container to the left by 1 pixel
//   container.style.transform = "translateX(-1px)";

//   // If the content has scrolled offscreen, reset its position
//   if (container.offsetLeft < -contentWidth) {
//     container.style.transform = `translateX(${containerWidth}px)`;
//   }

//   // Repeat the animation every frame
//   requestAnimationFrame(animateMarquee);
// }

// // Start the animation
// animateMarquee();
