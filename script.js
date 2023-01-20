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

//Display Sectors
function displaySectors() {
  const bioSectors = document.querySelector("#bio-sectors");
  bioSectors.innerText = "from Education, NGOs, Advertising, Healthcare, Fintech to F&B and Nightlife,";
  const bioSectorsLink = document.querySelector("#multiple-sectors")
  bioSectorsLink.style.textDecoration = "none";

}

//Display expertise
function displayExpertise() {
  const bioExpertise = document.querySelector("#bio-expertise");
  bioExpertise.innerText = "graphic design & motion graphics.";
  bioExpertise.style.textDecoration = "none";
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


//WUNDERGROUNDWEATHER
$(document).ready(function () {
	var currentDate,
			currentLocation = 70000, // Default to Chicago
			currentTemp = [],
			currentUnits = 'c'; // Default to Fahrenheit

	// ---------------
	// Weather API
	// ---------------
	
	// Send request to API to get weather data
	function getWeather(location) {
		var weatherRequest = $.ajax({
			method: 'GET',
			url: '' + location + '.json'
		});
	}
	
	// Grab only the needed info from weather request and return
	function processData(data) {
		var current = data.current_observation;
		var daily = data.forecast.simpleforecast.forecastday;
		// Store values for current date, location, and temp
		currentLocation = current.display_location.city + ', ' + current.display_location.state;
		currentTemp = {
			c: current.temp_c,
		};
		forecast.length = 0; // Empty array first
		// Display weather ONLY after processing
		displayWeather();
	}
	
	// Display data on page
	function displayWeather() {
		// Separate today's forecast from the rest
		var today = forecast.shift();
		// Today - Print weather data
		$('#current .conditions').html(today.conditions);
		$('#lastUpdated').html('Last updated at ' + getCurrentTime());
		// Get/update temps with current units
		updateTemps(currentUnits);
	}
	
	// Update temps and add to page
	function updateTemps(units) {
		$('#current .temp').html(Math.round(currentTemp[units]));
		$forecastDivs.each(function(index) {
			$(this).find('.high').html(forecast[index][units].high);
			$(this).find('.low').html(forecast[index][units].low);
		});
	}
	
	// ------------------------
	// Functions to run onload
	// ------------------------ 
	window.onload = function() {
		getWeather(currentLocation); // Default to get Chicago weather
		// Suggest to share location with message and button animation
	};
});


//openweathermap WEATHER
// var descrip = document.querySelector('#description');
// var temp = document.querySelector('#temp');

// window.onload = function() {
//   fetch('https://api.openweathermap.org/data/2.5/weather?id=1566083&appid=9f6562695ed85f8105bf1d55df422373&units=metric')
//   .then(res => res.json())

//   .then(data => 
//   {
//     var descrip = data['weather']['0']['description']
//     var tempature = data['main']['temp']
//     temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
//     description.innerHTML = `Conditions: <span>${descrip}<span>`
//   })
// };