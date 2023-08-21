let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let date = document.getElementById("date");
let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let weekDay = document.getElementById("weekDay");

function formatNumber(number) {
  return (number < 10 ? "0" : "") + number;
}

setInterval(() => {
  let curTime = new Date();

  hrs.innerHTML = formatNumber(curTime.getHours());
  min.innerHTML = formatNumber(curTime.getMinutes());
  sec.innerHTML = formatNumber(curTime.getSeconds());
}, 1000);

let curDate = new Date();

year.innerHTML = curDate.getFullYear();
month.innerHTML = curDate.toLocaleString("default", { month: "long" });
day.innerHTML = curDate.getDate();
weekDay.innerHTML = curDate.toLocaleString("default", { weekday: "long" });
