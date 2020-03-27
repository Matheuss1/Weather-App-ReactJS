import React from 'react';
import './dayTime.scss'
export default function DayTime() {
  var days = ["Sun", "Mon", "Tues", "Wed",
    "Thurs", "Fri", "Sat"];

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var strTime = days[date.getDay()] + ', ' + hours + ':' + minutes + ' ' + ampm;

    return strTime;
  }

  setInterval(function () {
    var d = new Date();
    document.getElementById("timer").innerHTML = formatAMPM(d);
  }, 1000)
  return (
    <div id="timer">
    </div>
  )
}
