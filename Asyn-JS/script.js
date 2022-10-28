const button = document.createElement("button")
button.innerText = "Press me!"
document.body.appendChild(button)

const ul = document.createElement("ul")
document.body.appendChild(ul)

button.addEventListener('click', () => {
    fetch('becode.json')
    .then(response => {return response.json()})
    .then(data => {
        for (el of data) {
        let li = document.createElement('li')
        li.textContent = el
        ul.appendChild(li)
        }
    }
    )
})

const input = document.createElement("input")
input.setAttribute("type", "text")
document.body.appendChild(input)

const button1 = document.createElement("button")
button1.innerText = "Press me too!"
document.body.appendChild(button1)
body = document.querySelector("body")

button1.addEventListener('click', () => {
    fetch('https://api.agify.io/?name=' + input.value)
    .then(response => {return response.json()})
    .then(data => {
        let data1 = JSON.stringify(data)
        let div = document.createElement("div")
        body.appendChild(div)
        div.textContent = data1
        }).catch(error => {
            console.log('There was an error!', error)
          })
    })

//Also add a <select> field with a few countries in it, to narrow down the search to a specific country. You'll have to look in agify documentation to know more about that.

const select = document.createElement("select")
document.body.appendChild(select)

let option0 = new Option ("Select the country")
select.appendChild(option0)

let option1 = new Option ("US")
select.appendChild(option1)

option2 = new Option ("BE")
select.appendChild(option2)

option3 = new Option ("UA")
select.appendChild(option3)

option4 = new Option ("PL")
select.appendChild(option4)

select.addEventListener('click', () => {
    fetch('https://api.agify.io/?name=' + input.value + '&country_id=' + select.value)
    .then(response => {return response.json()})
    .then(data => {
        let data1 = JSON.stringify(data)
        let div = document.createElement("div")
        body.appendChild(div)
        div.textContent = data1
        }).catch(error => {
            console.log('There was an error!', error)
          })
    })

//Store the previous results in a localStorage so you don't have to fetch them again!