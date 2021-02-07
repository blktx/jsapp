const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const birthday = "16 Oct 2021";



function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const total_seconds = (birthdayDate - currentDate) / 1000;

    const days = Math.floor(total_seconds / 3600 / 24);
    const hours = Math.floor(total_seconds / 3600) % 24;
    const minutes = (Math.floor(total_seconds / 60)) % 60;
    const seconds = Math.floor(total_seconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);