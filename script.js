//picks the divs by the id="xx"
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

//javascript has a type "DATE" and she automatically sets the date
const newYears = '21 Feb 2022';

//I made this function to keep picking-up the current time 
function countdown() {
    //picks the value of my newYears const above
    const newYearsDate = new Date(newYears);
    //picks the current Date
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const minutes = (Math.floor(totalSeconds / 60) % 60);

    const seconds = Math.floor(totalSeconds) %60;

    //Send the values calculated to the html file to show in our screen
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

//this is a function to make the '0' apears when time is less than 10
//if whe dont have this he shows like: 9,8,7...
//with this he shows: 09,08,07... 
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//Initial Countdown
countdown();
setInterval(countdown, 1000);