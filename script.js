//Bangkok IANA Timezone LIVE
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleTimeString("en-US", {timeZone: "Asia/Bangkok"});
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 0);


//DARK MODE
function darkMode() {
  var darkElement = document.body;
  var lightButton = document.querySelector(".light-mode-button");
  darkElement.classList.remove("light-mode");
  darkElement.classList.toggle("dark-mode");
}

//LIGHT MODE
function lightMode() {
  var lightElement = document.body;
  var darkButton = document.querySelector(".dark-mode-button");
  lightElement.classList.remove("dark-mode");
  lightElement.classList.toggle("light-mode");
}

//EXPERTISE
function displayExpertise() {
	const bioExpertise = document.querySelector("#bio-expertise");
	bioExpertise.innerText = "art direction, print, motion & photography.";
	bioExpertise.style.textDecoration = "none";
	bioExpertise.style.backgroundColor = "var(--color-bg-white)";
	bioExpertise.style.color = "var(--color-black)";  
  }
  
//SECTORS
function displaySectors() {
  const bioSectors = document.querySelector(".bio-sectors");
  bioSectors.innerText = "from Education, NGOs, Advertising, Healthcare, Fintech to F&B and Nightlife,";
  const bioSectorsLink = document.querySelector("#multiple-sectors")
  bioSectorsLink.style.textDecoration = "none";
  bioSectorsLink.style.backgroundColor = "var(--color-bg-white)";
  bioSectorsLink.style.color = "var(--color-black)";
}

//SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
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

//MOBILE NAV & BURGER
// const navBurger = document.querySelector(".nav-burger");
// const navMenu = document.querySelector(".nav-menu");

// navBurger.addEventListener("click", () => {
//   navBurger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//   navBurger.classList.remove("active");
//   navMenu.classList.remove("active");
// }))


//WEATHER CHATGPT//
const apiKey = "9f6562695ed85f8105bf1d55df422373"; // Replace with your own OpenWeatherMap API key
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