const holes = document.querySelectorAll('.hole')
//const holes = [...document.querySelectorAll('.hole')]
const mole = document.createElement('img')
mole.classList.add('mole')
mole.src = 'mole.png'
const scoreSpan = document.querySelector('.score span')
let score = 0

const startGame = () => {
      const i = Math.floor(Math.random() * holes.length)
      const hole = holes[i]
      let timer = 0

      hole.appendChild(mole)

      mole.addEventListener('click', () => {
        score += 10
        scoreSpan.textContent = score
        clearInterval(timer)
        setTimeout(() => {
            hole.removeChild(mole)
            startGame()
        }, 1500)
        
      })

      hole.appendChild(mole)

      timer = setTimeout(() => {
        hole.removeChild(mole)
        startGame()
    }, 1500)
} 
startGame()