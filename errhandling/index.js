const fetchContainer = document.getElementById('err3-fetch');
const fetchBtn = document.getElementById('fetch-btn');
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const form = document.getElementById('form');
const formErr = document.getElementById('err2');

async function getData() {
    try {
        let response = await fetch('url');
        let useData = await response.json()
        const dataTitle = document.createElement('h2');
        dataTitle.innerText = useData.title
    } catch (error) {
        const errMsg = document.createElement('h2');
        errMsg.setAttribute('id', 'err');
        errMsg.innerText = error;
        fetchContainer.append(errMsg);
        setTimeout(() => {
            errMsg.innerText = '';
        }, 2000)
    }
}

function submitHandler(e) {
    e.preventDefault();
    let errMessages = [];
    if(password.length <5) {
        errMessages.push('pw must be at least 6 chars')
    }
    if (errMessages.length > 0) {
        e.preventDefault();
        formErr.innerText = errMessages.join(', ')
        setTimeout(() => {
            formErr.innerText = '';
        }, 2000)
    }
}

form.addEventListener('submit', submitHandler)
fetchBtn.addEventListener('click', getData)