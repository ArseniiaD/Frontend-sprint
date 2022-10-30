const button = document.createElement("button")
button.innerText = "Press to start!"
document.body.prepend(button)
button.classList.add('button')

const p = document.createElement("p")
p.textContent = "When your score is 100 - you win!"
document.body.prepend(p)
p.classList.add('p')

const holes = [...document.querySelectorAll('.hole')]

let score = 0
let score1 = document.querySelector('.score span')

const startGame = () => {
       const i = Math.floor(Math.random() * holes.length)
       const hole = holes[i]
       let timer = 0

       const mole = document.createElement('img')
       mole.classList.add('mole')
       mole.src = 'mole.png'

       hole.appendChild(mole)

       mole.addEventListener('click', () => {
        score += 10
        score1.textContent = score
        })

      hole.appendChild(mole)
      
      if (score < 100) {
      timer = setTimeout(() => {
        hole.removeChild(mole)
        startGame()
        }, 1500)
      }
      else {
        alert("You won!")
      }
} 

button.addEventListener('click', startGame)