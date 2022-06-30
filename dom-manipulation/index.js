const data = [
    {
        id: 1,
        name: 'momo',
        hobbies: 'sleeping'
    },
    {
        id: 2,
        name: 'ajax',
        hobbies: 'pink pudge'
    },
    {
        id: 3,
        name: 'bizkit',
        hobbies: 'racing'
    },
]

let button = document.getElementById('displayBtn')


function displayData() {
    data.forEach(cat => {
        //display cats
        let todoList = document.getElementById('to-do')
        let catNameEle = document.createElement('h2')
        catNameEle.innerText = `name: ${cat.name}`
        todoList.append(catNameEle)
        //display hobbies
        let hobbyElement = document.createElement('h4')
        hobbyElement.innerText = `hobby ${cat.hobbies}`
        todoList.append(hobbyElement)
    });
}

button.addEventListener("click", displayData, console.log('clicked')) 

