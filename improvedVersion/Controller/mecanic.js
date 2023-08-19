const hourBox = document.getElementById("hour-box");
const minuteBox = document.getElementById("minute-box");
const secondBox = document.getElementById("second-box");
const amPmBox = document.getElementById("am-pm");

const themeOptions = document.querySelectorAll(".theme-dropdown .option");
const themeSelectedOption = document.getElementById("theme-selected-text");
const themeSelectedIcon = document.getElementById("theme-selected-icon");
const themeOptionsList = document.querySelector(".theme-dropdown .options-list");

const formatOptions = document.querySelectorAll(".format-dropdown .option");
const formatSelectedOption = document.getElementById("format-selected-text");
const formatSelectedIcon = document.getElementById("format-selected-icon");
const formatOptionsList = document.querySelector(".format-dropdown .options-list");

themeOptions.forEach(option => {
  option.addEventListener("click", () => {
    const themeValue = option.getAttribute("data-value");
    document.body.className = themeValue;
    themeSelectedOption.textContent = option.textContent;
    hourBox.className = `time-box ${themeValue}-hour-box`;
    minuteBox.className = `time-box ${themeValue}-minute-box`;
    secondBox.className = `time-box ${themeValue}-second-box`;

    themeOptionsList.style.display = "none";
    option.classList.add("selected");
  });
});
// Edição para cada tema - body and icon
themeOptions.forEach(option => {
  option.addEventListener('click', () => {
    const selectedTheme = option.getAttribute('data-value');
    document.body.className = selectedTheme;
  });
});

formatOptions.forEach(option => {
  option.addEventListener("click", () => {
    const formatValue = option.getAttribute("data-value");
    updateClock(formatValue === "12h");
    formatSelectedOption.textContent = option.textContent;
    
    formatOptionsList.style.display = "none";
    option.classList.add("selected");
  });
});

themeSelectedOption.addEventListener("click", () => {
  themeOptionsList.style.display = themeOptionsList.style.display === "block" ? "none" : "block";
});

formatSelectedOption.addEventListener("click", () => {
  formatOptionsList.style.display = formatOptionsList.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (event) => {
  if (!themeOptionsList.contains(event.target) && !themeSelectedOption.contains(event.target)) {
    themeOptionsList.style.display = "none";
  }
  if (!formatOptionsList.contains(event.target) && !formatSelectedOption.contains(event.target)) {
    formatOptionsList.style.display = "none";
  }
});

function updateClock(use12HourFormat) {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    if (use12HourFormat) {
      const amPm = hours >= 12 ? "PM" : "AM";
      hours = hours > 12 ? hours - 12 : hours;
      hours = hours === 0 ? 12 : hours;
      amPmBox.textContent = amPm;
    } else {
      amPmBox.textContent = "";
    }

    hourBox.textContent = hours < 10 ? `0${hours}` : hours;
    minuteBox.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondBox.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }, 1000);
}

let intervalId;

updateClock(true);
