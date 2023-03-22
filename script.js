//Bangkok IANA Timezone LIVE
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleTimeString("en-US", {timeZone: "Asia/Bangkok"});
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
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
  bioSectors.textContent = "from Education, NGOs, Advertising, Healthcare, Fintech to F&B and Nightlife,";
  const bioSectorsLink = document.querySelector("#multiple-sectors");
  bioSectorsLink.style.textDecoration = "none";
  bioSectorsLink.style.backgroundColor = "inherit";
  bioSectorsLink.style.color = "inherit";
}

//SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("active");
    
    setTimeout(showSlides, 2000);
}

//SVG TRACE
//get svg length

// var path = document.querySelector('.path');
// var length = path.getTotalLength()

//CYCLE TEXT
// var greets = $('div[id^="hello-"]').hide(),
//     i = 0;

// function cycle() { 
//     greets.eq(i).fadeIn(500)
//                 .delay(2000)
//                 .fadeOut(500, cycle);
//     i = ++i % greets.length;
// };

//CURRENT WEATHER//
const apiKey = "9f6562695ed85f8105bf1d55df422373"; // OpenWeatherMap API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent("Ho Chi Minh")}&units=metric&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherDescription = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    const temperature = Math.round(data.main.temp);
    const city = data.name;
    const country = data.sys.country;
    
    const weatherText = `${temperature}°C — ${weatherDescription}`;
    
    const weatherElement = document.getElementById("weather-text");
    weatherElement.textContent = weatherText; // Set the text content of the HTML element with ID "weather-text" to the weather text
  })
  .catch(error => {
    console.error(`Error fetching weather data: ${error}`);
  });

//NEW DARK MODE WITH dark-mode.css
// Check if it's currently between 6pm and 7am in the user's timezone
const currentTime = new Date();
const isNighttime = currentTime.getHours() >= 19 || currentTime.getHours() < 7;

if (isNighttime) {
  // Create a link element for the dark mode stylesheet
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'dark-mode.css';

  // Add the link element to the page's head element
  document.head.appendChild(link);
} else {
  // Remove any existing link elements for the dark mode stylesheet
  const links = document.head.getElementsByTagName('link');
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.href.includes('dark-mode.css')) {
      document.head.removeChild(link);
    }
  }
}

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