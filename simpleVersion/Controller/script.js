const timeElement = document.getElementById("time");
const toggleFormatButton = document.getElementById("toggleFormat");
const toggleThemeButton = document.getElementById("toggleTheme");

let is24HourFormat = true;

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (!is24HourFormat) {
        const period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        timeElement.innerText = `${hours}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)} ${period}`;
    } else {
        timeElement.innerText = `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
    }
}

function formatTimeComponent(component) {
    return component < 10 ? `0${component}` : component;
}

toggleFormatButton.addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    updateTime();
});

toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

updateTime();
setInterval(updateTime, 1000);
