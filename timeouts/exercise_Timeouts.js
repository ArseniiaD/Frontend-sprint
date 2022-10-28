/*Exercise 1
Write a function that mimics the behaviour of a typewriter.
Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.*/

textButton = document.createElement("button");
textButton.textContent = "Press me";
document.body.appendChild(textButton);
textButton.addEventListener('click', () => {
    let text = "prout".split('');
    let interval = setInterval(() => {
        document.write(text[0]);
        text = text.slice(1);

        if (!text.length) {
            clearInterval(interval);
          }
    }, 500);
   
})

/*Exercise 2
Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.*/

timerButton = document.createElement("button");
timerButton.textContent = "Start the timer";
document.body.appendChild(timerButton);
const displayTime = () => {
let current = 1;
    let timer = setInterval(() => {
        let minutes = (current - current % 60)/60 
        let seconds = current % 60
        if (current < 60) {
            document.body.innerHTML = current + " seconds";
            current++;
        }
      
        else if (current < 120) {
            document.body.innerHTML = minutes + " minute " + seconds + " seconds have passed"
            current++;
         }
        else  {
            document.body.innerHTML = minutes + " minutes " + seconds + " seconds have passed"
            current++;
         }
    }, 100);
}
timerButton.addEventListener('click', displayTime);




