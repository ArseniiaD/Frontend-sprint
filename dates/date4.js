topP = document.querySelector(".topP")

p21= document.createElement("p");
p21.style.color = "#909090";
p22= document.createElement("p");
p22.style.color = "#7C7C7C"
middle = document.querySelector(".middle")
middle.appendChild(p21)
middle.appendChild(p22)

p3 = document.createElement("p");
bottom = document.querySelector(".bottom")
bottom.appendChild(p3)

p41 = document.querySelector(".hours")
p42 = document.querySelector(".secs")

let today = new Date()
let hours0 = today.getHours()
let minutes = today.getMinutes()
let a = 0

const refresh = () => {
    
today = new Date()

let daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
let day = today.getDay();
topP.textContent = daysOfWeek[day-1]

p21.textContent = today.getDate()

let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
month = today.getMonth()
p22.textContent = months[month]

p3.textContent = today.getFullYear()

if (minutes < 10) {
    p41.textContent = hours0 + ":0" + minutes + ":"
}
else {
    p41.textContent = hours0 + ":" + minutes + ":"
}


let seconds = today.getSeconds()
   if (seconds < 10) {
       p42.textContent = "0" + seconds
   }
   else {
       p42.textContent = seconds
   }
  setInterval(refresh, 1000)
}


p41.addEventListener("click", () => {
    if (hours0 > 12 && a == 0) {
        hours0 = (hours0 - 12);
        a = 1;
    }

    else if (a == 1) {
        hours0 = (hours0 + 12);
        a = 0;
    }
})

refresh()
//padStart