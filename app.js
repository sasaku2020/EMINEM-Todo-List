// Selectors
const hours = document.querySelector('.hours');
const Mins = document.querySelector('.Mins');
const secs = document.querySelector('.secs');
const day = document.querySelector('.day');
let timezone = "AM";


// Assigning Time to Div
let NewTime = setInterval(function clock() {
    const dateToday = new Date();
    let hourTime = dateToday.getHours();
    let minTime = dateToday.getMinutes();
    let secTime = dateToday.getSeconds();

    hourTime = parseInt(hourTime);

    //showing 12 hours mode function
    (hourTime >= 12) ? hourTime = hourTime - 12: console.log(hourTime);
    (hourTime >= 12) ? timezone = "PM": timezone = "AM";


    // showing  Double Hour Mode functions
    if (hourTime < 10) hourTime = `0${hourTime}`;
    if (minTime < 10) minTime = `0${minTime}`;
    if (secTime < 10) secTime = `0${secTime}`;



    //showing clock
    hours.textContent = hourTime;
    Mins.textContent = minTime;
    secs.textContent = secTime;
}, 1000);