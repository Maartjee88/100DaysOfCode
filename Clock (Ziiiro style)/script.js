const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const hoursPercent = (hours / 12) * 100 - 100;
const minutesPercent = (minutes / 60) * 100;
const secondsPercent = (seconds / 60) * 100;

const idHours = "#hours";
const idMinutes = "#minutes";
const idSeconds = "#seconds";

function getHand(clockHand, progress) {
  const hand = document.querySelector(clockHand);
  const radius = hand.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;

  hand.style.strokeDasharray = `${circumference} ${circumference}`;
  hand.style.strokeDashoffset = `${circumference}`;

  function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    hand.style.strokeDashoffset = offset;
  }

  setProgress(progress);
}

function updateClock() {
  var newDate = new Date();
  var newSeconds = (newDate.getSeconds()/ 60) * 100;
  var newMinutes = (newDate.getMinutes()/ 60) * 100;
  var newHours = ((newDate.getHours()/ 12) * 100) - 100;

  getHand(idHours, newHours);
  getHand(idMinutes, newMinutes);
  getHand(idSeconds, newSeconds);
}

setInterval(function() {updateClock()}, 1000);