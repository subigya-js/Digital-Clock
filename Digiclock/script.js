var curDate = new Date()

let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let date = document.getElementById("date") 

setInterval(() => {
    let curTime = new Date()

    hrs.innerHTML = (curTime.getHours() < 10 ? "0" : "") + curTime.getHours()
    min.innerHTML = (curTime.getMinutes() < 10 ? "0" : "") + curTime.getMinutes()
    sec.innerHTML = (curTime.getSeconds() < 10 ? "0" : "") + curTime.getSeconds()
}, 1000)

let year = document.getElementById("year")
let month = document.getElementById("month")
let day = document.getElementById("day")
let weekDay = document.getElementById("weekDay")


year.innerHTML = curDate.getFullYear()
month.innerHTML = curDate.getMonth()
day.innerHTML = curDate.getDate()
weekDay.innerHTML = curDate.getDay()


//Week Day
if (weekDay.innerHTML == 0)
    weekDay.innerHTML = "Sunday"

else if (weekDay.innerHTML == 1)
    weekDay.innerHTML = "Monday"

else if (weekDay.innerHTML == 2)
    weekDay.innerHTML = "Tuesday"

else if (weekDay.innerHTML == 2)
    weekDay.innerHTML = "Wednesday"

else if (weekDay.innerHTML == 2)
    weekDay.innerHTML = "Thursday"

else if (weekDay.innerHTML == 2)
    weekDay.innerHTML = "Friday"

else if (weekDay.innerHTML == 6)
    weekDay.innerHTML = "Saturday"


//Month
if (month.innerHTML == 0)
    month.innerHTML = "January"

else if (month.innerHTML == 1)
    month.innerHTML = "Feburary"

else if (month.innerHTML == 2)
    month.innerHTML = "March"

else if (month.innerHTML == 3)
    month.innerHTML = "April"

else if (month.innerHTML == 4)
    month.innerHTML = "May"

else if (month.innerHTML == 5)
    month.innerHTML = "June"

else if (month.innerHTML == 5)
    month.innerHTML = "July"

else if (month.innerHTML == 7)
    month.innerHTML = "August"

else if (month.innerHTML == 8)
    month.innerHTML = "September"

else if (month.innerHTML == 9)
    month.innerHTML = "October"

else if (month.innerHTML == 10)
    month.innerHTML = "November"

else if (month.innerHTML == 11)
    month.innerHTML = "December"