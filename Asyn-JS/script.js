const p1 = document.createElement("p")
document.body.appendChild(p1)
p1.innerHTML = "Press to see the BeCode rules" + "<br />"

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

const p2 = document.createElement("p")
document.body.appendChild(p2)
p2.innerHTML = "<br />" + "Promise syntax" + "<br />"

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
        localStorage.setItem("name", data1)
        let div = document.createElement("div")
        body.appendChild(div)
        div.textContent = data1
        }).catch(error => {
            console.log('There was an error!', error)
          })
    })

//Also add a <select> field with a few countries in it, to narrow down the search to a specific country. You'll have to look in agify documentation to know more about that.
//Store the previous results in a localStorage so you don't have to fetch them again!

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
        localStorage.setItem("nameCountry", data1)
        let div = document.createElement("div")
        body.appendChild(div)
        div.textContent = data1
        }).catch(error => {
            console.log('There was an error!', error)
          })
    })


//Using the promise syntax? Try to use async/await instead!

const p3 = document.createElement("p")
body.appendChild(p3)
p3.innerHTML = "<br />" + "Async/await syntax" + "<br />"

const input1 = document.createElement("input")
input.setAttribute("type", "text")
document.body.appendChild(input1)

const button2 = document.createElement("button")
button2.innerText = "Press me again!"
document.body.appendChild(button2)

button2.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.agify.io/?name=' + input1.value)
        const data = await response.json()
        let data1 = await JSON.stringify(data)
        let div = document.createElement("div")
        body.appendChild(div)
        div.textContent = data1
        }
    catch (e) {
        console.error(e)
    }
})
    const select1 = document.createElement("select")
    document.body.appendChild(select1)
    
    let option01 = new Option ("Select the country")
    select1.appendChild(option01)
    
    let option11 = new Option ("US")
    select1.appendChild(option11)
    
    option21 = new Option ("BE")
    select1.appendChild(option21)
    
    option31 = new Option ("UA")
    select1.appendChild(option31)
    
    option41 = new Option ("PL")
    select1.appendChild(option41)
    
    select1.addEventListener('click', async () => {
        try {
            const response = await fetch('https://api.agify.io/?name=' + input1.value + '&country_id=' + select1.value)
            const data = await response.json()
            let data1 = await JSON.stringify(data)
            let div = document.createElement("div")
            body.appendChild(div)
            div.textContent = data1
            }
        catch (e) {
            console.error(e)
        }
})
    