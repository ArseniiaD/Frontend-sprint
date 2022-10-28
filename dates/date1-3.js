/*Exercise 1
Find the timezones of :

Anchorage (USA) -8
Reykjavik (Iceland) 0
Kyiv (Ukraine) +3
And display the date and time of these cities along with the time and date of Brussels.*/
/*let b = new Date()
console.log(b)
let a = b.toLocaleString('RU',{timeZone:'Europe/Moscow',timeStyle:"medium",hourCycle:'h24'})
console.log(a)
let c = new Date ().toLocaleString("fr-BE",{timeZone:'Etc/GMT-2',dateStyle:'medium',timeStyle :'long', hourCycle:'h24'}) 
console.log(c)*/

//Variant 1
div1 = document.createElement("div")
div1.textContent = "Exercise 1 Variant 1"
document.body.appendChild(div1)
p0 = document.createElement("p")
div1.appendChild(p0)
formatDate = (date) => {
    return date.getFullYear() + '/' +
           (date.getMonth() +1) + '/' +
           date.getDate() + ' ' +
           date.getHours() + ':' +
           date.getMinutes() + ':' +
           date.getSeconds();
        }
setInterval (() => {
let dateCur = Date.now()
let brussels = new Date(dateCur)
let tz = brussels.getTimezoneOffset()*(-1)
//console.log(tz)
let kyiv = new Date(dateCur + (60*60*1000));
let reykjavik = new Date(dateCur - (120*60*1000));
let anchorage = new Date(dateCur - (10*60*60*1000));
p0.innerHTML = "Date and time in Brussels: " + formatDate(brussels) + "<br />" + "Date and time in Kyiv: " + formatDate(kyiv) + "<br />" + "Date and time in Reykiavik: " + formatDate(reykjavik) + "<br />" + "Date and time in Anchorage: " + formatDate(anchorage)}, 1000)

//Variant 2
div2 = document.createElement("div")
div2.textContent = "Exercise 1 Variant 2"
document.body.appendChild(div2)
p01 = document.createElement("p")
div2.appendChild(p01)
setInterval(() => {
    let brussels1 = new Date().toLocaleString('BE',{timeZone:'Europe/Brussels',timeStyle:"medium",hourCycle:'h24'})
    let spt = new Date().toLocaleString('RU',{timeZone:'Europe/Moscow',timeStyle:"medium",hourCycle:'h24'})
    let reykjavik1 = new Date().toLocaleString('en-US',{timeZone:'Atlantic/Reykjavik',timeStyle:"medium",hourCycle:'h24'})
    let anchorage1 = new Date().toLocaleString("en-US",{timeZone:'America/Anchorage',timeStyle:"medium",hourCycle:'h24'})
    p01.innerHTML = "Time in Brussels: " + brussels1 + "<br />" + "Time in SPT: " + spt + "<br />" + "Time in Reykiavik: " + reykjavik1 + "<br />" + "Time in Anchorage: " + anchorage1}
    
,1000);


/*Exercise 2
Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
Write a function to find how many days have passed since any point in time (after 1970).*/
div2 = document.createElement("div")
div2.textContent = "Exercise 2"
document.body.appendChild(div2)
p = document.createElement("p")
div2.appendChild(p)

dateOfBirth = new Date (1992, 9, 28)
current = new Date()
days = Math.round((current.getTime() - dateOfBirth.getTime()) / (1000*60*60*24))
p.textContent = "I was born " + days + " days ago!"

button = document.createElement("button")
button.innerText = "Press me to see the magic"
div2.appendChild(button)
button.addEventListener('click', () => {
var year = parseInt(prompt('Enter the year (YYYY)'));
var month = parseInt(prompt('Enter the month'));
var day = parseInt(prompt('Enter the day'));

if ((year.toString().length != 4 || year < 1970) 
    || (month < 1 || month > 12) 
    || (day < 1 || day > 31)) 
    {
        alert('Invalid date');
    }

else {
    var date = new Date(year, (month - 1), day),
    currentDate = new Date(),
    days1 = Math.round((currentDate - date)/86400000);

    alert(days1 + " days passed since " + day + "." + month + "." + year + ".")
    }
})

/*Exercise 3
Using timestamps, find the exact time and date we will be in 80000 hours.
Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.*/

div3 = document.createElement("div")
div3.textContent = "Exercise 3"
document.body.appendChild(div3)
p1 = document.createElement("p")
div3.appendChild(p1)
let dateFuture = new Date(Date.now() + 80000*60*60*1000)
p1.innerHTML = "In 80000 hours the date and time will be: " + formatDate(dateFuture) + "<br />" + "<br />" + "Enter the amount of hours:";


input = document.createElement("input")
div3.appendChild(input)
input.setAttribute("type", "number");
p2 = document.createElement("p")
div3.appendChild(p2)

input.addEventListener('keyup', () => {
    const hourtime = ((input.value)*(60*60*1000));
    const futureDate = new Date ((Date.now() + hourtime));

    p2.textContent = ("Once upon a time, in "+ input.value + " hours, we will have "+ futureDate.toLocaleString())

})

