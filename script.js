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
  darkElement.classList.remove("light-mode");
  darkElement.classList.toggle("dark-mode");
  var lightButton = document.querySelector(".light-mode-button");
}

//LIGHT MODE
function lightMode() {
  var lightElement = document.body;
  lightElement.classList.remove("dark-mode");
  lightElement.classList.toggle("light-mode");
  var darkButton = document.querySelector(".dark-mode-button");
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

//BurgerNav
// function myNav() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }