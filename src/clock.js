// clock.js

function updateClock() {
  var now = new Date();

  // Get the current Indian Standard Time (IST)
  var hours = now.getUTCHours() + 5; // Add 5 hours for IST
  var minutes = now.getUTCMinutes() + 30; // Add 30 minutes for IST
  var seconds = now.getUTCSeconds();

  // hours = hours % 12

  var hourAngle = (360 / 12) * hours + (360 / 12 / 60) * minutes;
  var minuteAngle = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
  var secondAngle = (360 / 60) * seconds;

  // Update clock hands' rotations
  document.querySelector('.hour-hand').style.transform = `rotate(${hourAngle}deg)`;
  document.querySelector('.minute-hand').style.transform = `rotate(${minuteAngle}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secondAngle}deg)`;

  //  // Display IST time in 24-hour format
  //  var timeString24 = formatTime(hours%24, minutes%60, seconds%60, true);
  //  document.getElementById('ist-time-24').textContent = 'IST (24-hr): ' + timeString24;

  //  // Display IST time with AM/PM indicator
  //  var timeStringAMPM = formatTime(hours%24, minutes%60, seconds%60, false);
  //  document.getElementById('ist-time-ampm').textContent = 'IST (AM/PM): ' + timeStringAMPM;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initialize clock when the page loads
updateClock();

// function formatTime(hour, minute, second, use24HourFormat) {
//   var formattedHour = use24HourFormat ? hour : ((hour + 11) % 12 + 1); // Convert to 12-hour format if needed
//   var amPMIndicator = use24HourFormat ? '' : (hour >= 12 ? ' PM' : ' AM');
//   formattedHour = formattedHour < 10 ? '0' + formattedHour : formattedHour;
//   minute = minute < 10 ? '0' + minute : minute;
//   second = second < 10 ? '0' + second : second;
//   return formattedHour + ':' + minute + ':' + second + amPMIndicator;
// }