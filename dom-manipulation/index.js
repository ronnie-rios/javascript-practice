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
//append lets append strings while appendChild requires an element


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

button.addEventListener("click", displayData) 

//fetching data
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
let postSection = document.getElementById('post-section')

window.onload = async () => {
    getPosts()
}

async function getPosts() {
    try {
        let response = await fetch(apiUrl)
        let data = await response.json()
        const first10 = data.slice(0 , 10)
        console.log(first10)
        first10.forEach(post => {
            displayPosts(post)
            createButton()
        })
    } catch (error) {
        console.log(error)
    }
}

function displayPosts(post) {
    //create posts
    let postTitle = document.createElement('h3')
    postTitle.innerText = `title: ${post.title}`
    postSection.append(postTitle)
}

function createButton() {
    //add button
    let deleteButton = document.createElement('button')
    deleteButton.append(postSection)
    deleteButton.addEventListener("click", removePosts)
}

function removePosts() {
    postTitle.innerText("")
}